var Path = require ('path');
var rootPath = Path.normalize(__dirname +'/../../' )
module.exports={

    development: {
        db: 'mongodb://localhost/meanExample',
        rootPath:rootPath,
        port:_process.env.PORT || 3030

    }



}