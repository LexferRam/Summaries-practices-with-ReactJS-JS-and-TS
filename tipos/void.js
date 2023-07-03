"use strict";
(() => {
    // void is used where there is no data. For example, if a function does not return any value
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const a = callBatman();
    console.log(a);
})();
