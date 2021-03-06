const path = require('path')
const express = require('express')

var fs = require('fs');
var jsonData = JSON.parse(fs.readFileSync('document.json', 'utf8'));

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, 'index.html')
    const publicPath = express.static(path.join(__dirname, 'public'))

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })
    
    app.get('/data', function (req, res) {
				res.json(jsonData);

	});

    return app
  }
}
