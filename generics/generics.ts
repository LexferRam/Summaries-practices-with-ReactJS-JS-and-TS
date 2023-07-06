/*
Una funcion genérica es una función que puede recibir cualquier tipo de parámetro.

Generics:  being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

function identity<Type>(arg: Type): Type {
  return arg;
}

We’ve now added a type variable Type to the identity function. This Type allows us to capture the type the user provides (e.g. number), so that we can use that information later. Here, we use Type again as the return type. On inspection, we can now see the same type is used for the argument and the return type. This allows us to traffic that type information in one side of the function and out the other.

let output = identity<string>("myString");

Here we explicitly set Type to be string as one of the arguments to the function call, denoted using the <> around the arguments rather than ().

The second way is also perhaps the most common. Here we use type argument inference — that is, we want the compiler to set the value of Type for us automatically based on the type of the argument we pass in:

let output = identity("myString");

* Generic interface function

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn = identity;

* Another sintax (This makes the type parameter visible to all the other members of the interface.)

interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
 
function identity<Type>(arg: Type): Type {
  return arg;
}
 
let myIdentity: GenericIdentityFn<number> = identity;

* Using Type Parameters in Generic Constraints

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
 
let x = { a: 1, b: 2, c: 3, d: 4 };
 
getProperty(x, "a");
getProperty(x, "m");

!!Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.

*/
import { Pokemon } from "../interfaces/Pokemon"

 

(() => {

    const printObject = ( argument: any ) => {
        console.log(argument)
    } 

    // T: tipo de dato usado para el genérico
    // voy a recibir un tipo de dato en la fn que va a ser el mismo tipo del argumento
    function genericFunction<T>( argument: T ): T {
        return argument
    }

    // <T> es una forma de pasarle a la funcion un tipo especifico, el cual va a ser el tipo que tomará el argumento de la fn y tipo del retorno de la funcion
    const genericArrowFunction = <T>(argument: T): T => argument

    genericFunction('lexfer')
    genericFunction(new Date())
    genericArrowFunction(23445)

    // ---------------------------------------------------------------------------------
    // USO

    const deadpool = {
        name: 'Deadpool',
        realName: 'Wade Wiston',
        dangerLevel: 130
    }

    interface Villian {
        name: string;
        // realName: string;
        dangerLevel: number;
    }

    /*
    Cuando le pasamos la interfaz Villian al genérico T, ya nuestra funcion sabe 
    que el tipo del argumento y el tipo del retorno de la funcion van usar la interfaz Villian
    */
    genericArrowFunction<Villian>(deadpool).dangerLevel


    //---------------------------------------------------------------------------------
    // EJEMPLO APLICANDO GENERICOS EN UN LLAMADO HTTP

    const getPokemons = async( pokemonId: number ): Promise<Pokemon> => {
        // interfaz para la respuesta del api
        const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        console.log(data)
        return data
    }

    /*
    
    ??Pasos para generar la interfaz de la respuesta del API::

    * Agregar extension "Paste JSON as code" VSCode
    * copiar la respuesta del API al clipboard
    * ctrl + shift + p y buscar "Paste JSON as code"
    * Ubicarse en el archivo donde queremos la interfaz
    * colocar el nombre de la interfaz principal
    
    */


})()