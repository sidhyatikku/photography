const images = [
'img/export/a1.jpg',
'img/export/a2.jpg',
'img/export/a3.jpg',
'img/export/a4.jpg',
'img/export/a5.jpg',
'img/export/a6.jpg',
'img/export/a7.jpg',
'img/export/a8.jpg',
'img/export/a9.jpg',
'img/export/a10.jpg',
'img/export/a11.jpg',
'img/export/a12.jpg',
'img/export/a13.jpg',
'img/export/a14.jpg',
'img/export/a15.jpg',
'img/export/a16.jpg',
'img/export/a17.jpg',
'img/export/a18.jpg',
'img/export/a19.jpg',
'img/export/a20.jpg',
'img/export/a21.jpg','img/export/img-56.jpg','img/export/img-57.jpg',
'img/export/img-1.jpg','img/export/img-12.jpg','img/export/img-13.jpg','img/export/img-14.jpg','img/export/img-15.jpg','img/export/img-16.jpg','img/export/img-17.jpg','img/export/img-18.jpg','img/export/img-19.jpg','img/export/img-2.jpg','img/export/img-22.jpg','img/export/img-23.jpg','img/export/img-24.jpg','img/export/img-26.jpg','img/export/img-27.jpg','img/export/img-28.jpg','img/export/img-3.jpg','img/export/img-32.jpg','img/export/img-33.jpg','img/export/img-35.jpg','img/export/img-36.jpg','img/export/img-37.jpg','img/export/img-38.jpg','img/export/img-39.jpg','img/export/img-40.jpg','img/export/img-42.jpg','img/export/img-43.jpg','img/export/img-45.jpg','img/export/img-46.jpg','img/export/img-47.jpg','img/export/img-48.jpg','img/export/img-5.jpg','img/export/img-50.jpg','img/export/img-51.jpg','img/export/img-54.jpg','img/export/img-7.jpg','img/export/img-8.jpg','img/export/img-9.jpg','img/export/img-55.jpg'
];

let currentIndex = 0;
let autoChangeInterval;

// Function to show next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('galleryImage').src = images[currentIndex];
}

// Function to show previous image
function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById('galleryImage').src = images[currentIndex];
}

// Add event listener for click on the image
document.querySelector('.image_gallery_click').addEventListener('click', function(event) {
  const screenWidth = window.innerWidth;
  const clickX = event.clientX;

  if (clickX < screenWidth / 2) {
    // Clicked on the left side
    showPreviousImage();
  } else {
    // Clicked on the right side
    showNextImage();
  }
});

// Function to toggle grid view
function toggleGridView() {
  const gridView = document.getElementById('gridView');
  const imageGallery = document.querySelector('.image_gallery_click');
  const galleryLinks = document.querySelectorAll('#galleryLink, #galleryLink2');

  if (gridView.style.display === 'none' || gridView.style.display === '') {
    // Populate the grid view with images
    gridView.innerHTML = ''; // Clear any existing images
    images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = src.split('/').pop().split('.')[0];
      gridView.appendChild(img);
    });

    gridView.style.display = 'grid';
    imageGallery.style.display = 'none';

    // Scroll to grid view
    gridView.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Update link text
    galleryLinks.forEach(link => link.textContent = 'Slideshow');

    // Stop automatic image change when in grid view
    clearInterval(autoChangeInterval);
  } else {
    gridView.style.display = 'none';
    imageGallery.style.display = 'flex';

    // Update link text
    galleryLinks.forEach(link => link.textContent = 'Gallery');

    // Restart automatic image change when in slideshow view
    startAutoChange();
  }
}

// Function to start automatic image change
function startAutoChange() {
  autoChangeInterval = setInterval(showNextImage, 6000); // Change image every 30 seconds
}

// Add event listeners for the gallery links
const galleryLinks = document.querySelectorAll('#galleryLink, #galleryLink2');
galleryLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    toggleGridView();
  });
});

// Start the automatic image change when the page loads
startAutoChange();
