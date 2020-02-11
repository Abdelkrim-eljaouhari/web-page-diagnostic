(() => {
  let go_up = document.querySelector('.go-up');
  let scrolled = true;
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 800 && scrolled) {
      go_up.style.display = 'block';
      scrolled = false;
    } else if (window.pageYOffset < 800 && !scrolled) {
      go_up.style.display = 'none';
      scrolled = true;
    }
  });
})();
