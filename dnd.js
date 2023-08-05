document.addEventListener("DOMContentLoaded", (event) => {
  var dragged = null;

  function handleDragStart(e) {
    this.style.opacity = "1";

    dragged = this;

    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = "move";
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add("over");
  }

  function handleDragLeave(e) {
    this.classList.remove("over");
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation(); // stops the browser from redirecting.
    }

    if (dragged != this) {
      dragged.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData("text/html");

      // changes the HR color for the card location being dragged to
      const element = document.querySelector('.underline-red');
      element.classList.add('underline-green');
      element.classList.remove('underline-red');
    }

    // changes the HR color for the card location being dragged from
    const element = document.querySelector('.underline-red');
    element.classList.add('underline-green');
    element.classList.remove('underline-red');

    // set delay before loading next page
    var delayInMilliseconds = 2000; // 2 seconds
    
    setTimeout(function() {

      // add the fadeout class to body
      document.body.classList.add('fadeout');

      // open next page
      const tab = window.open('welcome.html', "_self");
    }, delayInMilliseconds);

    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = "1";

    items.forEach(function (item) {
      item.classList.remove("over");
    });
  }

  let items = document.querySelectorAll(".container .box");
  items.forEach(function (item) {
    item.addEventListener("dragstart", handleDragStart, false);
    item.addEventListener("dragenter", handleDragEnter, false);
    item.addEventListener("dragover", handleDragOver, false);
    item.addEventListener("dragleave", handleDragLeave, false);
    item.addEventListener("drop", handleDrop, false);
    item.addEventListener("dragend", handleDragEnd, false);
  });
});