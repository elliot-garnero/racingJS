window.onload  = function ()
{
    var getSquare = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1];
    var sqrCtx = getSquare.getContext('2d');
    var music = document.body.childNodes[1].childNodes[1].childNodes[3].childNodes[5].childNodes[0].textContent;
    var pause = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[1];
    var stop = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[3];
    var mute = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3].childNodes[5];
    
    sqrCtx.beginPath();
    sqrCtx.moveTo(6, 6);
    sqrCtx.lineTo(14, 10);
    sqrCtx.lineTo(6, 14);
    sqrCtx.closePath();

    sqrCtx.lineWidth = 1;
    sqrCtx.strokeStyle = '#ffffff';
    sqrCtx.stroke();

    sqrCtx.fillStyle = '#ffffff';
    sqrCtx.fill();

    getSquare.onclick = function playMusic()
    {
        music.play();
    }

    pause.onclick = function pauseMusic()
    {
        music.pause();
    }

    stop.onclick = function stopMusic()
    {
        music.pause();
        music.currentTime = 0;
    }

    mute.onclick = function muteMusic()
    {
        music.muted();
    }
}