var cityGrowths = [
  {
    "Rank": 1,
    "City": "San Antonio ",
    "State": "Texas",
    "Increase_from_2016": "39208",
    "population": "1511946"
  },
  {
    "Rank": 2,
    "City": "Phoenix ",
    "State": "Arizona",
    "Increase_from_2016": "34036",
    "population": "1626078"
  },
  {
    "Rank": 3,
    "City": "Dallas",
    "State": "Texas",
    "Increase_from_2016": "23935",
    "population": "1341075"
  },
  {
    "Rank": 4,
    "City": "Fort Worth",
    "State": "Texas",
    "Increase_from_2016": "20664",
    "population": "874168"
  },
  {
    "Rank": 5,
    "City": "Los Angeles",
    "State": "California",
    "Increase_from_2016": "18643",
    "population": "3999759"
  },
  {
    "Rank": 6,
    "City": "Seattle",
    "State": "Washington",
    "Increase_from_2016": "17490",
    "population": "724745"
  },
  {
    "Rank": 7,
    "City": "Charlotte",
    "State": "North Carolina",
    "Increase_from_2016": "15551",
    "population": "859035"
  },
  {
    "Rank": 8,
    "City": "Columbus ",
    "State": "Ohio",
    "Increase_from_2016": "15429",
    "population": "879170"
  },
  {
    "Rank": 9,
    "City": "Frisco",
    "State": "Texas",
    "Increase_from_2016": "13470",
    "population": "177286"
  },
  {
    "Rank": 10,
    "City": "Atlanta",
    "State": "Georgia",
    "Increase_from_2016": "13323",
    "population": "486290"
  },
  {
    "Rank": 11,
    "City": "San Diego",
    "State": "California",
    "Increase_from_2016": "12834",
    "population": "1419516"
  },
  {
    "Rank": 12,
    "City": "Austin ",
    "State": "Texas",
    "Increase_from_2016": "12515",
    "population": "950715"
  },
  {
    "Rank": 13,
    "City": "Jacksonville",
    "State": "Florida",
    "Increase_from_2016": "11169",
    "population": "892062"
  },
  {
    "Rank": 14,
    "City": "Irvine",
    "State": "California",
    "Increase_from_2016": "11068",
    "population": "277453"
  },
  {
    "Rank": 15,
    "City": "Henderson",
    "State": "Nevada",
    "Increase_from_2016": "10534",
    "population": "302539"
  }
 ]

 // 12.2.2 Practicing JavaScript Methods

console.log(cityGrowths);

// Sort and Select the Cities

 var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
console.log(sortedCities);

var topFiveCities = sortedCities.slice(0,5);
console.log(topFiveCities);

// Create Arrays of City Names and Growth Figures

var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
console.log(topFiveCityNames);
console.log(topFiveCityGrowths);

var trace = {
  x: topFiveCityNames,
  y: topFiveCityGrowths,
  type: "bar"
};
var data = [trace];
var layout = {
  title: "Most Rapidly Growing Cities",
  xaxis: { title: "City" },
  yaxis: { title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot", data, layout);

// Skill Drill a bar chart of the seven largest cities by population.

