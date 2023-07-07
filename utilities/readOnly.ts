//* Readonly: es un utility type que te permite crear un nuevo tipo basado en un otro existente, pero haciendo que todas las propiedades de ese tipo sean de solo lectura.

//?? Readonly<T> 
// Esto genera un nuevo tipo que tiene todas las propiedades de T, pero cada propiedad es de solo lectura, lo que significa que una vez que se asigna un valor a la propiedad, no puede ser cambiado.

// con Interface
interface InterfaceName extends Readonly<Product> {
    statements
}

//con type
type TypeName = Readonly<Product>;