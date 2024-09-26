// Set the constant value of Kelvin
const kelvin = 293;
// This line initializes a constant variable 'kelvin' with a value of 293, which represents today's temperature forecast in Kelvin.

// Convert Kelvin to Celsius by subtracting 273
let celsius = kelvin - 273;
// The 'celsius' variable calculates the temperature in Celsius by subtracting 273 from the Kelvin value.

// Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;
// The 'fahrenheit' variable calculates the temperature in Fahrenheit using the given formula.

// Round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
// The Math.floor() method rounds down the Fahrenheit temperature to the nearest whole number.

// Log the temperature in Fahrenheit to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// 0 Kelvin conversion
const zeroKelvin = 0;
let zeroCelsius = zeroKelvin - 273;
let zeroFahrenheit = zeroCelsius * (9/5) + 32;
zeroFahrenheit = Math.floor(zeroFahrenheit);
console.log(`0 Kelvin is equal to ${zeroFahrenheit} degrees Fahrenheit.`);

// Extra practice: Convert Celsius to Newton
let newton = celsius * (33/100);
// The 'newton' variable calculates the temperature in Newton using the given formula.

// Round down the Newton temperature
newton = Math.floor(newton);
// The Math.floor() method rounds down the Newton temperature to the nearest whole number.

// Log the temperature in Newton to the console
console.log(`The temperature is ${newton} degrees Newton.`);
