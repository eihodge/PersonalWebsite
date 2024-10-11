let grid = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let turn = 0;
let turnsTaken = 0;
let winConditionMet = false;
document.getElementById('gameplay-status').innerText = 'Turn: X';

function checkWinConditionMet() {
  if (grid[0][0] == 'O' && grid[0][1] == 'O' && grid[0][2] == 'O') { winConditionMet = true; }
  else if (grid[1][0] == 'O' && grid[1][1] == 'O' && grid[1][2] == 'O') { winConditionMet = true; }
  else if (grid[2][0] == 'O' && grid[2][1] == 'O' && grid[2][2] == 'O') { winConditionMet = true; }
  else if (grid[0][0] == 'O' && grid[1][0] == 'O' && grid[2][0] == 'O') { winConditionMet = true; }
  else if (grid[0][1] == 'O' && grid[1][1] == 'O' && grid[2][1] == 'O') { winConditionMet = true; }
  else if (grid[0][2] == 'O' && grid[1][2] == 'O' && grid[2][2] == 'O') { winConditionMet = true; }
  else if (grid[0][0] == 'O' && grid[1][1] == 'O' && grid[2][2] == 'O') { winConditionMet = true; }
  else if (grid[2][0] == 'O' && grid[1][1] == 'O' && grid[0][2] == 'O') { winConditionMet = true; }
  else if (grid[0][0] == 'X' && grid[0][1] == 'X' && grid[0][2] == 'X') { winConditionMet = true; }
  else if (grid[1][0] == 'X' && grid[1][1] == 'X' && grid[1][2] == 'X') { winConditionMet = true; }
  else if (grid[2][0] == 'X' && grid[2][1] == 'X' && grid[2][2] == 'X') { winConditionMet = true; }
  else if (grid[0][0] == 'X' && grid[1][0] == 'X' && grid[2][0] == 'X') { winConditionMet = true; }
  else if (grid[0][1] == 'X' && grid[1][1] == 'X' && grid[2][1] == 'X') { winConditionMet = true; }
  else if (grid[0][2] == 'X' && grid[1][2] == 'X' && grid[2][2] == 'X') { winConditionMet = true; }
  else if (grid[0][0] == 'X' && grid[1][1] == 'X' && grid[2][2] == 'X') { winConditionMet = true; }
  else if (grid[2][0] == 'X' && grid[1][1] == 'X' && grid[0][2] == 'X') { winConditionMet = true; }
}

function executeMove(idx1, idx2, buttonId) {
  if (grid[idx1][idx2] !== '' && !winConditionMet && turnsTaken < 9) {
    alert('This square has already been played. Try another square.');
  } else {
    if (turnsTaken < 9 && !winConditionMet) {
      const button = document.getElementById(buttonId);

      if (turn == 0) { // PLAYER 1 (X) TURN
        grid[idx1][idx2] = 'X';
        button.innerText = 'X';
        button.classList.add('active'); // Add active class for visibility
        button.style.color = 'rgb(240, 40, 40)'; // Change text color to red
        checkWinConditionMet();
        if (!winConditionMet) {
          turn = 1; // Switch turn to Player 2
          document.getElementById('gameplay-status').innerText = 'Turn: O';
        }
      } else if (!winConditionMet) { // PLAYER 2 (O) TURN
        grid[idx1][idx2] = 'O';
        button.innerText = 'O';
        button.classList.add('active'); // Add active class for visibility
        button.style.color = 'rgb(27, 120, 255)'; // Change text color to blue
        checkWinConditionMet();
        if (!winConditionMet) {
          turn = 0; // Switch turn to Player 1
          document.getElementById('gameplay-status').innerText = 'Turn: X';
        }
      }
      turnsTaken++;
      if (turnsTaken == 9 || winConditionMet) {
        if (winConditionMet) {
          document.getElementById('gameplay-status').innerText = `Winner: ${turn === 0 ? 'X' : 'O'}`;
        } else {
          document.getElementById('gameplay-status').innerText = "Winner: Draw";
        }
      }
    }
  }
}
