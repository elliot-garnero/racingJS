window.onload = function() {
  let button = '';
  var accept =
    document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1]
      .childNodes[1];
  var container =
    document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];

  accept.onclick = () => {
    document.cookie = 'acceptCookies=true; max-age=86400;';
  };

  if (document.cookie == 'acceptCookies=true') {
    container.innerHTML = '<div><button>Supprimer le cookie</button></div>';
    button =
      document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1]
        .childNodes[0].childNodes[0];
  } else {
    console.log('still wrong');
  }

  button.onclick = () => {
    console.log(document.cookie);
    document.cookie =
      'acceptCookies= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
  };
};
