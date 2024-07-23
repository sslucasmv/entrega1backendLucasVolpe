// file system
// importar file system
const fs = require('fs');

// guardar ruta archivo
const rutaEjemploUno = "ejemplo-sin.txt"

// crea el archivo
fs.writeFileSync(rutaEjemploUno,"hola estamos trabajado en un ejemplo sincronico")


// verifica que existe el archivo 
if(fs.existsSync(rutaEjemploUno)) {
    let respuesta = fs.readFileSync(rutaEjemploUno,"utf-8");
    console.log(respuesta)
} else {
    console.log("no existe el archivo")
}


// actualizar archivo 
fs.writeFileSync(rutaEjemploUno, "texto actualizado");
// agrega al final 
fs.appendFileSync(rutaEjemploUno, " y texto agregado al final");
// eliminar archivo crado 
fs.unlinkSync(rutaEjemploUno);

// trabajando con callbacks / se le suma callbacks a los argumentos 

const rutaEjemploDos = "./conCallBack.txt";

fs.writeFile(rutaEjemploDos,"nuevo archivo con callbacks", (error) => {
    if(error) return console.log("no pudimos crear el arhivo")

    fs.readFile(rutaEjemploDos,"utf-8", (error,contenido) => {
        if(error) return console.log("no pudimos leer el archivo")
        console.log(contenido);
        // agregar mas contenido
        fs.appendFile(rutaEjemploDos, " agregar mas contenido",(error) => {
            if(error) return console.log("no pudimos agregar mas contenido")
            console.log("archivo actualizado")
        })
    })
})

// trabajando con promesas 


const textoPromises = "./texto-promises.txt";

const opAsync = async () => {
    await fs.promises.writeFile(textoPromises,"texto promises");

    let respuesta = await fs.promises.readFile(textoPromises,"utf-8")
    console.log(respuesta)

    await fs.promises.unlink(textoPromises)
}

opAsync();






