"use strict";
(() => {
    // el ? en el parametro de la fn no dice que es opcional
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
