'use strict';

// 引入hello模块，要用相对路径
var ref = require('./hello');

let name = 'Nicholas';
let sport = 'basketball';

ref.greet(name);
ref.like(sport);