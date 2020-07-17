---
id: base64
title: Query Params, Base64, Pain and Troubles.
date: '2020-04-05T00:00:00.000Z'
image: https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
description: Don`t trust base64 encoding.
---

We use URI a lot every day, but what do we really know about it? Fortunately, we have many useful resources. One of them is IETF - Internet standards track protocol for the Internet community. Internet Engineering Task Force is an open standards organization which develops and promotes voluntary Internet standards. To learn more go to URI chapter [tools.ietf.org](https://tools.ietf.org/html/rfc3986). A Uniform Resource Identifier (URI) is a compact sequence of characters that identifies an abstract or physical resource. It is necessary to pay attention to characters section.

> The URI syntax provides a method of encoding data, presumably for the  
> sake of identifying a resource, as a sequence of characters.

According to IETF link is transformed according to **RFC 3986 URI Generic Syntax** and will be encoding to **ABNF** notation.

> This specification uses the Augmented Backus-Naur Form (ABNF)  
> notation, including the following core ABNF syntax rules  
> defined by that specification: ALPHA (letters), CR (carriage return),  
> DIGIT (decimal digits), DQUOTE (double quote), HEXDIG (hexadecimal  
> digits), LF (line feed), and SP (space).

The ABNF notation defines its terminal values to be non-negative integers (codepoints) based on the US-ASCII coded character set. A URI is composed from a limited set of characters consisting of digits, letters, and a few graphic symbols. The latest definition is the most trouble shooting for us. If data for a URI component would conflict with a reserved
character's purpose as a delimiter, then the conflicting data must be percent-encoded before the URI is formed.

We should check both list of symbols to be sure that there no conflicts. First the sub-delims URI then base64 symbols.

#### URI sub-delims list

> "!" / "\$" / "&" / "'" / "(" / ")" / "\*" / **"+"** / "," / ";" / "="

#### base64 symbols

> Uppercase letters (indices 0-25): ABCDEFGHIJKLMNOPQRSTUVWXYZ  
> Lowercase letters (indices 26-51): abcdefghijklmnopqrstuvwxyz  
> Digits (indices 52-61): 0123456789  
> Special symbols (indices 62-63): **+** /

It seems like we found out potential errors! Focus your attention on **"+"** symbol. This symbol exists into two lists with different meanings. We find more about using the plus symbol into query params on [w3.org](https://www.w3.org/Addressing/URL/uri-spec.html) - **The World Wide Web Consortium**. The World Wide Web Consortium (W3C) tries to foster compatibility and agreement among industry members in the adoption of new standards defined by the W3C. Lets check URI section.

> Within the query string, the plus sign is reserved as shorthand notation for a space.  
> Therefore, real plus signs must be encoded.  
> This method was used to make query URIs easier to pass in systems which did not allow spaces.

The characters allowed in a URI are either reserved or unreserved (or a percent character as part of a percent-encoding). Reserved characters are those characters that sometimes have special meaning. For example, forward slash characters are used to separate different parts of a URL (or more generally, a URI). Unreserved characters have no such meanings. Using percent-encoding, reserved characters are represented using special character sequences. The sets of reserved and unreserved characters and the circumstances under which certain reserved characters have special meaning have changed slightly with each revision of specifications that govern URIs and URI schemes.

Summarise. We have two lists:

- Reserved Characters [RFC 3986 section 2.2](https://tools.ietf.org/html/rfc3986#section-2.2)

- Unreserved Characters [RFC 3986 section 2.3](https://tools.ietf.org/html/rfc3986#section-2.3)

Other URI characters must be percent encoded.

There is a source of many mistakes. We have only one symbol concurrence and it is not safe anymore. Other encoder can bring more conflicts. Particular example can be provide using [qs](https://www.npmjs.com/package/qs).

```javascript
qs.parse('key=some+value');
```

Don`t be surprised but you will receive:

```javascript
{
  key: 'some value';
}
```

Output is valid because the **"+"** symbol has **"space"** meaning. Base64 standard has another meaning for this symbol.

Unit testing base64 encoding-decoding is really sadness. For example [js-base64](https://www.npmjs.com/package/js-base64) has more than 5 millions downloades on npm and has unplesian vulnerability. **js-base64** using standart atob - btoa browser utilites for encode and decode base64 strings but Nodejs have no **window** and **atob** - **btoa** too. So **js-base64** developers using polyfill offcourse. Unfortunately polyfill doesn`t generate the same exceptions like **atob** or **bota** **window** methods.

```javascript
var _atob = global.atob
  ? function(a) {
      return global.atob(a);
    }
  : function(a) {
      return a.replace(/\S{1,4}/g, cb_decode);
    };
```

[github.com/dankogai/js-base64](https://github.com/dankogai/js-base64/blob/e8a9a09edaf79fddee3623d97421151dcbd384c9/base64.js#L142).

Let's check example. The **"+"** symbol will be transformed to **%3D** characters using encodeURIComponent. For many reasons this string might be not decoded. Runtime execution **atob** to string with **%3D** symbol will generate exception. During local testing **js-base64** hides an exception like this and continues code execution.

```javascript
atob('%3D'); // Uncaught DOMException: Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.
```

**vs**

```javascript
Base64.decode('%3D'); // �
```

Conflict of meanings is the most trouble shooting while using base64 into URI. If you continue find information about this problem you will find [tools.ietf.org](https://tools.ietf.org/html/rfc3548#page-6). Section four describe official way for resolving conflicts like this. Let's see **"Base 64 Encoding with URL and Filename Safe Alphabet"** chapter and check **"Table 2: The "URL and Filename safe" Base 64 Alphabet"**. There is no **"+"** symbol.

> This encoding should not be regarded as the same as the "base64"  
> encoding, and should not be referred to as only "base64". Unless  
> made clear, "base64" refer to the base 64 in the previous section.

Oh no! Using multiple incompatible versions of base64 is not effective decision. If you create simple project with one or two developers there is no problem. In this time large team will have more troubles. Decision like this is not obvious. Oneday a member of your team will generate links with standart encoder. What happen next? You will receive a lot of angry users. So when you choose way for encode query params check list of symbols and be sure that there no conflicts.

# Conclusion

## "These aren't the Droids you're looking for..."

<div align='center'>
    <img src='https://miro.medium.com/max/1400/1*rsNFPltOQ-qDGqnl9jB_ug.png' />
</div>

The simple features can bring a lot of troubles in porduction. Check particular realisation of your favorite libraries and be sure that you never catch conflicts like this. What should we do in order to avoid it? Good question. First of all you should read docs and check every decoded string before and after decoding. Write more unit tests, validators and delegate checking all possible cases to **jest** or **mocha**. I highly recommend you to think over why do you really need using encoding query params?

---
