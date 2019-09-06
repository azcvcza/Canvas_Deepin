var fs = require('fs');
var rs = fs.createReadStream('../README.md',{highWaterMark:11});
var data = '';
rs.on('data', function(chunk){
    data += chunk;// data = data.toString() + chunk.toString();
})
rs.on('end', function(){
    console.log('end,data:\n',data);
})