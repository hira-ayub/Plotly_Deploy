// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
// };


// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };
// Plotly.newPlot("plotArea", trace, layout);


// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);



// var trace = {
//     x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
//     y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "bar"
//    };
//    var data = [trace];
//    var layout = {
//     title: "'Bar' Chart",
//     xaxis: { title: "Drinks"},
//     yaxis: { title: "% of Drinks Ordered"}
//    };
//    Plotly.newPlot("plotArea", data, layout);

  var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);

   // 12.2.1 Functional JavaScript
   // The map() method
   // The map()method in JavaScript applies 
   // a transformation to each element in an array. 


   var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);

// Skil Drill

var populations = cities.map(function(population){
    return population.population;
});
console.log(populations);

// The filter() Method
//Like the map() method, it accepts another function as its parameter.

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

var familyAge = [2,3,39,37,9];
 
var olderThanFive = familyAge.filter(function(age){
    return age > 5;
});

console.log(olderThanFive);

// Skill Drill

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var returnWords = words.filter(function(Character){
         if (Character !== "s") 
          return Character;
    
 });

 console.log(returnWords);

 var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement - anotherElement);
console.log(sortedAge);

// Decending order
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);


// The slice() Method
// In this example, the slice()method returns the first two elements of the integer array: [0,1].

var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
console.log(slice1);

// Skill Drill Use slice() to select the first three elements of the words array.

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice2 = words.slice(0, 3);
console.log(slice2)

// To slice to the end of an array,

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice3 = words.slice(3, );
console.log(slice3)

// 12.2.2 Practicing JavaScript Methods

console.log(cityGrowths);

// Sort and Select the Cities

var sortedCities = cityGrowths.sort((a,b) =>
a.Increase_from_2016 - b.Increase_from_2016).reverse(); 
console.log(sortedCities);