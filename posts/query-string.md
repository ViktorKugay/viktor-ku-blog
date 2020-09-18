---
id: query-string
title: Query String. Understanding. Solve troubles.
date: '2020-04-05T00:00:00.000Z'
image: https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
description: Query string is simple... Not! Some notes about important URI features.
---

# Topics Covered in This Article

1. Explaining Query String in Web

2. Query String standartization

3. Most frequently trouble cases
    
    * Specials symbols

    * Sub-delims symbols

    * Test coverage

# Explaining Query String in Web

Query String is component of URI (Uniform Resource Identifier). A Uniform Resource Identifier (URI) is a compact sequence of characters that identifies an abstract or physical resource.

The generic URI syntax consists of a hierarchical sequence of components referred to as the scheme, authority, path, query, and fragment. The query component is indicated by the first question mark ("?") character and terminated by a number sign ("#") character or by the end of the URI. 

> URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]

The following is example URI and component parts:

> https://example.com:8042/over/there?name=ferret#nose
> \___/ \________________/\_________/ \_________/ \__/
>   |           |              |           |        |
> scheme   authority        path         query   fragment

The query component contains non-hierarchical data. It means that any data within query string is optional and doesn't specify path to resource. 

> https://example.ru is equal https://example.ru?name=viktor

# Query String standartization

Query String is part of the URI syntax so URI specification commonly standartize main Query String features. 

The first URI specification [rfc1630](https://tools.ietf.org/html/rfc1630) was created in 1994 by Network Working Group with [T. Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) and were extended URNs syntax in 1997. This specification were revised and expanded by the IETF over time. [rfc2986](https://tools.ietf.org/html/rfc3986) is one of the most relevant and widely known standard today. [rfc2986](https://tools.ietf.org/html/rfc3986) was created at January 2005. 

This documentation where extended by: 
* [Representing IPv6 Zone Identifiers in Address Literals and Uniform Resource Identifiers](https://tools.ietf.org/html/rfc6874)
* [URI Design and Ownership](https://tools.ietf.org/html/rfc7320)
* [Guidelines and Registration Procedures for URI Schemes](https://tools.ietf.org/html/rfc7595) 

IETF [Hypertext Transfer Protocol Doc](https://tools.ietf.org/html/rfc2616) contains related information about URI syntax and extends documents described above. 

W3C Technical Architecture Group published a lot of healthy documents about URI: 

* [Uri Spec](https://www.w3.org/Addressing/URL/uri-spec.html)
* [Frequently asked questions](https://www.w3.org/People/Berners-Lee/FAQ.html) 
* [Recommendations](https://www.w3.org/Addressing/URL/4_URI_Recommentations.html)

The documents mentioned above describe main URI syntax but they aren't collection of strict rules. Lot of Query String consumers like Web Servers and client applications parse Query String according to internal rules.

# Most frequently trouble cases

## Specials symbols

### Case

* Using base64 encoding data

### Problem

* Errors during parse **-** and **+** symbols

### Description

> A URI is composed from a limited set of characters consisting of
> digits, letters, and a few graphic symbols.  A reserved subset of
> those characters may be used to delimit syntax components within a
> URI while the remaining characters, including both the unreserved set
> and those reserved characters not acting as delimiters, define each
> component's identifying data.

#### Percent-Encoding

A percent-encoding mechanism is used to represent a data octet in a component when that octet's corresponding character is outside the allowed set or is being used as a delimiter of, or within, the component.

#### Reserved Characters

URIs include components and subcomponents that are delimited by characters in the "reserved" set.  These characters are called "reserved" because they may (or may not) be defined as delimiters by the generic syntax, by each scheme-specific syntax, or by the implementation-specific syntax of a URI's dereferencing algorithm.

> reserved  = gen-delims / sub-delims
> gen-delims  = ":" / "/" / "?" / "#" / "[" / "]" / "@"
> sub-delims  = "!" / "$" / "&" / "'" / "(" / ")" / "*" / "+" / "," / ";" / "="


#### Unreserved Characters

Characters that are allowed in a URI but do not have a reserved purpose are called unreserved.  These include uppercase and lowercase letters, decimal digits, hyphen, period, underscore, and tilde.

> unreserved  = ALPHA / DIGIT / "-" / "." / "_" / "~"

### Solution

> If data for a URI component would conflict with a reserved
> character's purpose as a delimiter, then the conflicting data must be
> percent-encoded before the URI is formed.

Base64 characters list has potential dangerous characters that conflict with URI reserved characters so to be carefully I recommend you using base64 safe url characters. [tools.ietf.org/html/rfc3548#page-6](https://tools.ietf.org/html/rfc3548#page-6) - specification description.

Pay attention:

> This encoding should not be regarded as the same as the \"base64\" encoding, and should not be referred 
> to as only \"base64\". Unless made clear, \"base64\" refer to the base 64 in the previous section.  

You can use:

* [@waiting/base64](https://www.npmjs.com/package/@waiting/base64)
* [base64url](https://www.npmjs.com/package/base64url)
* [url-safe-base64](https://www.npmjs.com/package/url-safe-base64)


