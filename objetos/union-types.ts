(() => {


    type Hero = {
        name: string,
        age?: number,  //* ? indica que es opcional
        powers: string[],
        getName?: () => string
    }

    let myCustomVariable: (string | number | Hero) = 'Lexfer'


})()