/*
Una funcion genérica es una función que puede recibir cualquier tipo de parámetro
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