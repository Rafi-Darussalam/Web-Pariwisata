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

const cardGroup = document.querySelector('.card-group');
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
});