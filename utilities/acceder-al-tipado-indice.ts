/* Como acceder al tipado de cierta propiedad?
Lo hacemos de una manera muy similar a la cual accedemos a valores en arrays dentro de JS, pero en este caso, en lugar de hacerlo en un array, lo aplicamos a una interfaz.*/

interface Human {
    name: string;
    age: number;
    isAlien: boolean;
}
  
function createHuman(name: Human["name"]) {
    // code
}

//*En este caso, el parámetro name en la función createHuman seria un string. La ventaja de esto es que si nosotros cambiamos ese tipo de dato por cualquier otra cosa, se cambia en automático.