const lang = ["cpp", "py", "m", "go", "kt"]

const values = lang.forEach((val) => {
    // console.log(val);
})

// console.log(values); // -> undefined

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const n = numbers.filter((num) => {
//   return num <= 5
// })

const n = numbers.filter((num) => num <= 5)

console.log(n)

// const n = []
// numbers.forEach((num) => {
//     if (num <= 5) {
//         n.push(num)
//     }
// })
// console.log(n);

const cosmos = [
  {
    name: "Black Hole",
    type: "Singularity",
    massInSolarMasses: 1000000,                // Approximate mass in solar masses
    distanceFromEarthInLightYears: 5000000000, // Distance from Earth in light years
    visible: false,                            // Black holes are invisible directly
    containsLife: false,                       // Black holes cannot support life
    interestingFact: "Nothing can escape its gravitational pull, not even light."
  },
  {
    name: "Nebula",
    type: "Interstellar Cloud",
    massInSolarMasses: 10,                     // Approximate mass in solar masses
    distanceFromEarthInLightYears: 1300,       // Distance from Earth in light years
    visible: true,                             // Nebulae are visible
    containsLife: false,                       // Nebulae don't support life
    interestingFact: "Nebulae are often the birthplace of stars."
  },
  {
    name: "Pulsar",
    type: "Neutron Star",
    massInSolarMasses: 1.4,                    // Approximate mass in solar masses
    distanceFromEarthInLightYears: 3000,       // Distance from Earth in light years
    visible: true,                             // Pulsars are visible through telescopes
    containsLife: false,                       // Pulsars do not support life
    interestingFact: "Pulsars emit beams of electromagnetic radiation from their poles."
  },
  {
    name: "Quasar",
    type: "Active Galactic Nucleus",
    massInSolarMasses: 1000000000,             // Approximate mass of central black hole in solar masses
    distanceFromEarthInLightYears: 9000000000, // Distance from Earth in light years
    visible: true,                             // Quasars are visible
    containsLife: false,                       // Quasars do not support life
    interestingFact: "Quasars are the most luminous objects in the universe."
  },
  {
    name: "Exoplanet",
    type: "Planet outside the Solar System",
    massInSolarMasses: 0.0003,                 // Mass in solar masses
    distanceFromEarthInLightYears: 10,         // Distance from Earth in light years
    visible: true,                             // Exoplanets can sometimes be detected
    containsLife: true,                        // Some exoplanets may support life
    interestingFact: "Many exoplanets are found in habitable zones, where conditions might support life."
  },
  {
    name: "White Dwarf",
    type: "Stellar Remnant",
    massInSolarMasses: 1.2,                    // Mass in solar masses
    distanceFromEarthInLightYears: 20,         // Distance from Earth in light years
    visible: true,                             // White dwarfs can be observed
    containsLife: false,                       // White dwarfs do not support life
    interestingFact: "A white dwarf is the core of a star left after it has shed its outer layers."
  },
  {
    name: "Supernova",
    type: "Exploding Star",
    massInSolarMasses: 1.5,                    // Mass of star before explosion in solar masses
    distanceFromEarthInLightYears: 1000,       // Distance from Earth in light years
    visible: true,                             // Supernovae can be seen from Earth
    containsLife: false,                       // Supernovae do not support life
    interestingFact: "Supernovae are critical for spreading heavy elements across the universe."
  },
  {
    name: "Galaxy Cluster",
    type: "Cluster of Galaxies",
    massInSolarMasses: 1000000000000,          // Approximate total mass in solar masses
    distanceFromEarthInLightYears: 2000000000, // Distance from Earth in light years
    visible: true,                             // Galaxy clusters are visible
    containsLife: true,                        // Galaxy clusters contain habitable planets
    interestingFact: "Galaxy clusters are the largest known gravitationally bound structures in the universe."
  }
];

let smth = cosmos.filter((smth)=>{return smth.distanceFromEarthInLightYears <= 1000})
console.log(smth);

smth = cosmos.filter((smth) => smth.containsLife && smth.visible)
// console.log(smth);