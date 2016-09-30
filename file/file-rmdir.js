var fs = require("fs");
fs.rmdir("./hui", function(err){
	if(err) return console.err(err);
	console.log("读取 /hui目录");
	fs.readdir("./hui/", function(err, files){
		if(err) return console.error(err);
		files.forEach(function(file){
			console.log(file);
		});
	});
});

