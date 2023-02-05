console.log(cityGrowths);

var sortedCities = cityGrowths.sort((b,a) => a.Increase_from_2016 - b.Increase_from_2016);

var topSevenCities = sortedCities.slice(0,7);

var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));

console.log(topSevenCityGrowths)
console.log(topSevenCityNames)

var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);