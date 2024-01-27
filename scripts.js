// Initialize game variables
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];

// Function to handle cell click
function cellClick(index) {
  if (gameBoard[index] === '') {
    gameBoard[index] = currentPlayer;
    document.getElementById(`cell${index}`).innerText = currentPlayer;
    if (checkWinner()) {
      alert(`${currentPlayer} wins!`);
      restartGame();
    } else if (checkDraw()) {
      alert('It\'s a draw!');
      restartGame();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

// Function to check for a winner
function checkWinner() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];
  return winConditions.some(condition => {
    const [a, b, c] = condition;
    return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
  });
}

// Function to check for a draw
function checkDraw() {
  return !gameBoard.includes('');
}

// Function to restart the game
function restartGame() {
  currentPlayer = 'X';
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  updateBoard();
}

// Function to update the game board UI
function updateBoard() {
  const boardElement = document.getElementById('board');
  boardElement.innerHTML = '';
  gameBoard.forEach((cell, index) => {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.id = `cell${index}`;
    cellElement.textContent = cell;
    cellElement.addEventListener('click', () => cellClick(index));
    boardElement.appendChild(cellElement);
  });
}

// Call updateBoard to initialize the game board
updateBoard();
