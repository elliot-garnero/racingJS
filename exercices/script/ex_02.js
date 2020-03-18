window.onload = function clicking()
{
    var a = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];
    var b = 0;
    a.innerHTML = b;

    a.onclick = function()
    {
        a.innerHTML = b++;
    }
}