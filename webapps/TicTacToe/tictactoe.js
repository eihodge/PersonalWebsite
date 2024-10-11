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
    if (turnsTaken < 9  && !winConditionMet) { // PLAYER 1 (X) TURN
      if (turn == 0) {
        grid[idx1][idx2] = 'X';
        document.getElementById(buttonId).innerText = 'X';
        checkWinConditionMet();
        if (winConditionMet == false) {
          turn = 1; // switch turn
          document.getElementById('gameplay-status').innerText = 'Turn: O';
        }
        document.getElementById(buttonId).style = 'background-color: rgb(240, 40, 40);';
      } else if (!winConditionMet) { // PLAYER 2 (O) TURN
        grid[idx1][idx2] = 'O';
        document.getElementById(buttonId).innerText = 'O';
        checkWinConditionMet();  
        if (winConditionMet == false) {
          turn = 0; // switch turn
          document.getElementById('gameplay-status').innerText = 'Turn: X';
        }
        document.getElementById(buttonId).style = 'background-color: rgb(27, 120, 255);';
      }
      turnsTaken++;
      if (turnsTaken == 9 || winConditionMet) {
        if (winConditionMet == true) {
          if (turn == 0) {
            document.getElementById('gameplay-status').innerText = 'Winner: X';
          } else if (turn == 1) {
            document.getElementById('gameplay-status').innerText = 'Winner: O';
          }
        } else {
          document.getElementById('gameplay-status').innerText = "Winner: Draw";
        }
      }
    }
  }
}