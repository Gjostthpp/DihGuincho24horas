let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');
function changeImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}
setInterval(changeImage, 5000);
changeImage();