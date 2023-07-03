(() => {

    // void is used where there is no data. For example, if a function does not return any value

    function callBatman(): void{
        return;
    }

    const callSuperman = (): void => {
        return;
    }

    const a = callBatman()

    console.log(a)

})()