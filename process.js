process.on('exit', function(code){
	//以下代码永远不会执行
	setTimeout(function(){
		console.log("看我会不会执行");
	}, 1000);
	console.log("退出码为:", code);
});

//输出到终端
process.stdout.write("Hello World!" + "\n");

/*通过参数读取
 *第一个返回值总是node.exe的路径
 *第二个返回值是脚本的绝对路径，包含文件名
 */
process.argv.forEach(function(val, index, array){
	console.log(index + ':' + val);
});

//获取node.exe的路径
console.log(process.execPath);
	
//平台信息
console.log(process.platform);

//输出当前目录
console.log("当前目录：" + process.cwd());

//输出当前版本
console.log("当前版本：" + process.version);

console.log("程序执行结束");

