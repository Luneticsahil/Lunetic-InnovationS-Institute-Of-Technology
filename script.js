// JavaScript for the image slider
const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function slideTo(index) {
  const itemWidth = slider.offsetWidth / 4; // 4 images visible at a time
  const position = -itemWidth * index;
  slider.style.transform = `translateX(${position}px)`;
  currentIndex = index;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    slideTo(currentIndex - 1);
  }
});

nextBtn.addEventListener('click', () => {
  const numItems = slider.children.length;
  if (currentIndex < numItems - 4) { // 4 images visible at a time
    slideTo(currentIndex + 1);
  }
});

// Auto-scrolling
function autoScroll() {
  const numItems = slider.children.length;
  if (currentIndex < numItems - 4) { // 4 images visible at a time
    slideTo(currentIndex + 1);
  } else {
    slideTo(0);
  }
}

let autoSlideInterval = setInterval(autoScroll, 5000); // Change image every 5 seconds
