"use strict";
(() => {
    // Enums allow a developer to define a set of named constants.
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log({ currentAudio });
    //You can assign unique number values for each enum value. Then the values will not incremented automatically:
    let StatusCodes;
    (function (StatusCodes) {
        StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
        StatusCodes[StatusCodes["Success"] = 200] = "Success";
        StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
        StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    })(StatusCodes || (StatusCodes = {}));
    // logs 404
    console.log(StatusCodes.NotFound);
    // logs 200
    console.log(StatusCodes.Success);
})();
