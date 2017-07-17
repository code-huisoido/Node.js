'use strict';

var http = require('http'),
    url = require('url'),
    path = require('path'),
    fs = require('fs'),
    workDir = path.resolve(".");

var server = http.createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname,
        filePath = path.join(workDir, pathname);
    
    fs.stat(filePath, function (err, stat) {
        if (err) {
            console.log('a stat err!');
        } else {
            if (stat.isFile()) {
                // 是一个文件
                response.writeHead(200);
                fs.createReadStream(filePath).pipe(response);
            } else if (stat.isDirectory()) {
                var defaultPathname = ['/default.html', '/index.html'];


                /*for (var i in defaultPathname) {
                    filePath = path.join(workDir, defaultPathname[i]);
                    var stat = fs.statSync(filePath);
                    if (stat.isFile()) {
                        response.writeHead(200);
                        fs.createReadStream(filePath).pipe(response);
                        return;
                    } else {
                        response.writeHead(404);
                        console.log("404 Not Found!");
                    }
                }*/

                defaultPathname.forEach(function (pathname) {
                    filePath = path.join(workDir, pathname);
                    fs.stat(filePath, function (err, stat) {
                        if (stat.isFile()) {
                            response.writeHead(200);
                            fs.createReadStream(filePath).pipe(response);
                            return;
                        } else {
                            response.writeHead(404);
                            console.log("404 Not Found!");
                        }
                    });
                });
            }else {
                response.writeHead(404);
                console.log("404 Not Found!");
            }
        }
    });
});

server.listen(8083);


console.log("Server is running at http://127.0.0.1:8083/");