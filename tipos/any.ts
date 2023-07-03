(() => {

    // any elimina la validacion de tipos dedatos y de intellense
    let avenger: any = 123;
    const exits = false;


    // Casting is the process of overriding a type.
    // Casting with as
    avenger = 'Lexfer';
    console.log((avenger as string).charAt(0))

    // Casting with <>
    avenger = 1234;
    console.log(<number>avenger.toFixed(2))

})()