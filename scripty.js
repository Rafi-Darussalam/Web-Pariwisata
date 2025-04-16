window.addEventListener('scroll', function() {
    const checkbox = document.getElementById('check');
  
    if (window.scrollY > 50) {
      checkbox.checked = false;
    }
  });

window.addEventListener('load', function () {
  const loading = document.getElementById('loading');
  loading.classList.add('fade-out');
  
  setTimeout(() => {
    loading.style.display = 'none';

  }, 500);
});

const cardGroup = document.querySelector('.card-group, .card-container');
let isDown = false;
let startX;
let scrollLeft;

cardGroup.addEventListener('mousedown', (e) => {
  isDown = true;
  cardGroup.classList.add('active');
  startX = e.pageX - cardGroup.offsetLeft;
  scrollLeft = cardGroup.scrollLeft;
});

cardGroup.addEventListener('mouseleave', () => {
  isDown = false;
  cardGroup.classList.remove('active');
});

cardGroup.addEventListener('mouseup', () => {
  isDown = false;
  cardGroup.classList.remove('active');
});

cardGroup.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - cardGroup.offsetLeft;
  const walk = (x - startX) * 1;
  cardGroup.scrollLeft = scrollLeft - walk;
})

const container = document.querySelector('.card-container');
const cards = Array.from(container.children);

for (let i = 0; i < 2; i++) {
  cards.forEach(card => {
    container.appendChild(card.cloneNode(true));
  });
}


window.addEventListener('load', () => {
  const middle = container.scrollWidth / 2 - container.clientWidth / 2;
  container.scrollLeft = middle;
});

container.addEventListener('scroll', () => {
  const maxScroll = container.scrollWidth;
  const current = container.scrollLeft;

  if (current < 100) {
    container.scrollLeft = current + (maxScroll / 3);
  }
  if (current > maxScroll - container.clientWidth - 100) {
    container.scrollLeft = current - (maxScroll / 3);
  }
});

document.querySelectorAll('img, a').forEach(img => {
  img.setAttribute('draggable', 'false');
});