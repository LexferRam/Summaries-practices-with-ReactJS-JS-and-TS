"use strict";
(() => {
    const msg = 'Hola Mundo';
    console.log(msg);
    const objPerson = {
        name: 'Lexfer',
        age: 24
    };
    let b;
    function sayHello(msg) {
        console.log(msg);
    }
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || 'no lastName'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'no lastName'}`;
        }
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no lastName'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log(superman);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `hola ${name}`;
    const saveWorld = () => `El mundo está salvado`;
    let myFunction;
    myFunction = saveWorld;
    console.log(myFunction);
})();
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatiSignal = () => {
        return "Activar";
    };
    const heroName = returnName();
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    let myCustomVariable = 'Lexfer';
})();
(() => {
    let avenger = 123;
    const exits = false;
    avenger = 'Lexfer';
    console.log(avenger.charAt(0));
    avenger = 1234;
    console.log(avenger.toFixed(2));
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ['Omega Rojo', 'Dormamu', 'Duende verde'];
    villians.forEach(v => console.log(v.toLocaleUpperCase()));
})();
(() => {
    let isSuperman = true;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log({ currentAudio });
    let StatusCodes;
    (function (StatusCodes) {
        StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
        StatusCodes[StatusCodes["Success"] = 200] = "Success";
        StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
        StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    })(StatusCodes || (StatusCodes = {}));
    console.log(StatusCodes.NotFound);
    console.log(StatusCodes.Success);
})();
(() => {
    const abc = (message) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    };
    abc('Error');
})();
(() => {
})();
(() => {
    let avengers = 2;
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna verde";
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(() => {
    const hero = ['Dr Strange', 100];
    hero[0] = 'Iroman';
    hero[1] = 50;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
//# sourceMappingURL=main.js.map