window.onload = () => {
  let textDiv =
    document.childNodes[1].childNodes[2].childNodes[1].childNodes[1]
      .childNodes[5].childNodes[1].childNodes[1];
  let div =
    document.childNodes[1].childNodes[2].childNodes[1].childNodes[1]
      .childNodes[5].childNodes[3];

  let text = textDiv.value;
  let result = parseBBcode(text);
  div.innerHTML = result;

  function parseBBcode(str) {
    str = str.replace(/\[B\]/g, '<strong>');
    str = str.replace(/\[\/B\]/g, '</strong>');
    str = str.replace(/\[U\]/g, '<u>');
    str = str.replace(/\[\/U\]/g, '</u>');
    str = str.replace(/\[S\]/g, '<del>');
    str = str.replace(/\[\/S\]/g, '</del>');
    str = str.replace(/\[COLOR=</g, '<p style="color:');
    str = str.replace(/\[LINK=</g, '<a href="');
    str = str.replace(/>\]/g, '";>');
    str = str.replace(/>\]/g, '";>');
    return str;
  }
};
