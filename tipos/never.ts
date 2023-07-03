(() => {

    // never quiere decir que el retorno no tiene un punto alcanzable

    // The never type is used when you are sure that something is never going to occur. For example, you write a function which will not return to its end point or always throws an exception.
    const abc = (message: string): (never | number) => {

        if(false){
            throw new Error(message)
        }
        return 1;
    }

    abc('Error')

})()