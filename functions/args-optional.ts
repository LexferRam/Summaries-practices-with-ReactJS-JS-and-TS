(() => {

    // el ? en el parametro de la fn no dice que es opcional

    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || 'no lastName'}`
    }

    const name = fullName('Tony')

    console.log({ name })

})()