(() => {
    //A tuple is a typed array with a pre-defined length and types for each index.
    const hero: [string, number] = ['Dr Strange', 100]

    hero[0] = 'Iroman';
    hero[1] = 50;

    console.log(hero)

})()