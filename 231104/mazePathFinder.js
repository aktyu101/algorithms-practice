const board = `%e%%%%%%%%%\n
%...%.%...%\n
%.%.%.%.%%%\n
%.%.......%\n
%.%%%%.%%.%\n
%.%.....%.%\n
%%%%%%%%%x%`;

const rows = board.split("\n").filter((item) => item);

function generateColumnArr(arr) {
  return arr.split("");
}

const mazeMatrix = rows.map(generateColumnArr);

console.log("mazeMatrix", mazeMatrix);
console.log("rows", rows);

function findChar(char, mazeMatrix) {
  const row = mazeMatrix.length;
  const column = mazeMatrix[0].length;
  //좌표구하기
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (mazeMatrix[i][j] === char) {
        return [i, j];
      }
    }
  }
}
//
function printMatrix(matrix) {
  let mazePrintStr = "";
  const row = matrix.length;
  const column = matrix[0].length;
  //
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      mazePrintStr += mazeMatrix[i][j];
    }
    mazePrintStr += "\n";
  }
  // %+%%%%%%%%% [0,1]
  // %+..%.%...% []
  // %.%.%.%.%%%
  // %.%.......%
  // %.%%%%.%%.%
  // %.%.....%.%
  // %%%%%%%%%x%

  console.log(mazePrintStr);
}

function mazePathFinder(mazeMatrix) {
  const row = mazeMatrix.length;
  const column = mazeMatrix[0].length;
  const startPos = findChar("e", mazeMatrix);
  const endPos = findChar("x", mazeMatrix);

  console.log("strartPos", startPos);
  console.log("endPos", endPos);
  //. > 길

  path(startPos[0], startPos[1]);

  function path(x, y) {
    if (x > row - 1 || y > column - 1 || x < 0 || y < 0) {
      return false;
    }
    if (x === endPos[0] && y === endPos[1]) {
      return true;
    }
    if (mazeMatrix[x][y] === "%" || mazeMatrix[x][y] === "+") {
      return false;
    }

    mazeMatrix[x][y] = "+";
    printMatrix(mazeMatrix);

    if (path(x, y - 1) || path(x + 1, y) || path(x, y + 1) || path(x - 1, y)) {
      return true;
    }
    mazeMatrix[x][y] = ".";
    return false;
  }
}

mazePathFinder(mazeMatrix);
