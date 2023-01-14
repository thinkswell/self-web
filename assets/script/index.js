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
