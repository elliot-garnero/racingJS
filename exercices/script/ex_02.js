window.onload = function clicking()
{
    var a = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];
    a.innerHTML = 0;
    var i = 1;
    a.onclick = function()
    {
        a.innerHTML = i++;
    }
}