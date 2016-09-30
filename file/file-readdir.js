var fs = require("fs");
console.log("查看 /hui目录");
fs.readdir("/hui/", function(err, files){
	if(err) return console.error(err);
	files.forEach(function(file){
		console.log(file);
	});
});