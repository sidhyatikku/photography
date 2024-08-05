  const images = [
    'img/const.jpg',
    'img/city.jpg',
    'img/liberty.jpg',
    'img/mikki.jpg',
    'img/const.jpg',
    'img/city.jpg',
    'img/liberty.jpg',
    'img/mikki.jpg',
    'img/const.jpg',
    'img/city.jpg',
    'img/liberty.jpg',
    'img/mikki.jpg',
  ];

  let currentIndex = 0;

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
    const galleryLink = document.getElementById('galleryLink');

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
      galleryLink.textContent = 'Slideshow';
    } else {
      gridView.style.display = 'none';
      imageGallery.style.display = 'flex';

      // Update link text
      galleryLink.textContent = 'Gallery';
    }
  }


  document.getElementById('galleryLink').addEventListener('click', function(event) {
    event.preventDefault();
    toggleGridView();
  });
/*
  document.getElementById('gridView').addEventListener('scroll', function() {
  console.log('Scroll X:', this.scrollLeft, 'Scroll Y:', this.scrollTop);
}); */
