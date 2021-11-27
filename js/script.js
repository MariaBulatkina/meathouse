
document.addEventListener('DOMContentLoaded', function () {
  Array.from(document.getElementsByClassName('header__nav')).forEach(function (v, i) {
    let burger = v.getElementsByClassName('header__burger')[0];
    let menu = v.getElementsByClassName('header__menu')[0];

    burger.addEventListener('click', function () {
      burger.classList.toggle('active')
      menu.classList.toggle('active')
    })
  })
});