    var mongoose = require('../../mongoose/'),
          Storage = mongoose.connect('mongodb://localhost/test'),
          User = Storage.bindModel('User');
    
    User.addListener('error',function(err){
      sys.puts(err);
    });
    
    User.find().each(function(item){
   //     sys.puts(sys.inspect(item));
    });
    