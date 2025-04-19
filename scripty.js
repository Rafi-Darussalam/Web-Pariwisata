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

window.addEventListener('load', () => {
  const middle = container.scrollWidth / 2 - container.clientWidth / 2;
  container.scrollLeft = middle;
});

document.querySelectorAll('img, a').forEach(img => {
  img.setAttribute('draggable', 'false');
});

window.addEventListener('load', () => {
  const cardWrapper = document.querySelector('.card-grup');
  const cardItems = Array.from(cardWrapper.children);

  const middle = cardWrapper.scrollWidth / 2 - cardWrapper.clientWidth / 2;
  cardWrapper.scrollLeft = middle;
});

const scrollContainer = document.querySelector('.card-grp');
let isDragging = false;
let startPositionX;
let initialScroll;

scrollContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  scrollContainer.classList.add('active');
  startPositionX = e.pageX - scrollContainer.offsetLeft;
  initialScroll = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener('mouseleave', () => {
  isDragging = false;
  scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mouseup', () => {
  isDragging = false;
  scrollContainer.classList.remove('active');
});

scrollContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer.offsetLeft;
  const distanceMoved = (x - startPositionX) * 1;
  scrollContainer.scrollLeft = initialScroll - distanceMoved;
});

const wadahKartu = document.querySelector('.card-grp');
const daftarKartu = Array.from(wadahKartu.children);

window.addEventListener('load', () => {
  const tengahWadah = wadahKartu.scrollWidth / 2 - wadahKartu.clientWidth / 2;
  wadahKartu.scrollLeft = tengahWadah;
});
