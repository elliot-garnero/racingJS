var temp = "";
window.addEventListener ("keydown", event =>
{
    var getElement = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];
    const typedCharacters = event.key;
    temp += typedCharacters;
    var last42 = temp.substring(temp.length-42);
    getElement.innerHTML = last42;
});