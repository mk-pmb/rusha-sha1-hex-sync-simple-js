// -*- coding: utf-8, tab-width: 2 -*-

import assert from 'assert';

import sha1hex from '../index.mjs';

const eq = assert.strictEqual;

eq(sha1hex(''), 'da39a3ee5e6b4b0d3255bfef95601890afd80709');
eq(sha1hex('Hello world!\n'), '47a013e660d408619d894b20806b1d5086aab03b');

console.info('+OK all tests passed.');
