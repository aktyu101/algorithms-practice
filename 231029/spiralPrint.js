const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

function spiralPrint(matrix) {
  let topRow = 0;
  let leftCol = 0;
  let btmRow = matrix.length - 1;
  let rigthCol = matrix[0].length - 1;

  while (topRow < btmRow && leftCol < rigthCol) {
    for (let col = 0; col <= rigthCol; col++) {
      console.log(matrix[topRow][col]);
    }
    topRow++;

    for (let row = topRow; row <= btmRow; row++) {
      console.log(matrix[row][rigthCol]);
    }
    rigthCol--;

    if (topRow <= btmRow) {
      for (let col = rigthCol; col >= leftCol; col--) {
        console.log(matrix[btmRow][col]);
      }
      //조건 col > leftCol
      btmRow--;
    }
    if (leftCol <= rigthCol) {
      for (let row = btmRow; row > topRow; row--) {
        console.log(matrix[row][leftCol]);
      }
      leftCol++;
    }
  }
}

spiralPrint(matrix);
