/*
  //* Para iniciar proyecto: tsc --init 
  //* para compilar un archivo de TS ejecutar: tsc [nombre_archivo]
  //* para activar el watchMode ejecutar: tsc nombre_archivo -w
*/

// para eviatr conflictos entre las variables declaradas entre los distintos archivo 
// encapsulamos en una IIFE(Immediately Invoked Function Expression),is a JavaScript function that runs as soon as it is defined
(() => {

const msg: string = 'Hola Mundo'

console.log(msg)

// TS infiere el tipo de dato cuando inicializamos una variable con un valor especifico
// si no inicializamos con valor TS asigna un tipo any(cualquier tipo de dato)
const objPerson = {
    name: 'Lexfer',
    age: 24
} 

let b

// si no se le asigna tipo al parametro dará error ya que por defecto 
// "noImplicitAny": true, en  el tsconfig.json
// definir el tipo de dato permite tener acceso de autocompletado de 
// los metodos disponibles para el tipo de dato
function sayHello(msg: string){
    console.log(msg)
}

})()

/* 

Tipos de datos 

Primitivos ==> Sttring, Number, Boolean, Symbol
Compuestos ==> Objectos literales, funciones, clases, arreglos

TS nos permite crear otro tipos de variables ==> crear nuevos tipos, interfaces, genéricos, tuplas etc

documentacion oficial de tipos: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

*/

