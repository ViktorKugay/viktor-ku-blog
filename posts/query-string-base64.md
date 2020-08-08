---
id: query-base64-pain-troubles
title: Query string, Base64, Pain and Troubles.
date: '2020-04-05T00:00:00.000Z'
image: https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
description: Query string is simple. Not! The little story about important URI features.
---

# Introduction

We use Uniform Resource Identifier every day. We use it to send email or controll smart home system, check latest news or buy our favorite coffee. The Uniform Resource Identifier is an important part of our lives but what do we really know about it?

In order to abstract the idea of a generic object, the web needs the concepts of the universal set of objects, and of the universal set of names or addresses of objects. A Universal Resource Identifier is a member of this universal set of names in registered name spaces and addresses referring to registered protocols or name spaces. Today URI is part of the global namespaces ecosystem and one of the most frequently used instrument to identify particular resource.

The first URI specification [rfc1630](https://tools.ietf.org/html/rfc1630) was created in 1994 by Network Working Group of [T. Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) and were extended URNs syntax in 1997. This specification were revised and expanded by the IETF over time. The W3C's Technical Architecture Group published a lot of useful documents about URI: [Uri Spec](https://www.w3.org/Addressing/URL/uri-spec.html), [Frequently asked questions](https://www.w3.org/People/Berners-Lee/FAQ.html) or [Recommendations](https://www.w3.org/Addressing/URL/4_URI_Recommentations.html). Today one of the most relevant and widely known standard is [rfc2986](https://tools.ietf.org/html/rfc3986). This document was created at January 2005. In this specification describes main syntax features. IETF extended this document over time: [Representing IPv6 Zone Identifiers in Address Literals and Uniform Resource Identifiers](https://tools.ietf.org/html/rfc6874), [URI Design and Ownership](https://tools.ietf.org/html/rfc7320) and [Guidelines and Registration Procedures for URI Schemes](https://tools.ietf.org/html/rfc7595) documents. Many other related documents like [Hypertext Transfer Protocol Doc](https://tools.ietf.org/html/rfc2616) contain related information about URI so if you really interests URI specification you have to learn a lot of separate resources, documents and memorandums.

# Cases and Troubles

A Uniform Resource Identifier (URI) is a compact sequence of characters that identifies an abstract or physical resource.

> The URI syntax provides a method of encoding data, presumably for the sake of identifying a resource, as a sequence of characters.

URI will be transformed according to **RFC 3986 URI Generic Syntax** and will be encoding to **ABNF** notation.

> This specification uses the Augmented Backus-Naur Form (ABNF) notation, including the following core ABNF syntax rules defined by that specification: ALPHA (letters), CR (carriage return), IGIT (decimal digits), DQUOTE (double quote), HEXDIG (hexadecimal digits), LF (line feed), and SP (space).

The ABNF notation defines its terminal values to be non-negative integers (codepoints) based on the US-ASCII coded character set. A URI is composed from a limited set of characters consisting of digits, letters, and a few graphic symbols. The latest definition is the most trouble shooting for us. If data for a URI component would conflict with a reserved character's purpose as a delimiter, then the conflicting data must be percent-encoded before the URI is formed.

We should check both (URI and base64) list of symbols to be sure that there is no conflicts.

#### URI sub-delims list

> \"!\" / \"\\\$\" / \"&\" / \"'\" / \"(\" / \")\" / \"\\\*\" / **"+"** / \",\" / \";\" / \"=\"

#### base64 symbols

> Uppercase letters (indices 0-25): ABCDEFGHIJKLMNOPQRSTUVWXYZ Lowercase letters (indices 26-51): abcdefghijklmnopqrstuvwxyz Digits (indices 52-61): 0123456789 Special symbols (indices 62-63): **+** /

We found potential error! Pay attention, **\"+\"** symbol exists into two lists with different meanings. We will find more about using the plus symbol with query params on [w3c URI recommendations](https://www.w3.org/Addressing/URL/4_URI_Recommentations.html).

> Within the query string, the plus sign is reserved as shorthand notation for a space. Therefore, real plus signs must be encoded. This method was used to make query URIs easier to pass in systems which did not allow spaces.

The characters allowed in a URI are either reserved or unreserved (or a percent character as part of a percent-encoding). Reserved characters are those characters that sometimes have special meaning. For example, forward slash characters are used to separate different parts of a URL (or more generally, a URI). Unreserved characters have no such meanings. Using percent-encoding, reserved characters are represented using special character sequences. The sets of reserved and unreserved characters and the circumstances under which certain reserved characters have special meaning have changed slightly with each revision of specifications that govern URIs and URI schemes.

Summarise. We have two lists:

- Reserved Characters [RFC 3986 section 2.2](https://tools.ietf.org/html/rfc3986#section-2.2)

- Unreserved Characters [RFC 3986 section 2.3](https://tools.ietf.org/html/rfc3986#section-2.3)

Other URI characters must be percent encoded.

# Examples

There is a source of many mistakes. Let's check example. I use [qs](https://www.npmjs.com/package/qs) to parse and stringify query params.

```javascript
qs.parse('key=some+value');
```

and we recevied:

```javascript
{
  key: 'some value';
}
```

Output is valid because the **"+"** symbol has **"space"** interpretation. Base64 standard has another interpretation.

Unit testing base64 encoding-decoding is really sadness. [js-base64](https://www.npmjs.com/package/js-base64) has more than 5 millions downloades on npm. This package used to have unpleasant vulnerability half year ago. **js-base64** used standart atob - btoa browser methods for encode and decode base64 but Nodejs have no **window** also **atob** - **btoa** methods so **js-base64** polyfilling it. Unfortunately polyfill did not generate the same exceptions like **atob** or **bota** **window** methods.

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

Let's check example. The **\"+\"** symbol from query string will be transformed to **%3D** character using encodeURIComponent.

```javascript
atob('%3D'); // Uncaught DOMException: Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.
```

**vs**

```javascript
Base64.decode('%3D'); // �
```

Different interpretation produce different behavior while code testing so your code is not safety. To solve this problem let's read [tools.ietf.org](https://tools.ietf.org/html/rfc3548#page-6). Section four describe official way for resolving conflicts like this. Let's see **"Base 64 Encoding with URL and Filename Safe Alphabet"** chapter and check **"Table 2: The "URL and Filename safe" Base 64 Alphabet"**. There is no **"+"** symbol.

> This encoding should not be regarded as the same as the \"base64\" encoding, and should not be referred to as only \"base64\". Unless made clear, \"base64\" refer to the base 64 in the previous section.

Multiple incompatible versions of base64 is not safety too. Simple decision is using packages like [base64-url](https://www.npmjs.com/package/base64-url) to solve this problem but it another one dependncies in your project.

# Conclusion

## "These aren't the Droids you're looking for..."

<div align='center'>
  <img src='https://miro.medium.com/max/1400/1*rsNFPltOQ-qDGqnl9jB_ug.png' />
</div>

Simple features can bring a lot of troubles. Check particular realisation of your favorite libraries and be sure that you never catch conflicts like this. What should we do in order to avoid it? Good question. First of all you should read documentation. Knowledge is a key to avoiding mistakes.

I prefer do not using query params a lot. It's useful for caching UI state or provide simple information but if you want to avoid troubles with query string you should be carefulle with encoded sensetive data.

<h2 align='right'>
    2020.07.17
</h2>

---
