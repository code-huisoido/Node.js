const crypto = require('crypto');

const hash = crypto.createHash('md5');

hash.update('Hello, world!');
hash.update('Hello, nodejs!');

console.log(hash.digest('hex'));


const sha1Hash = crypto.createHash('sha1');

sha1Hash.update('Hello, world!');
sha1Hash.update('Hello, nodejs!');

console.log(sha1Hash.digest('hex'));