window.onload = function()
{
    var racingImg = document.body.childNodes[1].childNodes[1].childNodes[3].childNodes[3].textContent;
    var mainDiv = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];

    window.localStorage.setItem('imgData', racingImg);

    mainDiv.innerHTML = racingImg;
    this.console.log(racingImg);
}