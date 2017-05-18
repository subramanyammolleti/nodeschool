/* 
	FILTERED LS
	
	'fs' module in Node
	using readdir API with callback
	
	to run use
	
*/

// including fs module
var fs = require('fs')
var path = require('path')
var folder = process.argv[2];
var extension = "."+process.argv[3];
fs.readdir(folder, function finishedReading(error, fileData) {
  if (error) return console.error("err",error)
  else {
	for(var i = 0;i < fileData.length; i++){
		if(path.extname(fileData[i]) === extension){
			console.log(fileData[i]);
		}	
	}	
  }
});