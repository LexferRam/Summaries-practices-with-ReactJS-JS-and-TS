"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `hola ${name}`;
    const saveWorld = () => `El mundo está salvado`;
    //* let myFunction: Function;
    //? let myFunction: (y: number, x: number) => number;
    //! let myFunction: (y: string) => string;
    let myFunction;
    //! myFunction = 10;
    // myFunction = addNumbers
    // myFunction = greet
    myFunction = saveWorld;
    console.log(myFunction);
})();
