"use strict";
(() => {
    // el ? en el parametro de la fn no dice que es opcional
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no lastName'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
