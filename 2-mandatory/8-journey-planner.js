/*
  This exercise was also in JS1 week 4, but you didn't know about objects yet.
  It's more clear with objects than with arrays!
  Feel free to look at your solution to that one to help you out - you already did this once!
  -----------------------------------------------------------------------
  Write a function journeyPlanner that:
  - Accepts two parameters:
    1) An object where the keys are locations and the values are arrays of the transportation modes you can use to get there.
       e.g.
       {
           Angel: ["tube", "bus"],
           "London Bridge": ["tube", "river boat"],
       }
    2) A string containing a transport mode
       e.g. "bus"
  - Returns an array of where I can go if I only want to use a specific mode of transport.
  NOTE: Only the location names should be returned, as strings.
  When you finish the exercise, think about how this solution is different to your last solution.
  What's better about each approach?

  Answer: The object approach was far more simpler because there was no need for 
  "problem decomposition" functions. This is because it is far easier to access the values of an object directly;
  as oppose to having a list whereby there is a need for functions to separate the 'head' from the 'tail' of the list;
  and other functions and array methods to process both 'head' and 'tail' independently

  The object approach in my opinion seems simpler and cleaner.
*/

function journeyPlanner(locations, transportMode) {

  // console.log(1,locations)
  // console.log(2,locations.filter(aLocation => locations[aLocation].includes(transportMode)))
  // return locations.filter(aLocation => locations[aLocation].includes(transportMode))
  //                 .map(aLocation => aLocation);
                                       
  // londonLocations.filter(element => element.) isAccessibleByTransportMode(getTransportModes(aLocation),transportMode))
  //                 .map( accessibleLocation => getLocationName(accessibleLocation))     
  
  let results = [];
  for (let aLondonLocation in locations) 
       if (locations[aLondonLocation].includes(transportMode))
              results.push(aLondonLocation);
  return results;
}

/* ======= TESTS - DO NOT MODIFY ===== 
- To run the tests for this exercise, run `npm test -- --testPathPattern 8-journey-planner.js`
- To run all exercises/tests in the mandatory folder, run `npm test`
- (Reminder: You must have run `npm install` one time before this will work!)
*/
const londonLocations = {
  Angel: ["tube", "bus"],
  "London Bridge": ["tube", "river boat"],
  "Tower Bridge": ["tube", "bus"],
  Greenwich: ["bus", "river boat"],
};

test("journeyPlanner function works - case 1", () => {
  expect(journeyPlanner(londonLocations, "river boat")).toEqual([
    "London Bridge",
    "Greenwich",
  ]);
});

test("journeyPlanner function works - case 2", () => {
  expect(journeyPlanner(londonLocations, "bus")).toEqual([
    "Angel",
    "Tower Bridge",
    "Greenwich",
  ]);
});

test("journeyPlanner function works - case 3", () => {
  expect(journeyPlanner(londonLocations, "tube")).toEqual([
    "Angel",
    "London Bridge",
    "Tower Bridge",
  ]);
});
