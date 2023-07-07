//?? ReadonlyArray
// Este tipo de dato es un array, pero la principal diferencia con los arrays “normales” es que no existen ninguno de los métodos de mutación, tales como pop, push, shift, etc.

const arr: ReadonlyArray<number> = [1,2,3,4,5]

//! evita la mutacion de los arrays
arr.pop(8)