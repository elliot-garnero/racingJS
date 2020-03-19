window.onload = () => {
  let footer = document.body.childNodes[1].childNodes[1].childNodes[5];
  let eau = footer.childNodes[3];
  let carre = footer.childNodes[5];
  let poids = 1;
  let divEauTop = eau.offsetTop;
  let val = 360;

  carre.onclick = () => {
    poids++;
    divEauTop++;
    val += 2;
    eau.offsetTop = divEauTop + 'px';
    carre.style.top = val + 'px';
    if (poids > 10) {
      function drop() {
        val++;
        if (val <= 1151) {
          carre.style.top = val + 'px';
        } else {
          clearInterval(carreDrop);
        }
      }
      carre.style.top = val + 'px';
      let carreDrop = setInterval(function() {
        drop();
      }, 100);
    }
  };
};
