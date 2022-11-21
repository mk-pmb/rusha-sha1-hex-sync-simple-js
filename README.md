
<!--#echo json="package.json" key="name" underline="=" -->
rusha-sha1hex-sync-simple
=========================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Calculate a SHA-1 hex digest of short or medium length strings in node.js or a
web browser (bundling required) independent of which protocol your website was
loaded from.
<!--/#echo -->


Is this module right for you?
-----------------------------

* You need a bundler that can make our import of
  [`rusha`](https://github.com/srijs/rusha)
  happen.

* It's a really tiny wrapper around rusha.
  I have no idea why rusha doesn't just ship it itself.
  If you only need it in one place and don't appreciate the tiny modules
  philosophy, it might be easier to copy the one relevant line from
  [index.js](index.js) into your project directly.
  (For copyright purpose, you could claim you took it from
  `rusha`'s readme instead, because that's where I took it.)



API
---

This module exports one function:

### sha1hex(data)

Your `data` must be something that `rusha` can understand,
so probably a a string.
Returns the SHA-1 digest in hex as a string.



Usage
-----

see [test.mjs](test.mjs).



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.
* Rusha fails in Waterfox 56.6 (2022.08) with "Error: out of memory"




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
MIT
<!--/#echo -->
