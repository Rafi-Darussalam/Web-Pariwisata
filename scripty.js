window.addEventListener('scroll', function() {
    const checkbox = document.getElementById('check');
  
    if (window.scrollY > 50) {
      checkbox.checked = false;
    }
  });

window.addEventListener('load', function () {
  loading.classList.add('fade-out');
  
  setTimeout(() => {
    loading.style.display = 'none';
  }, 500);
});