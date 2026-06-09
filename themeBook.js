/*const themeBook = [
    generic = [
        midnightBlue = {
            name: 'midnight-blue', 
            title: 'Midnight Blue (Default)', 
            style: 'dark',
        },
        dark = {
            name: 'dark', 
            title: 'Dark', 
            style: 'dark',
        }, 
        PAHub = {
            name: 'pahub', 
            title: 'PAHub', 
            style: 'light',
        }, 
        scantron = {
            name: 'scantron', 
            title: 'Scantron', 
            style: 'light',
        }, 
    ],

    hollowKnight = [
        abyss = {
            name: 'abyss', 
            title: 'Abyss', 
            style: 'dark',
        }, 
        brokenVessel = {
            name: 'broken-vessel', 
            title: 'Broken Vessel', 
            style: 'dark',
        }, 
        crystalPeaks = {
            name: 'crystal-peaks', 
            title: 'Crystal Peaks', 
            style: 'dark',
        }, 
        fogCanyon = {
            name: 'fog-canyon', 
            title: 'Fog Canyon', 
            style: 'dark',
        }, 
        fungalWastes = {
            name: 'fungal-wastes', 
            title: 'Fungal Wastes', 
            style: 'dark',
        }, 
        greenpathI = {
            name: 'greenpath-I', 
            title: 'Greenpath I', 
            style: 'dark',
        }, 
        greenpathII = {
            name: 'greenpath-II', 
            title: 'Greenpath II', 
            style: 'dark',
        }, 
        ismasGrove = {
            name: 'ismas-grove', 
            title: "Isma's Grove", 
            style: 'dark',
        }, 
        joniBlessing = {
            name: 'joni-blessing', 
            title: "Joni's Blessing", 
            style: 'dark',
        }, 
        queensGardens = {
            name: 'queens-gardens', 
            title: "Queen's Gardens", 
            style: 'dark',
        }, 
        royalWaterways = {
            name: 'royal-waterways', 
            title: 'Royal Waterways', 
            style: 'dark',
        }, 
        soulMaster = {
            name: 'soul-master', 
            title: 'Soul Master', 
            style: 'dark',
        }, 
        soulSanctum = {
            name: 'soul-sanctum', 
            title: 'Soul Sanctum', 
            style: 'dark',
        }, 
        theGrimmTroupe = {
            name: 'the-grimm-troupe', 
            title: 'The Grimm Troupe', 
            style: 'dark',
        }, 
        theHive = {
            name: 'the-hive', 
            title: 'The Hive', 
            style: 'light',
        }, 
        theRadiance = {
            name: 'the-radiance', 
            title: 'The Radiance', 
            style: 'light',
        }, 
        whitePalace = {
            name: 'white-palace', 
            title: 'White Palace', 
            style: 'dark',
        }, 
    ],

    harryPotter = [
        gryffindor = {
            name: 'gryffindor', 
            title: 'Gryffindor', 
            style: 'dark',
        }, 

        hufflepuff = {
            name: 'hufflepuff', 
            title: 'Hufflepuff', 
            style: 'light',
        }, 
        
        ravenclaw = {
            name: 'ravenclaw', 
            title: 'Ravenclaw', 
            style: 'dark',
        }, 

        slytherin = {
            name: 'slytherin', 
            title: 'Slytherin', 
            style: 'dark',
        }, 

        knightBus = {
            name: 'knight-bus', 
            title: 'Knight Bus', 
            style: 'dark',
        }, 
    ],

    silksong = [
        coralTower = {
            name: 'coral-tower', 
            title: 'Coral Tower', 
            style: 'light',
        }, 
        
        deepDocks = {
            name: 'deep-docks', 
            title: 'Deep Docks', 
            style: 'dark',
        }, 

        needleMaster = {
            name: 'needle-master', 
            title: 'Needle Master', 
            style: 'light',
        }, 
    ]
]*/

const themeBook = {
    midnightBlue: {
        name: 'midnight-blue', 
        title: 'Midnight Blue (Default)', 
        style: 'dark',
        group: 'Generic',
        optGroup: 'generic'
    },
    dark: {
        name: 'dark', 
        title: 'Dark', 
        style: 'dark',
        group: 'Generic',
        optGroup: 'generic'
    }, 
    PAHub = {
        name: 'pahub', 
        title: 'PAHub', 
        style: 'light',
        group: 'Generic',
        optGroup: 'generic'
    }, 
    scantron = {
        name: 'scantron', 
        title: 'Scantron', 
        style: 'light',
        group: 'Generic',
        optGroup: 'generic'
    }, 


    abyss: {
        name: 'abyss', 
        title: 'Abyss', 
        style: 'dark',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    brokenVessel: {
        name: 'broken-vessel', 
        title: 'Broken Vessel', 
        style: 'dark',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    crystalPeaks: {
        name: 'crystal-peaks', 
        title: 'Crystal Peaks', 
        style: 'dark',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    fogCanyon: {
        name: 'fog-canyon', 
        title: 'Fog Canyon', 
        style: 'dark',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    fungalWastes: {
        name: 'fungal-wastes', 
        title: 'Fungal Wastes', 
        style: 'dark',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    greenpathI: {
        name: 'greenpath-I', 
        title: 'Greenpath I', 
        style: 'dark',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    greenpathII: {
        name: 'greenpath-II', 
        title: 'Greenpath II', 
        style: 'dark',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    ismasGrove: {
        name: 'ismas-grove', 
        title: "Isma's Grove", 
        style: 'dark',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    joniBlessing: {
        name: 'joni-blessing', 
        title: "Joni's Blessing", 
        style: 'dark',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    queensGardens: {
        name: 'queens-gardens', 
        title: "Queen's Gardens", 
        style: 'dark',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    royalWaterways: {
        name: 'royal-waterways', 
        title: 'Royal Waterways', 
        style: 'dark',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    soulMaster: {
        name: 'soul-master', 
        title: 'Soul Master', 
        style: 'dark',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    soulSanctum: {
        name: 'soul-sanctum', 
        title: 'Soul Sanctum', 
        style: 'dark',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    theGrimmTroupe: {
        name: 'the-grimm-troupe', 
        title: 'The Grimm Troupe', 
        style: 'dark',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    theHive: {
        name: 'the-hive', 
        title: 'The Hive', 
        style: 'light',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    theRadiance: {
        name: 'the-radiance', 
        title: 'The Radiance', 
        style: 'light',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 
    whitePalace: {
        name: 'white-palace', 
        title: 'White Palace', 
        style: 'dark',
        group: 'Hollow Knight',
        optGroup: 'hollowKnight'
    }, 



    gryffindor: {
        name: 'gryffindor', 
        title: 'Gryffindor', 
        style: 'dark',
        group: 'Harry Potter',
        optGroup: 'harryPotter'
    }, 

    hufflepuff: {
        name: 'hufflepuff', 
        title: 'Hufflepuff', 
        style: 'light',
        group: 'Harry Potter',
        optGroup: 'harryPotter'
    }, 
    
    ravenclaw: {
        name: 'ravenclaw', 
        title: 'Ravenclaw', 
        style: 'dark',
        group: 'Harry Potter',
        optGroup: 'harryPotter'
    }, 

    slytherin: {
        name: 'slytherin', 
        title: 'Slytherin', 
        style: 'dark',
        group: 'Harry Potter',
        optGroup: 'harryPotter'
    }, 

    knightBus: {
        name: 'knight-bus', 
        title: 'Knight Bus', 
        style: 'dark',
        group: 'Harry Potter',
        optGroup: 'harryPotter'
    }, 



    coralTower: {
        name: 'coral-tower', 
        title: 'Coral Tower', 
        style: 'light',
        group: 'Silksong',
        optGroup: 'silksong'
    }, 
    
    deepDocks: {
        name: 'deep-docks', 
        title: 'Deep Docks', 
        style: 'dark',
        group: 'Silksong',
        optGroup: 'silksong'
    }, 

    needleMaste: {
        name: 'needle-master', 
        title: 'Needle Master', 
        style: 'light',
        group: 'Silksong',
        optGroup: 'silksong'
    }, 
}

/*
const groups = [
    "Generic",
    "Hollow Knight",
    "Harry Potter",
    "Silksong",
];
*/