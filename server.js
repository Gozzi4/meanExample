var express = require('express');


var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();
var config = require('./server/config')[env];
require('./server/config/express')(app,config);

require('./server/config/mongoose')(config);

require('./server/config/routes')(app);

var port = 3030;
app.listen(config.port);
console.log('Listening on port ' + config.port + '...');