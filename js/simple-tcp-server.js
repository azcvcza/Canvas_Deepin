var net = require('net');
var server = net.createServer(function(socket){
    socket.on('data', function(data){
        socket.write('hello world');
    })
    socket.on('end', function(){
        console.log('connection shut down');
    })
    socket.write('welcome to deepin nodejs sample\n')
})
server.listen(8124,function(){
    console.log('server start');
})