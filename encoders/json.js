'use strict';

exports.name = 'json';

exports.encode = data => JSON.stringify(data);

exports.decode = data => JSON.parse(String(data));
