(() => {

    // las clases abstractas no sirven para crear instancias sino para crear clases que sean extendidas de ella
    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string
        ){}
    }

    class Xmen extends Mutant{
        salvarMundo(){
            return 'Mundo a salvo!'
        }
    }
    class Villian extends Mutant{
        conquistarMundo(){
            return'Mundo conquistado'
        }
    }

    let wolverine = new Xmen("wolverine", "logan")
    let magneto = new Villian("Magneto", "Magnus")

    //printName esta esperando un personaje que haya sido extendido de la clase Mutant
    function printName(character: Mutant){
        console.log(character.name)
    }
    printName(magneto)



})()