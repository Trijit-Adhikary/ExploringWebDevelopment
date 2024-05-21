let scroreInt = undefined
let scroreStr = "33"
let scroreNaNStr = "33abc"

let converted = Number(scroreInt)

// console.log(typeof converted)
// console.log(Number(scroreInt))


// String to Number:
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN

// String/Number to Boolean:
// 1 => true; 0 => false
// "" => false
// "trijit" => true

let val = "tri"

// console.log(Boolean(val))


// console.log("1" + 2)
// console.log("1" + 2 + 2)

// console.log(1 + 2 + "2")


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"