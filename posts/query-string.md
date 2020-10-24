---
id: query-string
title: 'Query String: Problems and Solutions'
date: '2020-04-05T00:00:00.000Z'
image: https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
description: Query string is simple... Not!
---

## Topics Covered in This Article

- Understanding Query String

- Query String specifications

- Troubles and solutions

## Query String

Query String is simple way to share data between client and server. Query String is component of URI (Uniform Resource Identifier). A Uniform Resource Identifier (URI) is a compact sequence of characters that identifies an abstract or physical resource.

The generic URI syntax consists of a hierarchical sequence of components referred to as the scheme, authority, path, query, and fragment. The query component is indicated by the first question mark ("?") character and terminated by a number sign ("#") character or by the end of the URI.

> URI = scheme ":" hier-part [ "?" query ][ "#" fragment ]

The query component contains non-hierarchical data. It means that any data within query string is optional and doesn't specify path to resource.

## Query String specifications

Query String is part of the URI syntax. The first URI specification [rfc1630](https://tools.ietf.org/html/rfc1630) was created in 1994 by Network Working Group with [T. Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) and were extended URNs syntax in 1997. This specification were revised and expanded by the IETF over time. [rfc2986](https://tools.ietf.org/html/rfc3986) is one of the most relevant and widely known standard. [rfc2986](https://tools.ietf.org/html/rfc3986) was created at January 2005. Specification was extended by:

- [Representing IPv6 Zone Identifiers in Address Literals and Uniform Resource Identifiers](https://tools.ietf.org/html/rfc6874)

- [URI Design and Ownership](https://tools.ietf.org/html/rfc7320)

- [Guidelines and Registration Procedures for URI Schemes](https://tools.ietf.org/html/rfc7595)

IETF [Hypertext Transfer Protocol Doc](https://tools.ietf.org/html/rfc2616) also contains related information about URI syntax.

W3C Technical Architecture Group published a lot of useful articles about URI syntax:

- [Uri Spec](https://www.w3.org/Addressing/URL/uri-spec.html)

- [Frequently asked questions](https://www.w3.org/People/Berners-Lee/FAQ.html)

- [Recommendations](https://www.w3.org/Addressing/URL/4_URI_Recommentations.html)

## Troubles and solutions

## Specials symbols

### Case

- Using base64 encoding data as query string value

### Trouble

- Conflict base64 encoded symboles and URI spec sub-delims characters

### Description

You have to safe encode data into query string. Lets read about encoding and symbols.

#### URI characters and meanings

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

Base64 has potential conflict symbols with URI reserved characters. To avoid troubles use base64 safe url characters: [tools.ietf.org](https://tools.ietf.org/html/rfc3548#page-6);

Pay attention:

> This encoding should not be regarded as the same as the \"base64\" encoding, and should not be referred
> to as only \"base64\". Unless made clear, \"base64\" refer to the base 64 in the previous section.

Parse and stringify query string safe with:

- [@waiting/base64](https://www.npmjs.com/package/@waiting/base64)
- [base64url](https://www.npmjs.com/package/base64url)
- [url-safe-base64](https://www.npmjs.com/package/url-safe-base64)

## Using Unexpected Reserved Characters

### Case

- Send non sanitized user data to server

### Trouble

- Unexpected reserved character into query string

### Description

You should always sanitized user input. Raw user input include potential risks:

- [SQL Injections](https://en.wikipedia.org/wiki/SQL_injection)
- [Code Injections](https://en.wikipedia.org/wiki/Code_injection)

Correct query string data sharing also depends on user input. If user enter reserved charecter it will broke request. For example _hashtag_ character is gen-delim: [tools.ietf.org](https://tools.ietf.org/html/rfc3986#section-2.2).

```javascript
// hash: "#myHashTag"
// href: "http://localhost:3000/?q=#myHashTag"
// search: "?q="
new URL('http://localhost:3000/?q=#myHashTag');
```

What should you do to clean query?

### Solution

Use helpers to avoid corner cases:

#### axios

```javascript
axios({
  params: {
    q: '#myHashTag', // q=%23myHashTag
  },
});
```

#### qs

```javascript
qs.stringify({q: '#myHashTag'}); // q=%23myHashTag
```

#### encodeURIComponent

```javascript
encodeURIComponent('q=#myHashTag'); // q%3D%23myHashTag
```

## URI Percent Encoded Symboles

### Case

- Using query values without decode

### Trouble

- Unexpected characters
- Error handling

### Description

Unit testing is not simple. I recently use [js-base64](https://www.npmjs.com/package/js-base64). Half year ago **js-base64** had unpleasant vulnerability. **js-base64** used **atob** - **btoa** methods for encode and decode base64 string. If **window** is undefined or has no **atob** **js-base64** polyfilling it. Unfortunately polyfill did not throwing same exceptions like **window.atob** or **window.btoa**.

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

Percent encoded **plus** character (commonly use in base64) has **%3D** value. Lets try execute **atob** and **Base64.decode** functions:

```javascript
atob('%3D'); // Uncaught DOMException: Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.
```

**vs**

```javascript
Base64.decode('%3D'); // �
```

# Conclusion

## "These aren't the Droids you're looking for..."

<div align='center'>
  <img src='https://miro.medium.com/max/1400/1*rsNFPltOQ-qDGqnl9jB_ug.png' />
</div>

Simple features can bring a lot of troubles. Query string is powerfull but I should use **POST**, **PUT** and other. It's more simple and safety. If you want use query string I recommend you check encoded data, write tests and validators to avoid all corner cases.

<h2 align='right'>
    18.10.2020
</h2>
