window.onload = function()
{
    var getSquare = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1].childNodes[1];
    var getDiv = document.body.childNodes[1].childNodes[1].childNodes[5].childNodes[1];
    var draggableElement = getSquare.setAttribute('draggable', true);
    var dropZone = getDiv.setAttribute('drop', true);

    /*
    dropZone.addEventListener('dragenter', dragenter);
    dropZone.addEventListener('dragleave', dragleave);
    dropZone.addEventListener('dragover', dragover);
    dropZone.addEventListener('drop', drop);

    draggableElement.addEventListener('dragstart', dragstart);
    draggableElement.addEventListener('dragend', dragend);
    */
    dropZone.append(draggableElement);
}