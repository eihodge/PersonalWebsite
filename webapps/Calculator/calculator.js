let num1 = 0;
let num2 = 0;
let num1active = false;
let num2active = false;
let num1negative = false;
let num2negative = false;
let operator = '';
let hasComputed = false;

function clearCalculator() {
  num1=0;
  num2=0;
  num1active = false;
  num2active = false;
  let num1negative = false;
  let num2negative = false;
  operator='';
  hasComputed=true;
  document.getElementById('equation-display').innerText = '_';
}

function append(symbol) {
  // Reset if hasComputed is true
  if (hasComputed == true) {
    num1=0;
    num2=0;
    num1active = false;
    num2active = false;
    num1negative = false;
    num2negative = false;
    operator='';
    hasComputed=false;
  }

  if (num1active == false && symbol == '&') {
    num1negative = true;
  }
  if (num2active == false && operator != '' && symbol == '&') {
    num2negative = true;
  }

  // Make sure an operator is not entered into an empty 
  if (!(num1active == false && (symbol == '+' || symbol == '-' || symbol == '×' || symbol == '/'))) {
    if (num1 > 0 && operator == '' && symbol == '&') {
      if (num1negative == false) {
        num1negative = true;
      }
    } else if (num2 > 0 && operator != '' && symbol == '&') {
      if (num2negative == false) {
        num2negative = true;
      }
    } else if ( operator == '' && (symbol == '+' || symbol == '-' || symbol == '×' || symbol == '/')) {
      operator = operator + symbol;
    } else if (symbol >= '0' && symbol <= '9') {
      if (num1active == false) {
        num1 = symbol;
        num1active = true;
      } else if (num1active == true && operator=='') {
        num1 = num1 + symbol;
      } else if (operator != '' && num2active == false) {
        num2 = symbol;
        num2active = true;
      } else if (operator != '' && num2active == true) {
        num2 = num2 + symbol;
      }
    }
    updateView();
  }       
}

function updateView() {
  let viewString = '';
  if (num1negative == true) {
    viewString = viewString + '-';
  }
  
  if (num1active == true) {
    viewString = viewString+num1;
    if (operator != '') {
      viewString = viewString+' '+operator;
      if (num2negative == true) {
        viewString = viewString + ' -';
      }
      
      if (num2active == true && num2negative == true) {
        viewString = viewString + num2;
      } else if (num2active == true) {
        viewString = viewString + ' ' + num2;
      }
    }
  }
  document.getElementById('equation-display').innerText = viewString;
}

function compute() {
  if (checkSyntax()) {
    let answer = 0;

    if (num1negative == true) {
      num1 = num1 * -1;
    }
    if (num2negative == true) {
      num2 = num2 * -1;
    }

    if (operator == '+') {
      answer = parseInt(num1) + parseInt(num2);
      document.getElementById('equation-display').innerText = answer;
    } else if (operator == '-') {
      answer = parseInt(num1) - parseInt(num2);
      document.getElementById('equation-display').innerText = answer;
    } else if (operator == '×') {
      answer = parseInt(num1) * parseInt(num2);
      document.getElementById('equation-display').innerText = answer;
    } else if (operator == '/') {
      answer = parseInt(num1) / parseInt(num2);
      document.getElementById('equation-display').innerText = answer;
      if (parseInt(num2) == 0) {
        document.getElementById('equation-display').innerText = "Undefined";
      }
    }
    hasComputed = true;
  } else {
    alert('Syntax error');
  }
}

function checkSyntax() {
  if (num1active == true && num2active == true && operator != '') {
    return true;
  } else if (num1active == true && operator == '') {
    return true;
  }
  return false;
}