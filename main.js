var fs = require("fs");

//阻塞性
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("阻塞性程序执行结束！");

//非阻塞性
fs.readFile('input.txt', function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
});

console.log("非阻塞性程序执行结束！");