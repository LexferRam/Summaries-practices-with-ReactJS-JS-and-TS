(() => {


    type Avenger = {
        name: string,
        weapon: string
    }

    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'ArmorSuit'
    }

    const captainAmerica: Avenger = {
        name: 'Captain America',
        weapon: 'Shield'
    }
    
    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[]  = [ironman, captainAmerica,thor]

    for (const avenger of avengers) {
        console.log(avenger)
    }

})()