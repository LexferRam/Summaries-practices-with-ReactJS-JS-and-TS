(() => {

    type Hero = {
        name: string,
        age?: number,  //* ? indica que es opcional
        powers: string[],
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers : ['velocidad', 'Viajar en el tiempo'],
        getName(){
            return this.name
        }
    }



})()