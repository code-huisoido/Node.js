'use strict';

var fs = require('fs');

fs.readFile('sample.jpg', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);

        //Buffer -> String
        var text = data.toString('utf-8');
        console.log(text.length);

        // String->Buffer
        var buf = new Buffer(text, 'utf-8');
        console.log(buf);

        console.log(data.length + ' bytes');
    }
});