window.onload = function ()
{
    var accept = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1];

    accept.onclick = function()
    {
        document.cookie = "name=acceptCookies; value=true; max-age=86400";
    }

    if(cookie.acceptCookies.value == true)
    {
        accept.innerHTML = "";
    }
    else
    {

    }
}