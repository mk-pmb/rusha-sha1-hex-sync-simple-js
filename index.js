/* -*- coding: UTF-8, tab-width: 2 -*- */
/* eslint-disable spaced-comment, strict, no-var, one-var */
/*jslint indent: 2, maxlen: 80, browser: true */
(function namespace() {
  'use strict';
  var rusha = require('rusha');

  const EX = function sha1hex(data) {
    return rusha.createHash().update(data).digest('hex');
  };

  (function unifiedExport(e) {
    /*global define: true */
    var d = ((typeof define === 'function') && define),
      m = ((typeof module === 'object') && module);
    if (d && d.amd) { d(function f() { return e; }); }
    if (m && m.exports) { m.exports = e; }
  }(EX));
}());
