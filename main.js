"use strict";
(() => {
    class Mutant {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutant {
        salvarMundo() {
            return 'Mundo a salvo!';
        }
    }
    class Villian extends Mutant {
        conquistarMundo() {
            return 'Mundo conquistado';
        }
    }
    let wolverine = new Xmen("wolverine", "logan");
    let magneto = new Villian("Magneto", "Magnus");
    function printName(character) {
        console.log(character.name);
    }
    printName(magneto);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Captain');
    console.log(antman);
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log('constructor avenger!!');
        }
        getFullName() {
            return `${this.name}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutan) {
            super(name, realName);
            this.isMutan = isMutan;
            console.log('constructor xmen ejecutado');
        }
        get fullName() {
            return `${this.name}`;
        }
        set fullName(name) {
            this.name = name;
        }
        getFullNameDesdeXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
})();
//# sourceMappingURL=main.js.map