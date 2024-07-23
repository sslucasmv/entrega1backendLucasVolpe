
// servidores clase


/*const http = require('http');

const server = http.createServer((request,response) => {
    console.log("se realizo una peticion al servidor")
    response.end("mi primer hola mundo desde backend trolos")

})*/

// poner a escuchar el servidor :8080

/*const PUERTO = 8080;
/*
server.listen(PUERTO,() => {
    console.log(`escuchando en el puerto h ${PUERTO}`);
});*/

const express = require('express');
const app = express();
const PUERTO = 8080;

// creamos una ruta 
app.get("/",(req,res) => {
    res.send("Mi primer servidor con express")
})

app.listen(PUERTO,() => {
    console.log(`escuchando en el puerto ${PUERTO}`);
})