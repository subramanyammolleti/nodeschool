/* 
	MY FIRST ASYNC I/O!
	
	'fs' module in Node
	using readFile API with callback
*/

// including fs module
var fs = require('fs')
fs.readFile(process.argv[2], function finishedReading(error, fileData) {
  if (error) return console.error(error)
  else console.log(fileData.toString().split('\n').length-1);  
});