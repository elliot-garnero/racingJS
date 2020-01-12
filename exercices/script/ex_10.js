window.onload = function calculator()
{
    var stockResult = "";
    var tempResult = "";
    var getResult = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1];
    var getButtons = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[3];
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

    one.onclick = function ()
    {
        getResult.innerHTML += 1;
    }

    two.onclick = function ()
    {
        getResult.innerHTML += 2;
    }

    three.onclick = function ()
    {
        getResult.innerHTML += 3;
    }

    four.onclick = function ()
    {
        getResult.innerHTML += 4;
    }

    five.onclick = function ()
    {
        getResult.innerHTML += 5;
    }

    six.onclick = function ()
    {
        getResult.innerHTML += 6;
    }

    seven.onclick = function ()
    {
        getResult.innerHTML += 7;
    }

    eight.onclick = function ()
    {
        getResult.innerHTML += 8;
    }

    nine.onclick = function ()
    {
        getResult.innerHTML += 9;
    }

    add.onclick = function add ()
    {
        stockResult = getResult.textContent;
        stockResult += "+";
        getResult.innerHTML = "";
    }

    equal.onclick = function equal ()
    {
        tempResult = getResult.textContent;
        var result = stockResult + tempResult;
        getResult.innerHTML = result;
    }
}