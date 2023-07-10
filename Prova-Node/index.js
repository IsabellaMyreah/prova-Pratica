//ATIVIDADE 01

// const http = require('http');
// const PORT = 5000;

// const server = http.createServer((req, res) =>{
//     res.setHeader('Content-type', 'application/json');
//     res.write();
//     res.end();
// })

// const objeto = [
//     { id: 1, nome: 'Carlos'},
//     { id: 2, nome: 'Bruno'},
//     { id: 3, nome: 'Letícia'},
// ]

// const json = JSON.stringify(objeto)
// console.log(json)




// ATIVIDADE 02

// const http = require('http')
// const PORT = 5000
// const url = require('url')
// const path = require('node:path'); 




// ATIVIDADE 04

// const http = require('http')
// const fs = require('fs')
// const PORT = 5000

// const server = http.createServer((err, data) => {
//     fs.rename('texto04.txt', 'texto04Novo.txt', (err) =>{
//         res.write();
//         res.end();
//     })
// })

// server.listen(PORT, ()=>{
//     console.log(`Servidor On!`)
// });




//ATIVIDADE 05

// const http = require('http')
// const fs = require ('fs')
// const os = require('node:os'); 
// const cpus = require('os');
// const PORT = 5000;

// const server = http.createServer((err, data) => {
//     os.cpus( 
//         (err) =>{
//         res.write();
//         res.end();
//     })
// })

// server.listen(PORT, ()=>{
//     console.log(`Servidor On!`)
// })

