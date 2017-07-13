//得出脚本绝对路径，包含文件名
console.log(__filename);
//得出脚本绝地路径，不包含文件名
console.log(__dirname);

function printHello(){
	console.log("Hello,World");
}
var t = setTimeout(printHello, 2000);
clearTimeout(t);

console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("计数花时");
for(var i=1; i<=counter; i++){
	console.log(i);
}
console.timeEnd("计数花时");
console.info("程序执行完毕。");