var electron = require('electron')


electron.app.on('ready', function(){
	var mainWindow = new electron.BrowserWindow({width: 600, height: 600})
	console.log(__dirname)
	mainWindow.loadURL('file://'+ __dirname + '/index.html')
	
})