/* 
	MY FIRST I/O!
	
	'fs' module in Node
	using readFileSync
*/

// including fs module
var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var newlines = buf.toString().split('\n').length-1;;
console.log(newlines);