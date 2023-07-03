(() => {

    type Avengers = {
        nick: string;
        iroman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: "Jackson",
        iroman: "Robert",
        vision: "Paul",
        activo: true,
        poder: 1500
    }

    // destructuring permite extraer propiedades de un objeto
    // const { poder, vision } = avengers

    const printAvengers = ( { iroman, ...rest }: Avengers ) => {
        console.log(iroman, rest)
    }

    printAvengers(avengers)

    // Array destructuring

    const avengersArr: [string, boolean,number] = ['Cap. America', true, 150];

    const [capitan, ironman, seriaUnNumero ] = avengersArr;
    console.log({
        ironman,
        capitan
    })

})()