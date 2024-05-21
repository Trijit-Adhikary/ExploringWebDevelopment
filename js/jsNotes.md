## Print in the console -

```javaScript
console.log("Hello world")

// Print the values of the variables in tabular format
console.table([accountId, accountEmail, accountPassword, accountCity])

console.table([typeof firstName, typeof midName, typeof lastName, typeof age, typeof married, typeof address])
```

<br>

## Declare Variable -
```javaScript
// accountId can't be changed
const accountId = 1234

// Aware of block scope and functional scope
let accountEmail = "trijit@gmail.com"

// Not aware of block scope and functional scope -> NOT RECOMENDED USE
var accountPassword = "1234567"

// NOT RECOMENDED USE
accountCity = "Naihati"

// Default value is undefined
let accountState
```

<br>

## Use new version of JS -
```javaScript
"use strict";
```

<br>

## Basic DataTypes -

```javaScript
// string
let firstName = "Trijit"

// object
let midName = null

// string
let lastName = "Adhikary"

// number
let age  = 23

// boolean
let married = false

// undefined
let address
```

<br>

## DataType Conversion operation -
### String to Number:

```javaScript
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN

console.log(Number(scroreInt))
```

### String/Number to Boolean:

```javaScript
// 1 => true; 0 => false
// "" => false
// "trijit" => true

console.log(Boolean(val))
```

<br>

## Operations -
### Prefix and Postfix -

```javaScript
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"
```