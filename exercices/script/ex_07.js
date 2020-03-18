window.onload = function() {
  var canvas =
    document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1]
      .childNodes[1];
  var button1 =
    document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3]
      .childNodes[1];
  var button2 =
    document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3]
      .childNodes[3];
  var button3 =
    document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[3]
      .childNodes[5];
  var music = new Audio(
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  );
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.moveTo(6, 6);
  ctx.lineTo(14, 10);
  ctx.lineTo(6, 14);
  ctx.closePath();
  ctx.stroke();

  canvas.onclick = function() {
    music.play();
  };
  button1.onclick = function() {
    music.pause();
  };
  button2.onclick = function() {
    music.pause();
    music.currentTime = 0;
  };
  button3.onclick = function() {
    if (music.muted != true) {
      music.muted = true;
    } else {
      music.muted = false;
    }
  };
};
