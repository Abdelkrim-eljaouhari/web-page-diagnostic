let go_up = document.querySelector('.go-up');
let isScrolled = true;
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 800 && isScrolled) {
    go_up.style.display = 'block';
    isScrolled = false;
  } else if (window.pageYOffset < 800 && !isScrolled) {
    go_up.style.display = 'none';
    isScrolled = true;
  }
});

go_up.addEventListener('click', () => {
  console.log('clickable');
});
let warning_msg = document.querySelector('.warning-msg');
let form_btn = document.querySelector('.form-right button');
let text_field = document.querySelectorAll('.text-field');
// set border to none
let borderToNone = () => {
  [...text_field].map(item => (item.style.border = 'none'));
};
// callback haveToFill
let haveToFill = element => {
  warning_msg.style.display = 'block';
  warning_msg.textContent = `Vous devez remplir ${element}`;
  setTimeout(() => {
    warning_msg.style.display = 'none';
    borderToNone();
  }, 9000);
};
form_btn.addEventListener('click', e => {
  e.preventDefault();
  let mustBeFilled = [];
  for (let i = 0; i < [...text_field].length; i++) {
    if (![...text_field][i].value) {
      mustBeFilled.push([...text_field][i].name);
    }
  }
  if (mustBeFilled.length > 4) {
    haveToFill('tous les champes');
  } else if (mustBeFilled.length > 0) {
    haveToFill(mustBeFilled.join(' , '));
    [...text_field].map(item => {
      if (mustBeFilled.includes(item.name)) {
        item.style.border = '1px solid red';
      }
    });
  }
});
