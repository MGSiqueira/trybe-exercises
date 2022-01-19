module.exports = (io) => io.on('connection', (socket) => {
  socket.emit('serverMessage', 'Olá, seja bem vindo ao nosso chat público! Use essa página para conversar a vontade.');
  socket.broadcast.emit('serverMessage', `Iiiiirraaaaa! ${socket.id} acabou de ser conectar :D`);
  socket.on('disconnect', () => {
    socket.broadcast.emit('serverMessage', `Xiii! ${socket.id} acabou de se desconectar! ;(`);
  });
  socket.on('clientMessage', (message) => {
    // console.log(`Mensagem ${message}`);
    io.emit('serverMessage', message);
  });
});