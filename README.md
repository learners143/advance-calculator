# AdvancedCalculator

`AdvancedCalculator` is a comprehensive JavaScript library that provides advanced mathematical operations, including matrix arithmetic, scientific calculations, and more. This package is perfect for developers and researchers needing a powerful calculator with extended functionality.

## Installation

To install `AdvancedCalculator`, use npm:

```bash
npm install advance-calc
```

# Or 
- If you want to use it in vanilla js import like This
```
<script src="https://cdn.jsdelivr.net/npm/advance-calc@1.0.0/index.js"></script>
```

# Usage
Here’s a quick guide on how to use the AdvancedCalculator class and its various functions.

## You can pass multiple arguments to a function or even a single arguments

# importing
```
const AdvancedCalculator = require('advance-calc');
```
```
const calc = new AdvancedCalculator();
```

## Basic Arithmetic Operations

```
calc.add(a, b, c, d, ...);
calc.subtract(a, b, c, d, ...);
calc.multiply(a, b, c, ...);
calc.divide(a, b, c, ...);
```

# Scientific Calculations

- Calculate trigonometric functions with angles in degrees:
```
calc.sin(90, 180);
calc.cos(90, 180);
calc.tan(45, 60); 
calc.cot(45, 90); 
calc.sec(60, 90);
calc.cosec(30, 90); 
```
# Complex Number Operations
- Perform operations on complex numbers:

```
const c1 = { real: 1, imag: 2 };
const c2 = { real: 3, imag: 4 };
const c3 = { real: 5, imag: 6 };

calc.complexAdd(c1, c2, c3);
```
# Matrix Operations
- Perform matrix arithmetic:

### Matrix Multiplication

```
const m1 = [
    [1, 2, 3],
    [3, 4, 5],
    [2, 5, 6]
];

const m2 = [
    [5, 6, 7],
    [7, 8, 9],
    [2, 3, 5]
];
```

```
calc.matrixMultiply(m1, m2);
calc.matrixAdd(m1, m2);
calc.matrixSubtract(m1, m2);
```
## Matrix Transposition
```
const m = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
```

```
calc.matrixTranspose(m);
```
## Matrix Inversion (2x2 Matrix Only)
```
const m2x2 = [
    [4, 7],
    [2, 6]
];
```

```
calc.matrixInvert2x2(m2x2);
```
# Statistical and Financial Calculations

### Mean and Median
```
calc.mean([1, 2, 3], [4, 5]);
calc.median([1, 3, 5], [2, 4]);
```
### Compound Interest
```
calc.compoundInterest(1000, 0.05, 10, 12);
```

# API Documentation

## AdvancedCalculator
### Methods

- add(...numbers): Returns the sum of the given numbers.
- `subtract(...numbers)`: Subtracts subsequent numbers from the first number.
- `multiply(...numbers)`: Multiplies the given numbers.
- `divide(...numbe`rs): Divides the first number by subsequent numbers.
- `sin(...degrees)`: Calculates the sine of angles in degrees.
- `cos(...degrees)`: Calculates the cosine of angles in degrees.
- `tan(...degrees)`: Calculates the tangent of angles in degrees.
- `cot(...degrees)`: Calculates the cotangent of angles in degrees.
- `sec(...degrees)`: Calculates the secant of angles in degrees.
- `csc(...degrees)`: Calculates the cosecant of angles in degrees.
- `complexAdd(...complexNumbers)`: Adds multiple complex numbers.
- `matrixMultiply(m1, m2)`: Multiplies two matrices.
- `matrixAdd(m1, m2)`: Adds two matrices.
- `matrixSubtract(m1, m2)`: Subtracts one matrix from another.
- `matrixTranspose(matrix)`: Transposes a matrix.
- `matrixInvert2x2(matrix)`: Inverts a 2x2 matrix (simple inversion).
- `mean(...arrays)`: Calculates the mean of multiple arrays of numbers.
- `median(...arrays)`: Calculates the median of multiple arrays of numbers.
- `compoundInterest(principal, rate, time, frequency)`: Calculates compound interest.
