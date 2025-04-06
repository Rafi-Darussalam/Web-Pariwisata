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

const scrollBox = document.querySelector('.card-group');
let isDown = false;
let startX;
let scrollLeft;

scrollBox.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - scrollBox.offsetLeft;
  scrollLeft = scrollBox.scrollLeft;
  scrollBox.style.cursor = 'grabbing';
});

scrollBox.addEventListener('mouseleave', () => {
  isDown = false;
  scrollBox.style.cursor = 'grab';
});

scrollBox.addEventListener('mouseup', () => {
  isDown = false;
  scrollBox.style.cursor = 'grab';
});

scrollBox.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - scrollBox.offsetLeft;
  const walk = (x - startX) * 2;
  scrollBox.scrollLeft = scrollLeft - walk;
});