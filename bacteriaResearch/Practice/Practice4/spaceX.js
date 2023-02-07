const url = "https://api.spacexdata.com/v2/launchpads";

let allData

d3.json(url).then(receivedData => console.log(receivedData));

// console.log(data)

// d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults.map(results => results.location.latitude)));

d3.json(url).then(spaceXResults =>
    console.log(spaceXResults.map(results => results.location.longitude)));
// var latitudes = data.map(spaceXResults =>
//     console.log(spaceXResults.location.latitude));

