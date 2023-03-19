/*
  The purpose of this file is to demonstrate the comparison of element
  being dragged to element where it is dropped.

  Author: Lipi Sharma
*/
const dragImage = document.getElementById("drag-image");

/*
  The purpose of this function is to store the id of the element being
  dragged in a common storage area, under the key "text".

  This function runs as soon as an element has begun to be dragged.

  Author: Lipi Sharma
*/
function drag(ev) {
  ev.dataTransfer.dragImage(
    $('myRow').mouseover(function() {
      this.id;
   })
    , ev.target.id);
}

/*
    The purpose of this function is to suspend the default behaviour so that
    instead the dragged element can potentially end up with a new position.
  
    This function runs when a dragged element is over a potential target.
  
    Author: Lipi Sharma
  */
function allowDrop(ev) {
  ev.preventDefault();
  /* Watching this output indicates how a potential bug can occur in your
     code, if you don't handle the possibility that the id from the div tag
     as well as the img tag, can be present via the "event" object */
  console.log(ev.target.id);
  /* One possible fix is to simply pass a separate argument with the
        necessary value */
  const correctId = this.id;
  const draggedId = dragImage.id;

  if (correctId === draggedId) {
    this.appendChild(dragImage);
    $("dragImage").hide();
  }
  this.classList.remove("hovering");
  
}

/*
    The purpose of this function is: to allow a dropped element to acquire a
    new position; retrieve the id of the dropped element using the key "text";
    and to set the new position of the dropped element; respectively.
  
    This function also compares the id of the dragged element with the id of
    where the element is dropped.
  
    Author: Lipi Sharma
  */
function drop(ev) {
  ev.preventDefault();

  let data = ev.dataTransfer.getElementById("bear");
  ev.target.appendChild(document.getElementById(data));
}
