window.onload = function()
{
    var getBlack = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1];
    var getOrange1 = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[3];
    var getOlive1 = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[5];
    var getPurple1 = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[7];
    var getOrange2 = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[9];
    var getOlive2 = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[11];
    var getPurple2 = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[13];
    var getOrange3 = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[15];
    var getOlive3 = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[17];
    var getPurple3 = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[19];
    var getOrange4 = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[21];
    var getOlive4 = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[23];
    var getDiv = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].childNodes[5].childNodes[1];

    function setParent (element, parent)
    {
        parent.appendChild(element);
    }

    setParent(getOrange1, getDiv);
}