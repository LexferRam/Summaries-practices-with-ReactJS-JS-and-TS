(() => {

    // el parametro de tipo rest(...restParams) crea un array con los valores restantes de los parametros
    const fullName = (
        firstName: string, 
        ...restArgs: string[]
    ): string => {
        return `${firstName} ${restArgs.join(' ')}`
    }

    const superman = fullName('Clark', 'Joseph', 'Kent')
    console.log(superman)

})()