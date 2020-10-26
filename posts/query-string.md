---
id: query-string
title: 'Query String: Problems and Solutions'
date: '2020-04-05T00:00:00.000Z'
image: https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
description: Query string is simple... Not!
---

## Topics Covered in This Article

- Query String Definition

- Query String Specifications

- Troubles and Solutions

## Query String Definition

Query String is simple way to share data between client and server. The query is component of URI (Uniform Resource Identifier) — compact sequence of characters that identifies an abstract or physical resource.

The generic URI syntax consists of a hierarchical sequence of components referred to as the scheme, authority, path, query, and fragment. The query component is indicated by the first question mark (“?”) character and terminated by a number sign (“#”) character or by the end of the URI.

```javascript
foo://example.com:8042/over/there?name=ferret#nose
\_/   \______________/\_________/ \_________/ \__/
 |           |            |            |        |
scheme     authority     path        query   fragment
 |   _____________________|__
/ \ /                        \
urn:example:animal:ferret:nose
```

The query component contains non-hierarchical data. It means that any data within query string is optional and doesn’t specify path to resource.

## Query String specifications

Query String is part of the URI syntax. The first URI specification [rfc1630](https://tools.ietf.org/html/rfc1630) was created in 1994 by Network Working Group with [T. Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) and were extended URNs syntax in 1997. This specification were revised and expanded by the IETF over time. [rfc2986](https://tools.ietf.org/html/rfc3986) is one of the most relevant and widely known standard. [rfc2986](https://tools.ietf.org/html/rfc3986) was created at January 2005 and remain relevant to this day. Specification was extended by:

- [Representing IPv6 Zone Identifiers in Address Literals and Uniform Resource Identifiers](https://tools.ietf.org/html/rfc6874)

- [URI Design and Ownership](https://tools.ietf.org/html/rfc7320)

- [Guidelines and Registration Procedures for URI Schemes](https://tools.ietf.org/html/rfc7595)

- [Hypertext Transfer Protocol Doc](https://tools.ietf.org/html/rfc2616)

[W3C Technical Architecture Group](https://www.w3.org/Consortium/) (main international standards organization for the World Wide Web) published several documents about URI:

- [Uri Specification](https://www.w3.org/Addressing/URL/uri-spec.html)

- [Frequently Asked Questions](https://www.w3.org/People/Berners-Lee/FAQ.html)

- [Recommendations](https://www.w3.org/Addressing/URL/4_URI_Recommentations.html)

## Troubles and solutions

<div align='center'>
  <img src='https://miro.medium.com/max/968/1*86aTSQwv0iuIQT-xj1j2nw.jpeg' />
</div>

## Specials symbols

### Case

Base64 encoding data without percent encoding in query param

### Trouble

Conflict base64 encoded symbols with URI sub-delims characters.

### Description

You have simple builder for email newsletter. Builder add property “data” with base64 encoded value to query params:

```javascript
function buildLinkForEmailNewsletter(data) {
  return `/?data=${base64.encode(data)}`;
}
```

After all user receive link with query params like this:

```javascript
buildLinkForEmailNewsletter('name=Григорий');

// '/?data=bmFtZT3Qk9GA0LjQs9C+0YDQuNC5'
```

There is a conflict between URI sub-delims “**+**” symbols and base64 encoded query string. Let’s parse query by using [qs](https://www.npmjs.com/package/qs):

```javascript
qs.parse('data=bmFtZT3Qk9GA0LjQs9C+0YDQuNC5');

// { data: 'bmFtZT3Qk9GA0LjQs9C 0YDQuNC5' }
```

Instead **plus** you can see **space**. String with space is not base64 string. Let’s execute atob:

```javascript
atob(‘bmFtZT3Qk9GA0LjQs9C 0YDQuNC5’);

// name=ÐÑÐ¸Ð³Ð´`4.4.
```

### Solution

You have to safe encode base64 strings for query params. Let’s read about encoding and symbols.

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

> If data for a URI component would conflict with a reserved
> character's purpose as a delimiter, then the conflicting data must be
> percent-encoded before the URI is formed.

Base64 has potential conflicts with URI reserved characters. I recommend you use base64 URL safe: [tools.ietf.org](https://tools.ietf.org/html/rfc3548#page-6);

Pay attention:

> This encoding should not be regarded as the same as the \"base64\" encoding, and should not be referred
> to as only \"base64\". Unless made clear, \"base64\" refer to the base 64 in the previous section.

NPM packages for URL safe base64 encoding:

- [@waiting/base64](https://www.npmjs.com/package/@waiting/base64)
- [base64url](https://www.npmjs.com/package/base64url)
- [url-safe-base64](https://www.npmjs.com/package/url-safe-base64)

## Unexpected Reserved Characters

### Case

Query params without percent encoding

### Trouble

Unexpected reserved characters

### Description

As I mention above URI specification provide list of reserved and unreserved symbols. If query string data includes reserved characters it must be percent encoded.

Let's check example. Your application has simple search line. User typing search query and receiving result from server:

```javascript
axios.get(`/?q=${searchQuery}`);
```

For example user type string with hashtag character (#) to search input. Hash is gen-delim symbol ( [tools.ietf.org](https://tools.ietf.org/html/rfc3986#section-2.2) ). Server will receive empty query if you send raw search input because hash is gen-delim and all string after this character will be in hash URI component.

```javascript
new URL('http://localhost:3000/?q=#myHashTag');

// {hash: '#myHashTag', search: '?q='}
```

### Solution

Always encode query params. To avoid mistakes like this developers have multiple ways:

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

## URI Percent Encoded characters

### Case

Decode base64 query param with percent encoded characters

```javascript
atob(window.location.search); // ?value=1d2d32d%3D
```

### Trouble

- Unexpected broken string

- Error handling

### Description

I used to use **js-base64** to decode base64 string. This package use **window.atob** method for encode or decode base64. If _window_ is undefined or has no atob **js-base64** polyfilling it: [github.com/dankogai/js-base64](https://github.com/dankogai/js-base64/blob/e8a9a09edaf79fddee3623d97421151dcbd384c9/base64.js#L142).

Unfortunately polyfill and standard atob were distinguished. **js-base64** successfully decoded percent encoded string. **Atob** threw exception after execution on string with non base64 symbols.

Let's check example. The equal sign (**=**) commonly use in base64 string. This character have to be percent encoded because it URI reserved character:

```javascript
encodeURIComponent('='); // %3D
```

If you try decode percent encoded string using **window.atob** - it will throw exception:

```javascript
atob('%3D');

// Uncaught DOMException: Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.
```

**js-base64** don't do that.

```javascript
Base64.decode('%3D'); // �
```

If you wrote unit tests - forget it. All your unit tests is not relevant.

### Solution

Always use decoded query values. You can use [decodeURIComponent](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent) or external helpers like [qs](https://www.npmjs.com/package/qs).

```javascript
qs.parse('data=%3D'); // {data: '='}
```

# Conclusion

## "These aren't the Droids you're looking for..."

<div align='center'>
  <img src='https://miro.medium.com/max/1400/1*rsNFPltOQ-qDGqnl9jB_ug.png' />
</div>

Simple features can bring a lot of troubles. Query string is useful feature but I recommend you use **POST**, **PUT** and other methods for share data. It's more safety. If you still want use query string - check encoded data, add validators and write tests to avoid all corner cases in production.

<h2 align='right'>
    28.10.2020
</h2>
