/* -*- coding: UTF-8, tab-width: 2 -*- */
/* eslint-env browser */
/* eslint-disable spaced-comment, strict, no-var, one-var */
/*jslint indent: 2, maxlen: 80, browser: true */
(function namespace() {
  'use strict';
  var sha1hex = window.module.exports;

  function getTag(t) { return document.getElementsByTagName(t)[0]; }

  function demo() {
    var r;
    try {
      r = sha1hex(getTag('textarea').value);
    } catch (e) {
      console.error(e);
      r = 'Error: ' + String(e);
    }
    getTag('code').innerText = r;
    return false;
  }

  getTag('form').onsubmit = demo;
  demo();
}());
