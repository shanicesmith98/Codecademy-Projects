// current forecast in kelvin
var kelvin = prompt("What is the temperature today in Kelvin?");
// celsius formula conversion (value can't be changed)
let celsius = kelvin - 273;
// newton scale formula
var newton = celsius * (33/100);
// round down value of newton
newton = Math.floor(newton);
// fahrenheit formula conversion
var fahrenheit = celsius * (9/5) + 32;
// round down value of fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log("The temperature is " + fahrenheit + " degrees Fahrenheit");
console.log("The temperature is " + newton + " degrees Newton");