(() => {

    class Avenger {

        //private => solo tenemos acceso dentro de la clase
        // private name: string;
        // private team: string;
        // public realName?: string;
        // las props statics sin crear una instancia de la clase Avenger.avgAge
        static avgAge: number = 35;
        static getAvgAge() {
            return this.name
        }

        constructor(
            private name: string, 
            private team: string, 
            public realName?: string
        ){
            // this.name = name;
            // this.team = team;
            // this.realName = realName;
        }

        public bio(){
            return `${this.name} (${this.team})`
        }
    }

    const antman: Avenger = new Avenger('Antman', 'Captain')
    console.log(antman)


})()