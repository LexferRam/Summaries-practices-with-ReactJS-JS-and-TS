(() => {

    // Enums allow a developer to define a set of named constants.

    enum AudioLevel {
        min,
        medium,
        max
    }

    let currentAudio = AudioLevel.medium

    console.log({ currentAudio })

    //You can assign unique number values for each enum value. Then the values will not incremented automatically:

    enum StatusCodes {
        NotFound = 404,
        Success = 200,
        Accepted = 202,
        BadRequest = 400
      }
      // logs 404
      console.log(StatusCodes.NotFound);
      // logs 200
      console.log(StatusCodes.Success);

})()