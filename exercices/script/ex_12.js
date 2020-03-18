window.onload = function() {
  var racingImg = 'https://i.imgur.com/0YLolty.jpg';
  var mainDiv =
    document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];

  window.localStorage.setItem('imgData', racingImg);
  let a = localStorage.getItem('imgData');

  mainDiv.innerHTML = '<img src=' + a + '>';
};
