'use strict';

const {ProgressivePair} = require('pson');

const pair = new ProgressivePair();

exports.name = 'pson';

exports.encode = data => pair.toBuffer(data);

exports.decode = data => pair.decode(data);
