function removeSelected(elements) {
  for (let el of elements) {
    el.classList.remove('selected');
  }
}

let currentImage = document.querySelector('#current-image > img');
let thumbnailImages = document.querySelectorAll('#thumbnails > img');

for (let img of thumbnailImages) {
  img.addEventListener('click', function() {
    removeSelected(thumbnailImages);

    img.classList.add('selected');

    currentImage.src = img.src;
  });
}
