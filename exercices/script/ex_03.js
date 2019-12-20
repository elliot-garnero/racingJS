window.onload = function displayName ()
{
    var a = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];
    a.onclick = function askName()
    {
        var askPhrase = prompt("Quel est votre nom ?");
        while(!askPhrase)
        {
            askName();
        }
        if(confirm("Etes vous sûr que " + askPhrase + " est votre nom ?"))
        {
            var answer = "Bonjour " + askPhrase + " !";
            alert(answer);
            a.innerHTML = answer;
        }
    }
}