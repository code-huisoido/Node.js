//创建长度为10字节的Buffer实例
var buf = new Buffer(10);
//通过给定的数组创建Buffer实例
var buf = new Buffer([10, 20, 30, 40, 50]);
//通过一个字符串来创建Buffer实例
var buf = new Buffer("Today is a fine day", "utf-8");

var buf = new Buffer(256);
len = buf.write("Today is a fine day");
console.log("写入字节数：" + len);
console.log("写入字节数：" + buf.length);

//缓冲区输出，默认utf8
var buf = new Buffer(26);
for(var i=0; i<26; i++){
	buf[i] = i + 97;
}
console.log( buf.toString('ascii'));
console.log( buf.toString('ascii', 0, 5));
console.log( buf.toString('utf8', 0, 5));
console.log( buf.toString(undefined, 0, 5));

//缓冲区json输出
var buf = new Buffer("Today is a fine day");
var json = buf.toJSON(buf);
console.log(json);

//缓冲区合并
var buf1 = new Buffer("John,how about today?");
var buf2 = new Buffer("Today is fine,Hans");
var buf3 = Buffer.concat([buf1, buf2]);
console.log("dialogue:" + buf3.toString("utf8"));

//缓冲区比较
var buf1 = new Buffer('ABC');
var buf2 = new Buffer('ABCD');
var result = buf1.compare(buf2);
if(result < 0){
	console.log(buf1 + " 在 " + buf2 + "之前");
}else if(result == 0){
	console.log(buf1 + " 与 " + buf2 + "相同");
}else{
	console.log(buf1 + " 在 " + buf2 + "之后");
}

//拷贝缓冲区
var buf1 = new Buffer('ABC');
var buf2 = new Buffer(3);
buf1.copy(buf2);
console.log("buffer2 content:" + buf2.toString());

//缓冲区裁剪
var buf1 = new Buffer('Today is a fine day');
var buf2 = buf1.slice(0, 5);
console.log("buffer2 content:" + buf2.toString());