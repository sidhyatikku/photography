// Always start with a1.jpg, then randomize the rest
const allImages = [
  'img/export/a2.jpg',
  'img/export/a3.jpg',
  'img/export/bk.jpg',
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
  'img/export/a21.jpg',
  'img/export/img-56.jpg',
  'img/export/img-57.jpg',
  'img/export/img-1.jpg',
  'img/export/img-12.jpg',
  'img/export/img-13.jpg',
  'img/export/img-14.jpg',
  'img/export/img-15.jpg',
  'img/export/img-16.jpg',
  'img/export/img-17.jpg',
  'img/export/img-18.jpg',
  'img/export/img-19.jpg',
  'img/export/img-2.jpg',
  'img/export/img-22.jpg',
  'img/export/img-23.jpg',
  'img/export/img-24.jpg',
  'img/export/img-26.jpg',
  'img/export/img-27.jpg',
  'img/export/img-28.jpg',
  'img/export/img-3.jpg',
  'img/export/img-32.jpg',
  'img/export/img-33.jpg',
  'img/export/img-35.jpg',
  'img/export/img-36.jpg',
  'img/export/img-37.jpg',
  'img/export/img-38.jpg',
  'img/export/img-39.jpg',
  'img/export/img-40.jpg',
  'img/export/img-42.jpg',
  'img/export/img-43.jpg',
  'img/export/img-45.jpg',
  'img/export/img-46.jpg',
  'img/export/img-47.jpg',
  'img/export/img-48.jpg',
  'img/export/img-5.jpg',
  'img/export/img-50.jpg',
  'img/export/img-51.jpg',
  'img/export/img-54.jpg',
  'img/export/img-7.jpg',
  'img/export/img-8.jpg',
  'img/export/img-9.jpg',
  'img/export/img-55.jpg',
  'img/export/img-58.jpg',
  'img/export/img_59.jpg',
  'img/export/img_60.jpg',
  'img/export/img_61.jpg',
  'img/export/img_62.jpg',
  'img/export/img_63.jpg',
  'img/export/img_64.jpg',
  'img/export/img_65.jpg',
  'img/export/img_66.jpg',
  'img/export/img_67.jpg',
  'img/export/img_68.jpg',
  'img/export/img_69.jpg',
  'img/export/img_70.jpg',
  'img/export/img_71.jpg',
  'img/export/img_72.jpg',
  'img/export/img_73.jpg',
  'img/export/img_74.jpg',
  'img/export/img_75.jpg',
  'img/export/img_76.jpg',
  'img/export/img_77.jpg',
  'img/export/img_78.jpg',
  'img/export/img_79.jpg',
  'img/export/img_80.jpg',
  'img/export/img_81.jpeg',
  'img/export/img_82.jpeg',
  'img/export/img_83.jpeg',
  'img/export/img_84.jpeg',
  'img/export/img_85.jpeg',
  'img/export/img_86.jpeg',
  'img/export/img_87.jpeg',
  'img/export/img_88.jpeg',
  'img/export/img_89.jpeg',
  'img/export/img_90.jpeg',
  'img/export/img_91.jpeg',
  'img/export/img_92.jpeg',
  'img/export/img_93.jpeg',
  'img/export/img_94.jpeg',
  'img/export/img_95.jpeg',
  'img/export/img_96.jpeg',
  'img/export/img_97.jpeg',
  'img/export/img_98.jpeg',
  'img/export/img_99.jpeg',
  'img/export/img_100.jpeg',
  'img/export/img_101.jpeg',
  'img/export/img_102.jpeg',
  'img/export/img_103.jpeg',
  'img/export/img_104.jpeg',
  'img/export/img_105.jpeg'
];

// Shuffle the rest
allImages.sort(() => Math.random() - 0.5);

// Final ordered list: a1 first, rest randomized
const images = ['img/export/a1.jpg', ...allImages];

let currentIndex = 0;
let autoChangeInterval;

// Helper: safe gtag wrapper in case GA hasn't loaded
function gaEvent(eventName, params) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }
}

// Function to show next image
function showNextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  const src = images[currentIndex];
  document.getElementById('galleryImage').src = src;
  gaEvent('slideshow_image_view', {
    image_index: currentIndex,
    image_src: src,
    direction: 'next'
  });
}

// Function to show previous image
function showPreviousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  const src = images[currentIndex];
  document.getElementById('galleryImage').src = src;
  gaEvent('slideshow_image_view', {
    image_index: currentIndex,
    image_src: src,
    direction: 'previous'
  });
}

// Function to start automatic image change (always clears previous)
function startAutoChange() {
  clearInterval(autoChangeInterval);
  autoChangeInterval = setInterval(function() {
    currentIndex = (currentIndex + 1) % images.length;
    const src = images[currentIndex];
    document.getElementById('galleryImage').src = src;
    gaEvent('slideshow_auto_advance', {
      image_index: currentIndex,
      image_src: src
    });
  }, 6000); // 6 seconds
}

// Add event listener for click on the image
document.querySelector('.image_gallery_click').addEventListener('click', function(event) {

  const screenWidth = window.innerWidth;
  const clickX = event.clientX;

  if (clickX < screenWidth / 2) {
    // Clicked on the left side
    showPreviousImage();
    gaEvent('slideshow_navigate', { direction: 'previous', method: 'click' });
  } else {
    // Clicked on the right side
    showNextImage();
    gaEvent('slideshow_navigate', { direction: 'next', method: 'click' });
  }

  // Reset the auto-change timer when user clicks
  clearInterval(autoChangeInterval);
  startAutoChange();
});

document.querySelector('.image_gallery_click').addEventListener('mousemove', function(event) {
  const screenWidth = window.innerWidth;
  const clickX = event.clientX;

  if (clickX < screenWidth / 2) {
    this.style.cursor = 'w-resize';
  } else {
    this.style.cursor = 'e-resize';
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
    images.forEach(function(src, index) {
      const img = document.createElement('img');
      img.src = src;
      img.alt = src.split('/').pop().split('.')[0];
      img.addEventListener('click', function() {
        gaEvent('grid_image_click', {
          image_index: index,
          image_src: src
        });
      });
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

    gaEvent('view_toggle', { view: 'grid', image_count: images.length });
  } else {
    gridView.style.display = 'none';
    imageGallery.style.display = 'flex';

    // Update link text
    galleryLinks.forEach(link => link.textContent = 'Gallery');

    // Restart automatic image change when in slideshow view
    startAutoChange();

    gaEvent('view_toggle', { view: 'slideshow' });
  }
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

// Track initial slideshow load
gaEvent('slideshow_start', {
  total_images: images.length,
  first_image: images[0]
});

// ── Outbound link tracking (desktop + mobile) ─────────────────────────────────
['websiteLinkDesktop', 'websiteLinkMobile'].forEach(function(id) {
  var el = document.getElementById(id);
  if (!el) return;
  var location = id === 'websiteLinkDesktop' ? 'header_desktop' : 'header_mobile';
  el.addEventListener('click', function() {
    gaEvent('outbound_link_click', {
      link_url: 'https://sidhyatikku.com',
      link_text: 'Website',
      location: location
    });
  });
});

// ── Keyboard navigation (left/right arrow keys) ───────────────────────────────
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowRight') {
    showNextImage();
    gaEvent('slideshow_navigate', { direction: 'next', method: 'keyboard' });
    clearInterval(autoChangeInterval);
    startAutoChange();
  } else if (e.key === 'ArrowLeft') {
    showPreviousImage();
    gaEvent('slideshow_navigate', { direction: 'previous', method: 'keyboard' });
    clearInterval(autoChangeInterval);
    startAutoChange();
  }
});

// ── Page engagement: time on page ─────────────────────────────────────────────
// Track only active (visible) time — pause the clock when the tab is hidden
var sessionStart = Date.now();
var activeTimeAccumulated = 0;

window.addEventListener('beforeunload', function() {
  // Add any remaining active time since the last visible moment
  if (document.visibilityState === 'visible') {
    activeTimeAccumulated += Date.now() - sessionStart;
  }
  var timeSpentSeconds = Math.round(activeTimeAccumulated / 1000);
  gaEvent('page_engagement', {
    time_on_page_seconds: timeSpentSeconds,
    images_viewed: currentIndex + 1
  });
});

// ── Page visibility: pause interval + clock when tab is hidden ────────────────
document.addEventListener('visibilitychange', function() {
  if (document.visibilityState === 'hidden') {
    // Pause the slideshow interval so no auto-advance fires in the background
    clearInterval(autoChangeInterval);
    // Accumulate active time up to this point
    activeTimeAccumulated += Date.now() - sessionStart;
    gaEvent('page_hidden', { current_image_index: currentIndex });
  } else {
    // Resume the slideshow and reset the active-time clock
    var gridView = document.getElementById('gridView');
    var isGridVisible = gridView && gridView.style.display === 'grid';
    if (!isGridVisible) {
      startAutoChange();
    }
    sessionStart = Date.now();
    gaEvent('page_visible', { current_image_index: currentIndex });
  }
});
