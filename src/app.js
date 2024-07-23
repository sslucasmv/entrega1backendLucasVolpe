

const fs = require('fs');

const arrayPersonas = [
    { nombre:"tinki winki",apellido:"teletubbie",edad:30},
    { nombre:"Dipsi",apellido:"teletubbie",edad:40},
    { nombre:"Lala",apellido:"teletubbie",edad:50},
    { nombre:"Sol",apellido:"teletubbie",edad:34},
]

const teletubbies = "./teletubbies.json";

const guardarArchivo = async () => {
    await fs.promises.writeFile(teletubbies, JSON.stringify(arrayPersonas,null,2))  
}
guardarArchivo();

const leerArchivo = async () => {
    const respuesta = await fs.promises.readFile(teletubbies, "utf8");
    const ArrayNuevo = JSON.parse(respuesta)
    console.log(ArrayNuevo)
}

leerArchivo();