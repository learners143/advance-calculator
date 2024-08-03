class AdvancedCalculator {
  constructor() {}

  // Convert degrees to radians
  toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  // Scientific functions with option to input angles in degrees
  sin(...angles) {
    return angles.map(angle => Math.sin(this.toRadians(angle)));
  }

  cos(...angles) {
    return angles.map(angle => Math.cos(this.toRadians(angle)));
  }

  tan(...angles) {
    return angles.map(angle => Math.tan(this.toRadians(angle)));
  }
  cot(...angles) {
    return angles.map(angle => {
      const tanValue = Math.tan(this.toRadians(angle));
      if (tanValue === 0) throw new Error('Cotangent undefined for this angle');
      return 1 / tanValue;
    });
  }

  sec(...angles) {
    return angles.map(angle => {
      const cosValue = Math.cos(this.toRadians(angle));
      if (cosValue === 0) throw new Error('Secant undefined for this angle');
      return 1 / cosValue;
    });
  }

  cosec(...angles) {
    return angles.map(angle => {
      const sinValue = Math.sin(this.toRadians(angle));
      if (sinValue === 0) throw new Error('Cosecant undefined for this angle');
      return 1 / sinValue;
    });
  }

  log(...values) {
    return values.map(value => Math.log(value));
  }

  exp(...values) {
    return values.map(value => Math.exp(value));
  }

  // Basic arithmetic operations with multiple arguments
  add(...args) {
    return args.reduce((a, b) => a + b,
      0);
  }

  subtract(...args) {
    return args.slice(1).reduce((a, b) => a - b,
      args[0]);
  }

  multiply(...args) {
    return args.reduce((a, b) => a * b,
      1);
  }

  divide(...args) {
    return args.slice(1).reduce((a, b) => {
      if (b === 0) throw new Error('Division by zero');
      return a / b;
    },
      args[0]);
  }

  // Complex number operations
  complexAdd(...complexNumbers) {
    return complexNumbers.reduce((acc, c) => ({
      real: acc.real + c.real,
      imag: acc.imag + c.imag
    }),
      {
        real: 0,
        imag: 0
      });
  }

  matrixMultiply(m1,
    m2) {
    const rowsM1 = m1.length;
    const colsM1 = m1[0].length;
    const rowsM2 = m2.length;
    const colsM2 = m2[0].length;

    if (colsM1 !== rowsM2) {
      throw new Error('Number of columns in m1 must be equal to number of rows in m2');
    }

    const result = Array.from({
      length: rowsM1
    }, () => Array(colsM2).fill(0));

    for (let i = 0; i < rowsM1; i++) {
      for (let j = 0; j < colsM2; j++) {
        for (let k = 0; k < colsM1; k++) {
          result[i][j] += m1[i][k] * m2[k][j];
        }
      }
    }

    return result;
  }

  // Matrix addition
  matrixAdd(m1, m2) {
    const rowsM1 = m1.length;
    const colsM1 = m1[0].length;
    const rowsM2 = m2.length;
    const colsM2 = m2[0].length;

    if (rowsM1 !== rowsM2 || colsM1 !== colsM2) {
      throw new Error('Matrices must have the same dimensions for addition');
    }

    return m1.map((row, i) =>
      row.map((value, j) => value + m2[i][j])
    );
  }

  // Matrix subtraction
  matrixSubtract(m1, m2) {
    const rowsM1 = m1.length;
    const colsM1 = m1[0].length;
    const rowsM2 = m2.length;
    const colsM2 = m2[0].length;

    if (rowsM1 !== rowsM2 || colsM1 !== colsM2) {
      throw new Error('Matrices must have the same dimensions for subtraction');
    }

    return m1.map((row, i) =>
      row.map((value, j) => value - m2[i][j])
    );
  }

  // Matrix transpose
  matrixTranspose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    return Array.from({
      length: cols
    }, (_, j) =>
      Array.from({
        length: rows
      }, (_, i) => matrix[i][j])
    );
  }

  // Matrix inversion (for 2x2 matrix only for simplicity)
  matrixInvert2x2(matrix) {
    if (matrix.length !== 2 || matrix[0].length !== 2) {
      throw new Error('Inversion only supported for 2x2 matrices');
    }

    const [[a,b],[c,d]] = matrix;
    const determinant = a * d - b * c;

    if (determinant === 0) {
      throw new Error('Matrix is not invertible (determinant is zero)');
    }

    return [
      [d / determinant,
        -b / determinant],
      [-c / determinant,
        a / determinant]
    ];
  }

  // Statistical functions
  mean(...arrays) {
    const allValues = arrays.flat();
    return allValues.reduce((a, b) => a + b) / allValues.length;
  }

  median(...arrays) {
    const allValues = arrays.flat().slice().sort((a, b) => a - b);
    const mid = Math.floor(allValues.length / 2);
    return allValues.length % 2 === 0 ? (allValues[mid - 1] + allValues[mid]) / 2: allValues[mid];
  }
  // Financial calculations
  compoundInterest(principal, rate, time, n) {
    return principal * Math.pow((1 + rate / n), (n * time));
  }
}

module.exports = AdvancedCalculator;