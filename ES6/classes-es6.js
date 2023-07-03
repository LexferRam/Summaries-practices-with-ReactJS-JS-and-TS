(() => {


    class Avenger {

        // permite inicializar el objeto y se ejecuta cuando se instancia la clase
        constructor(name='No name', power=0){
            this.name = name;
            this.power = power
        }

    }

    class FlyingAvenger extends Avenger{

        constructor(name, power){
            // permite ejecutar el constructor del padre
            super(name, power)
            this.flying = true
        }
    }

    const hulk = new Avenger('Hulk', 900)
    const falcon = new FlyingAvenger('Falson', 80)

})()