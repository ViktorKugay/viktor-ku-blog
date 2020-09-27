---
id: query-string
title: 'Query String: Specification and Bugs'
date: '2020-04-05T00:00:00.000Z'
image: https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
description: Query string is simple... Not!
---

## Topics Covered in This Article

- Understanding Query String in Web

- Query String standartization

- Frequently trouble cases

## Query String

Query String is simple way to share data between client and server. Query String is component of URI (Uniform Resource Identifier). A Uniform Resource Identifier (URI) is a compact sequence of characters that identifies an abstract or physical resource.

The generic URI syntax consists of a hierarchical sequence of components referred to as the scheme, authority, path, query, and fragment. The query component is indicated by the first question mark ("?") character and terminated by a number sign ("#") character or by the end of the URI.

> URI = scheme ":" hier-part [ "?" query ][ "#" fragment ]

The query component contains non-hierarchical data. It means that any data within query string is optional and doesn't specify path to resource.

`https://example.ru` and `https://example.ru?name=viktor` both identify the same resource.

## Query String standartization

Query String is part of the URI syntax. The first URI specification [rfc1630](https://tools.ietf.org/html/rfc1630) was created in 1994 by Network Working Group with [T. Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) and were extended URNs syntax in 1997. This specification were revised and expanded by the IETF over time. [rfc2986](https://tools.ietf.org/html/rfc3986) is one of the most relevant and widely known standard today. [rfc2986](https://tools.ietf.org/html/rfc3986) was created at January 2005. Specification was extended by:

- [Representing IPv6 Zone Identifiers in Address Literals and Uniform Resource Identifiers](https://tools.ietf.org/html/rfc6874)

- [URI Design and Ownership](https://tools.ietf.org/html/rfc7320)

- [Guidelines and Registration Procedures for URI Schemes](https://tools.ietf.org/html/rfc7595)

IETF [Hypertext Transfer Protocol Doc](https://tools.ietf.org/html/rfc2616) also contains related information about URI syntax.

W3C Technical Architecture Group published a lot of healthy documents about URI:

- [Uri Spec](https://www.w3.org/Addressing/URL/uri-spec.html)

- [Frequently asked questions](https://www.w3.org/People/Berners-Lee/FAQ.html)

- [Recommendations](https://www.w3.org/Addressing/URL/4_URI_Recommentations.html)

Query string has no universal specification. All documents describe main features and recomendations. Every developers can maintain his own query parsers so it would bring a lot of troubles.

## Frequently trouble cases

## Specials symbols

### Case

- Using base64 encoding data as query string value

### Trouble

- Errors during parse **-** and **+** symbols

### Description

> A URI is composed from a limited set of characters consisting of
> digits, letters, and a few graphic symbols. A reserved subset of
> those characters may be used to delimit syntax components within a
> URI while the remaining characters, including both the unreserved set
> and those reserved characters not acting as delimiters, define each
> component's identifying data.

#### Percent-Encoding

A percent-encoding mechanism is used to represent a data octet in a component when that octet's corresponding character is outside the allowed set or is being used as a delimiter of, or within, the component.

#### Reserved Characters

URIs include components and subcomponents that are delimited by characters in the "reserved" set. These characters are called "reserved" because they may (or may not) be defined as delimiters by the generic syntax, by each scheme-specific syntax, or by the implementation-specific syntax of a URI's dereferencing algorithm.

> reserved = gen-delims / sub-delims
> gen-delims = ":" / "/" / "?" / "#" / "[" / "]" / "@"
> sub-delims = "!" / "\$" / "&" / "'" / "(" / ")" / "\*" / "+" / "," / ";" / "="

#### Unreserved Characters

Characters that are allowed in a URI but do not have a reserved purpose are called unreserved. These include uppercase and lowercase letters, decimal digits, hyphen, period, underscore, and tilde.

> unreserved = ALPHA / DIGIT / "-" / "." / "\_" / "~"

### Solution

> If data for a URI component would conflict with a reserved
> character's purpose as a delimiter, then the conflicting data must be
> percent-encoded before the URI is formed.

Base64 characters list has potential dangerous characters that conflict with URI reserved characters so to be carefully I recommend you using base64 safe url characters. [tools.ietf.org/html/rfc3548#page-6](https://tools.ietf.org/html/rfc3548#page-6) - specification description.

Pay attention:

> This encoding should not be regarded as the same as the \"base64\" encoding, and should not be referred
> to as only \"base64\". Unless made clear, \"base64\" refer to the base 64 in the previous section.

To safety parse and stringify query string data you may use:

- [@waiting/base64](https://www.npmjs.com/package/@waiting/base64)
- [base64url](https://www.npmjs.com/package/base64url)
- [url-safe-base64](https://www.npmjs.com/package/url-safe-base64)

## Sub-delims symbols

### Case

- Using string with `,`

> ?name=viktor&message=hello,world

### Trouble

- Parse string as array of strings

### Description

As I mention above `,` is sub-delim symbol so every comma within query string have to be percent encoded. Lot of the services parse percent encoded commas correct but it's not a silver bullet.

### Solution

Query String hasn't only one standart so different parsers rules is not mistake but I had unpleasant experience with errors during parsing commas. I prefer try all scenarios before release application today.

## Unit testing

### Case

- Handling errors during parsing query string

### Trouble

- Different behavior during execute code into browser and tests

### Description

Write good unit test to check base64 encoding-decoding is not simple. For example [js-base64](https://www.npmjs.com/package/js-base64) has more than 5 millions downloades on npm. Half year ago **js-base64** had unpleasant vulnerability. **js-base64** used standart atob - btoa browser methods for encode and decode base64 strings but Nodejs has no **window** and **atob** or **btoa** methods so **js-base64** polyfilling it. Unfortunately polyfill did not generate same exceptions like **window.atob** or **window.btoa**.

```javascript
var _atob = global.atob
  ? function (a) {
      return global.atob(a);
    }
  : function (a) {
      return a.replace(/\S{1,4}/g, cb_decode);
    };
```

[github.com/dankogai/js-base64](https://github.com/dankogai/js-base64/blob/e8a9a09edaf79fddee3623d97421151dcbd384c9/base64.js#L142).

The **+** symbol withing query string transformed to **%3D** character.

```javascript
atob('%3D'); // Uncaught DOMException: Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.
```

**vs**

```javascript
Base64.decode('%3D'); // �
```

It means that unit tests is not safe anymore. To solve this problem let's read [tools.ietf.org](https://tools.ietf.org/html/rfc3548#page-6). Section four describe official way for resolving conflicts like this. Let's see **"Base 64 Encoding with URL and Filename Safe Alphabet"** chapter and check **"Table 2: The "URL and Filename safe" Base 64 Alphabet"**. There is no **"+"** symbol.

# Conclusion

## "These aren't the Droids you're looking for..."

<div align='center'>
  <img src='https://miro.medium.com/max/1400/1*rsNFPltOQ-qDGqnl9jB_ug.png' />
</div>

Simple features can bring a lot of troubles. Query string is powerfull feature but I would use POST, PUT and others methods with the same body params. It's just more safety.

<h2 align='right'>
    09.21.2020
</h2>
