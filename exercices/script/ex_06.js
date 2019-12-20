window.onload = function setCharacter()
{
    var getElement = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];
    var ret = "";

    function Hero(name, charClass, intell, force)
    {
        this.name = name;
        this.charClass = charClass;
        this.intell = intell;
        this.force = force;
    }

    var mage = new Hero("amadeus", "mage", 10, 3);
    var guerrier = new Hero("pontius", "guerrier", 3, 10);

    Hero.prototype.toString = function()
    {
        ret += "Je suis " + this.name + " le " + this.charClass + ", j'ai " + this.intell + " point d'intelligence et " + this.force + " points de force !</br>";
        return ret;
    }
    
    mage.toString();
    guerrier.toString();

    getElement.innerHTML = ret;
}