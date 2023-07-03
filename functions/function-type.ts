(() => {

    const addNumbers = (a: number, b: number) =>  a + b;
    const greet = (name: string) =>  `hola ${name}`;
    const saveWorld = () =>  `El mundo está salvado`;


    //* let myFunction: Function;
    //? let myFunction: (y: number, x: number) => number;
    //! let myFunction: (y: string) => string;
    let myFunction: () => string;

    //! myFunction = 10;

    // myFunction = addNumbers
    // myFunction = greet
    myFunction = saveWorld
    
    console.log(myFunction)

})()