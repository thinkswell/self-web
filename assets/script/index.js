document.addEventListener( 'DOMContentLoaded', function() {
  var splide = new Splide( '.splide', {
      autoplay: true,
      interval: 3000,
      speed: 800,
      gap: '1rem',
      direction: 'ttb',
      height: '5.5rem',
      type: 'loop',
      arrows: false,
      pagination: false,
      drag: false,
    });
    
  splide.mount();
} );

var granimInstance = new Granim({
element: '#canvas',
direction: 'left-right',
isPausedWhenNotInView: true,
states : {
    "default-state": {
        gradients: [
            ['#333399', '#ff00cc'],
            ['#f05053', '#0575E6'],
            ['#814bff', '#d10054']
        ]
    }
}
});

function generateBeeds() {
  const beed = document.createElement('span');
  beed.classList.add('beed');
  const diameter = 45 + Math.floor(Math.random() * 100);
  const posX = -(diameter/2) + Math.floor(Math.random() * window.innerWidth);
  beed.style.width = `${diameter}px`;
  beed.style.height = `${diameter}px`;
  beed.style.left = `${posX}px`;

  document.querySelector('.beeds').appendChild(beed);
  setTimeout(() => {
    beed.remove();
  }, 6 * 1000);
}

setInterval(generateBeeds, 500);

const tabs = document.querySelectorAll('.tab');

tabs.forEach((tab, idx) => {
tab.addEventListener('mouseover', () => {
    tab.classList.add('tab-hover');
    if (idx) {
      tabs[0].classList.remove('tab-hover');
    }
});
if (idx) {
  tab.addEventListener('mouseout', () => {
    console.log(idx);
    tab.classList.remove('tab-hover');
    if (idx) {
      tabs[0].classList.add('tab-hover');
    }
  });
}
})

function initCarousel() {
  const cards = document.querySelectorAll('.carousel__card');
  let currentIndex = 0;

  function updateCarousel() {
      cards.forEach((card, index) => {
          card.classList.remove('active', 'next', 'prev');
          if (index === currentIndex) {
              card.classList.add('active');
          } else if (index === (currentIndex + 1) % cards.length) {
              card.classList.add('next');
          } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
              card.classList.add('prev');
          }
      });
  }

  function nextCard() {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCarousel();
  }

  // Initialize the carousel
  updateCarousel();
  setInterval(nextCard, 3000);
}

// Initialize the carousel when the DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel);
