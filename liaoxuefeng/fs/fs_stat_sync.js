"use strict";

var fs = require("fs");

var stat = fs.statSync("sample.txt");

if (stat) {
    console.log("isFile: " + stat.isFile());

    console.log("isDirectory: " + stat.isDirectory());

    if (stat.isFile()) {
        console.log("size: " + stat.size);

        console.log("birth time: " + stat.birthtime);

        console.log("modified time: " + stat.mtime);
    } 
} else {
    console.log("err");
}