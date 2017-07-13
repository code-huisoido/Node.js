var fs = require("fs");
var data = '';

//创建可读流
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');

//处理流事件 -->data, end, and error
readerStream.on('data', function(chunk){
	data += chunk;
});

readerStream.on('end', function(){
	console.log(data);
});

readerStream.on('error', function(err){
	console.log(err.stack);
});
console.log("第一段程序执行完毕");


//创建写入流
var data2 = "Tomorrow is a rainy day! ";

var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data2, "UTF8");
writerStream.end();

writerStream.on('finish', function(){
	console.log("写入完成。");
});

writerStream.on('error', function(err){
	console.log(err.stack);
});
console.log("第二段程序执行完毕");

//管道流(经测试，发现写入文件并不是完全覆盖，是部分覆盖)
var readerStream = fs.createReadStream('input.txt');
var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);
console.log("第三段程序执行完毕");

