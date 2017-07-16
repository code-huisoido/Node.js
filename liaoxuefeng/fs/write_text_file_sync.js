'use strict';

var fs = require('fs');

var data = "Hello, Nodejs";
fs.writeFileSync('output_sync.txt', data);