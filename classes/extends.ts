(() => {

    class Avenger{
        constructor(
            public name: string,
            public realName: string,            
        ){
            console.log('constructor avenger!!')
        }

          //private ==> solo se puede acceder dentro de la clase donde se definió

          //protected ==> solo se puede acceder dentro de la clase o clase que extienden
        protected getFullName(){
            return `${this.name}`
        }
    }

    class Xmen extends Avenger{
        constructor(
            name: string,
            realName: string, 
            public isMutan: boolean
        ){
            super(name, realName)
            console.log('constructor xmen ejecutado')
        }

        //fn que retorna algo se mandan a llamar y no se ejecutan ==> wolverine.fullName
        get fullName(){
            return `${this.name}`
        }

        //siempre espera un arg y no retorna,usa => wolverine.fullname = 'Lexfer'
        set fullName(name: string){
            this.name = name;
        }

        getFullNameDesdeXmen(){
            console.log(super.getFullName())
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true)


})()