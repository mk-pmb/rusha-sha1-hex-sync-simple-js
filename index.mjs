// -*- coding: utf-8, tab-width: 2 -*-

import rusha from 'rusha';

const EX = function sha1hex(data) {
  return rusha.createHash().update(data).digest('hex');
};

export default EX;
