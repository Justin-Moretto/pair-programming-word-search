//Justin Moretto && David Linardi

const transpose = function (matrix) {
  let output = [];

  for (let i = 0; i < matrix[0].length; i++) {
    output.push([]);
    for (const array of matrix) {
      output[i].push(array[i]);
    }
  }
  return output;
};

// stretch attempt
const transposeDiag = function (matrix) {
  let flippedMatrix = transpose(matrix);
  let output = []; //output will be an array of all diagnoal rows

  for (let i = 0; i < (matrix.length); i++) {
    //push diagonal row to the output
    output.push([]);
    for (let j = 0; j < (matrix.length - i); j++) {
      output[i].push(matrix[j][j + i]);
    }
  }

  //the above code only covers half of the diagnals in the original matrix, now we loop over the transposed version to push the rest
  for (let i = 0; i < (matrix.length - 1); i++) {
    output.push([]);
    for (let j = 0; j < (matrix.length - i - 1); j++) {
      output[matrix.length + i].push(flippedMatrix[j][j + i + 1]);
    }
  }
  //console.log(output);
  return output;
};

const wordSearch = (letters, word) => {
  if (letters === undefined || letters.length <= 0) {
    return false;
  } else {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    const diagonalJoin = transposeDiag(letters).map(ls => ls.join(''));

    //check for word horizontally
    for (l of horizontalJoin) {
      if (l.includes(word)) return true;
    }

    //check for word vertically
    for (l of verticalJoin) {
      if (l.includes(word)) return true;
    }

    //stretch: check for word diagonally
    for (l of diagonalJoin) {
      if (l.includes(word)) return true;
    }

  }

  return false;
};


module.exports = wordSearch;