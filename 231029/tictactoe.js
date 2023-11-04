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
  ["x", "o", "x", "o", "-"],
  ["x", "x", "x", "o", "-"],
  ["x", "o", "x", "o", "-"],
  ["x", "o", "o", "x", "-"],
  ["-", "o", "x", "o", "x"],
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
    //0 < 4
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
  //열 확인 수정전
  // const colWin = Array({ length: gameBoardMatrix[0].length }).some((_, index) =>
  //   checkCol(gameBoardMatrix, index, letter)
  // );
  //열 확인 수정후
  const colWin = gameBoardMatrix[0]
    .map((_, index) => checkCol(gameBoardMatrix, index, letter))
    .some((result) => result);
  //------map 이나 some 쓰면 checkCol 함수를 너무 많이 호출 하니깐 한번만 호출해서 짜보기 필요한 length 나 인덱스값

  //함수 만들어서 코드 줄이기!
  // function checkDiagonaLeftToRight(gameBoardMatrix, letter) {
  //   return gameBoardMatrix.every(
  //     (board, index) => gameBoardMatrix[index][index] === letter
  //   );
  // }
  // //왼쪽대각선
  // const diagonaWinLeftToRight = checkDiagonaLeftToRight(
  //   gameBoardMatrix,
  //   letter
  // );
  //오른쪽대각선
  // function checkDiagonaRightToLeft(gameBoardMatrix, letter) {
  //   return gameBoardMatrix.every(
  //     (board, index) => board[board.length - index + 1] === letter
  //   );
  // }
  //
  // const diagonaWinRightToLeft = checkDiagonaRightToLeft(
  //   gameBoardMatrix,
  //   letter
  // );

  // 왼쪽 대각선 확인
  const diagonaWinLeftToRight = gameBoardMatrix.every(
    (row, index) => row[index] === letter
  );

  // 오른쪽 대각선 확인
  const diagonaWinRightToLeft = gameBoardMatrix.every(
    (row, index) => row[row.length - index - 1] === letter
  );
  return [rowWin, colWin, diagonaWinLeftToRight, diagonaWinRightToLeft].some(
    (result) => result
  );
}
console.log("tictactoewinner o", ticTacToeWinner(board, "o"));
console.log("tictactoewinner x", ticTacToeWinner(board, "x"));

//과제 checkcol확인
