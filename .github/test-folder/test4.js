const londonLocations = {
  Angel: ["tube", "bus"],
  "London Bridge": ["tube", "river boat"],
  "Tower Bridge": ["tube", "bus"],
  Greenwich: ["bus", "river boat"],
};

function journeyPlanner(locations, transportMode) {
    let places = [];
    for (const key in locations) {
        if (locations[key].includes(transportMode)) {
            places.push([key])    
        }
    }
    return places.flat();
}


console.log(journeyPlanner(londonLocations, "tube"))