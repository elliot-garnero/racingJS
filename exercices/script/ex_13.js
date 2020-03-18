window.onload = () => {
  let a = localStorage.getItem('imgData');
  let div =
    document.childNodes[1].childNodes[2].childNodes[1].childNodes[1]
      .childNodes[5].childNodes[1];
  div.innerHTML = '<img src=' + a + '>';

  let img = div.childNodes[0];
  let timer = '';
  let currHeight = '';
  let currWidth = '';

  img.addEventListener('mouseover', event => {
    currHeight = event.target.height;
    currWidth = event.target.width;
    clearInterval(timer);
    timer = window.setInterval(myTimeIntervalDown, 1000);
    function myTimeIntervalDown() {
      event.target.height -= event.target.height / 100;
      event.target.width -= event.target.width / 100;
    }
  });

  img.addEventListener('mouseleave', event => {
    clearInterval(timer);
    window.setInterval(myTimeIntervalUp, 1000);
    function myTimeIntervalUp() {
      if (event.target.height < currHeight || event.target.width < currWidth) {
        event.target.height += event.target.height / 100;
        event.target.width += event.target.width / 100;
      } else {
        clearInterval(timer);
      }
    }
  });

  img.addEventListener('click', event => {
    event.target.remove();
    localStorage.imgData = undefined;
  });
};
