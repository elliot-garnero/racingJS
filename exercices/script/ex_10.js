window.onload = function calculator() {
  //Variables
  var stockResult = '';
  var tempResult = '';
  var result = '';
  var sign = '';

  //Get all the buttons
  var getResult =
    document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1]
      .childNodes[1];
  var getButtons =
    document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1]
      .childNodes[3];
  var suppr = getButtons.childNodes[1];
  var clear = getButtons.childNodes[3];
  var modulo = getButtons.childNodes[5];
  var divide = getButtons.childNodes[7];
  var multiply = getButtons.childNodes[15];
  var subtract = getButtons.childNodes[23];
  var add = getButtons.childNodes[31];
  var equal = getButtons.childNodes[37];
  var dot = getButtons.childNodes[35];
  var zero = getButtons.childNodes[33];
  var one = getButtons.childNodes[25];
  var two = getButtons.childNodes[27];
  var three = getButtons.childNodes[29];
  var four = getButtons.childNodes[17];
  var five = getButtons.childNodes[19];
  var six = getButtons.childNodes[21];
  var seven = getButtons.childNodes[9];
  var eight = getButtons.childNodes[11];
  var nine = getButtons.childNodes[13];

  //Arrow functions for all commands
  clear.onclick = () => {
    getResult.innerHTML = '';
  };

  suppr.onclick = () => {
    str = getResult.innerHTML;
    let a = str.substring(0, str.length - 1);
    getResult.innerHTML = a;
  };

  dot.onclick = () => {
    getResult.innerHTML += '.';
  };

  zero.onclick = () => {
    getResult.innerHTML += 0;
  };

  one.onclick = () => {
    getResult.innerHTML += 1;
  };

  two.onclick = () => {
    getResult.innerHTML += 2;
  };

  three.onclick = () => {
    getResult.innerHTML += 3;
  };

  four.onclick = () => {
    getResult.innerHTML += 4;
  };

  five.onclick = () => {
    getResult.innerHTML += 5;
  };

  six.onclick = () => {
    getResult.innerHTML += 6;
  };

  seven.onclick = () => {
    getResult.innerHTML += 7;
  };

  eight.onclick = () => {
    getResult.innerHTML += 8;
  };

  nine.onclick = () => {
    getResult.innerHTML += 9;
  };

  add.onclick = () => {
    stockResult = getResult.textContent;
    getResult.innerHTML = '';
    sign = '+';
  };

  subtract.onclick = () => {
    stockResult = getResult.textContent;
    getResult.innerHTML = '';
    sign = '-';
  };

  multiply.onclick = () => {
    stockResult = getResult.textContent;
    getResult.innerHTML = '';
    sign = '*';
  };

  divide.onclick = () => {
    stockResult = getResult.textContent;
    getResult.innerHTML = '';
    sign = '/';
  };

  modulo.onclick = () => {
    stockResult = getResult.textContent;
    getResult.innerHTML = '';
    sign = '%';
  };

  //The equal parseFloat() the numbers and do the operation depending on the sign
  equal.onclick = () => {
    tempResult = getResult.textContent;
    let a = parseFloat(stockResult);
    let b = parseFloat(tempResult);
    switch (sign) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        result = a / b;
        break;
      case '%':
        result = a % b;
        break;
    }
    parseFloat(result);
    getResult.innerHTML = result;
  };
};
