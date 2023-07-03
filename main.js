"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Jackson",
        iroman: "Robert",
        vision: "Paul",
        activo: true,
        poder: 1500
    };
    const printAvengers = (_a) => {
        var { iroman } = _a, rest = __rest(_a, ["iroman"]);
        console.log(iroman, rest);
    };
    printAvengers(avengers);
    const avengersArr = ['Cap. America', true, 150];
    const [capitan, ironman, seriaUnNumero] = avengersArr;
    console.log({
        ironman,
        capitan
    });
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'ArmorSuit'
    };
    const captainAmerica = {
        name: 'Captain America',
        weapon: 'Shield'
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    const avengers = [ironman, captainAmerica, thor];
    for (const avenger of avengers) {
        console.log(avenger);
    }
})();
(() => {
    let nombre;
    const myFn = () => {
        console.log('my old');
    };
})();
//# sourceMappingURL=main.js.map