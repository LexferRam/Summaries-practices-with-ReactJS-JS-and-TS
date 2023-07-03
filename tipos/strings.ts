(() => {

    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna verde";

    // nota si no colocamos el tipo en una const y dejamos que TS infiera
    // perdemos el intellingence

    console.log(batman[10]?.toUpperCase() || 'No está presente')

})()