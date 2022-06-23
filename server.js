var express = require('express');
const server = http.createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
app.use(cors({
  origin: '*'
}));

var IOT_socket;
app.get("/get",function(req,res)
{
    console.log(req.query);
    res.send(req.query);
    io.to(IOT_socket).emit("got_it",req.query);
});

io.on('connection',(socket)=>
{
    IOT_socket=socket.id;
    console.log("IOT  user connected"+IOT_socket);
});
server.listen(3000, () => {
console.log('listening on *:3000');
});
