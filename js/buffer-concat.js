var fs = require('fs');
//var iconv = require('iconv');
var rs = fs.createReadStream('../README.md',{highWaterMark:11});
//rs.setEncoding('utf8');
var chunks = [];
var size = 0;
var data = '';
rs.on('data', function(chunk){
    //data += chunk;// data = data.toString() + chunk.toString();
    chunks.push(chunk);
    size += chunk.length;
})
rs.on('end', function(){
    var buf = Buffer.concat(chunks,size);
    //var str = iconv.decode(buf,'utf8') can't find module
    console.log('end,str:\n',buf);
})