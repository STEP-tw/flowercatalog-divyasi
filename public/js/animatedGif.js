const showGif = function() {
  let gif = document.getElementById('gif');
  gif.style.visibility = 'visible';
}

const hideGif = function() {
  let gif = document.getElementById('gif');
  gif.style.visibility = 'hidden';
  setTimeout(showGif, 1000);
}

const addListenerToGif = function() {
  let gif = document.getElementById('gif');
  gif.addEventListener("click",hideGif)
}

window.onload = addListenerToGif;
