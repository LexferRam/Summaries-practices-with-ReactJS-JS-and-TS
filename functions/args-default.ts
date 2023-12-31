(() => {

    // el ? en el parametro de la fn no dice que es opcional
    // si el parametro tiene un valor por defecto no es necesario indicarle que es opcional con el ?
    const fullName = (
        firstName: string, 
        lastName?: string, 
        upper: boolean = false
    ): string => {

        if(upper){
            return `${firstName} ${lastName || 'no lastName'}`.toUpperCase()
        }else{
            return `${firstName} ${lastName || 'no lastName'}`
        }
    }

    const name = fullName('Tony', 'Stark')

    console.log({ name })

})()