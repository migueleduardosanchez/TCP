const net = require('net');

const client = new net.Socket();

client.connect(3000, '127.0.0.1', ()=>{
  console.log("---- Conexión TCP Exitosa ----");
});

client.on('close', ()=>{
  console.log("Conexión terminada");
});

client.on('data', (data) =>{
  console.log(`INFO ${data}`);
});
