window.onload = function pageChange()
{
    var plusButton = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1];
    var lessButton = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[3];
    var colorButton = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[5];
    
    plusButton.onclick = function big()
    {
        var currentSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
        var actualFontSize = parseFloat(currentSize);
        document.body.style.fontSize = (actualFontSize + 1) + 'px';
    }
    lessButton.onclick = function small()
    {
        var currentSize = window.getComputedStyle(document.body, null).getPropertyValue('font-size');
        var actualFontSize = parseFloat(currentSize);
        document.body.style.fontSize = (actualFontSize - 1) + 'px';
    }
    colorButton.onchange = function changeColor()
    {
        var selectedColor = colorButton.options[colorButton.selectedIndex].value;
        document.body.style.backgroundColor = selectedColor;
    }
}