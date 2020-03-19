window.onload = () => {
  let fileInput =
    document.childNodes[1].childNodes[2].childNodes[1].childNodes[1]
      .childNodes[5].childNodes[1].childNodes[1].childNodes[1];
  let files = fileInput.files[0];
  let fileSubmit =
    document.childNodes[1].childNodes[2].childNodes[1].childNodes[1]
      .childNodes[5].childNodes[1].childNodes[1].childNodes[1];
  let div =
    document.childNodes[1].childNodes[2].childNodes[1].childNodes[1]
      .childNodes[5].childNodes[3];

  let ajax = new XMLHttpRequest();
  ajax.open('POST', 'upload.php');
  ajax.setRequestHeader('COntent-Type', 'x-www-urlencoded');
  ajax.send(files);
};
