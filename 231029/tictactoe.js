// const board = [
//   ["o", "-", "x"],
//   ["-", "o", "-"],
//   ["-", "x", "o"],
// ];

// function checkrow(rowArr, letter) {
//   for (let i = 0; i < rowArr.length; i++) {
//     if (rowArr[i] != letter) {
//       return false;
//     }
//   }
//   return true;
// }

// function checkCol(gameBoardMatrix, columnIndex, letter) {
//   for (let i = 0; i < gameBoardMatrix.length; i++) {
//     if (gameBoardMatrix[i][columnIndex] != letter) {
//       return false;
//     }
//   }
//   return true;
// }

// function ticTacToeWinner(gameBoardMatrix, letter) {
//   //행 확인
//   const rowWin =
//     checkrow(gameBoardMatrix[0], letter) ||
//     checkrow(gameBoardMatrix[1], letter) ||
//     checkrow(gameBoardMatrix[2], letter);
//   //열 확인
//   const colWin =
//     checkCol(gameBoardMatrix, 0, letter) ||
//     checkCol(gameBoardMatrix, 1, letter) ||
//     checkCol(gameBoardMatrix, 2, letter);
//   //왼쪽대각선
//   const diagonaWinLeftToRight =
//     gameBoardMatrix[0][0] == letter &&
//     gameBoardMatrix[1][1] == letter &&
//     gameBoardMatrix[2][2] == letter;
//   //오른쪽대각선
//   const diagonaWinRightToLeft =
//     gameBoardMatrix[0][2] == letter &&
//     gameBoardMatrix[1][1] == letter &&
//     gameBoardMatrix[2][0] == letter;

//   return rowWin || colWin || diagonaWinLeftToRight || diagonaWinRightToLeft;
// }
// console.log("tictactoewinner 0", ticTacToeWinner(board, "o"));
// console.log("tictactoewinner x", ticTacToeWinner(board, "x"));
const board = [
  ["x", "x", "x", "x", "x"],
  ["x", "-", "x", "-", "o"],
  ["x", "-", "x", "-", "o"],
  ["x", "-", "x", "-", "o"],
  ["x", "-", "x", "-", "o"],
];

function checkrow(rowArr, letter) {
  for (let i = 0; i < rowArr.length; i++) {
    if (rowArr[i] != letter) {
      return false;
    }
  }
  return true;
}

function checkCol(gameBoardMatrix, columnIndex, letter) {
  for (let i = 0; i < gameBoardMatrix.length; i++) {
    if (gameBoardMatrix[i][columnIndex] != letter) {
      return false;
    }
  }
  return true;
}

function ticTacToeWinner(gameBoardMatrix, letter) {
  //행 확인
  //some, every
  const rowWin = gameBoardMatrix.some((board) => checkrow(board, letter));
  //열 확인
  const colWin = Array({ length: gameBoardMatrix[0].length }).some((_, index) =>
    checkCol(gameBoardMatrix, index, letter)
  );
  //안쓸때_

  //함수 만들어서 코드 줄이기!
  function checkDiagonaLeftToRight(gameBoardMatrix, letter) {
    return gameBoardMatrix.every(
      (board, index) => gameBoardMatrix[index][index] === letter
    );
  }

  //왼쪽대각선
  const diagonaWinLeftToRight = checkDiagonaLeftToRight(
    gameBoardMatrix,
    letter
  );
  //오른쪽대각선
  function checkDiagonaRightToLeft(gameBoardMatrix, letter) {
    return gameBoardMatrix.every(
      (board, index) => board[board.length - index + 1] === letter
    );
  }

  //오른쪽대각선
  const diagonaWinRightToLeft = checkDiagonaRightToLeft(
    gameBoardMatrix,
    letter
  );
  return [rowWin, colWin, diagonaWinLeftToRight, diagonaWinRightToLeft].some(
    (result) => result
  );
}
console.log("tictactoewinner 0", ticTacToeWinner(board, "o"));
console.log("tictactoewinner x", ticTacToeWinner(board, "x"));

//과제 checkcol확인
