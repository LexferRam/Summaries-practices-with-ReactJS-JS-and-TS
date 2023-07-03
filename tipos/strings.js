"use strict";
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = "Linterna verde";
    // nota si no colocamos el tipo en una const y dejamos que TS infiera
    // perdemos el intellingence
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
