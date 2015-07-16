mongoose = require('mongoose');

module.exports = function(config) {

    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback() {
        console.log('MONGO TIMES');
    });

    var userSchema= mongoose.Schema({
        firstName:String,
        lastName:String,
        userName:String

    });
    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function(err,collection){

        User.create({firstName:'Wayne',lastName:'Ben',userName:'wayne'});
        User.create({firstName:'Tom',lastName:'Ben',userName:'Gozzi5'});
        User.create({firstName:'Wayne',lastName:'Ben',userName:'Gozzi6'});

    })
}