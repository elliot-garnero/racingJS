window.onload = () => {
  let div =
    document.childNodes[1].childNodes[2].childNodes[1].childNodes[1]
      .childNodes[5];

  document.addEventListener('click', () => {
    if (div.style.backgroundColor == 'red') {
      div.style.backgroundColor = 'yellow';
    } else {
      div.style.backgroundColor = 'red';
    }
  });
};
