let burgerBtn = document.getElementById('burger_btn');
let burgerMenu = document.getElementById('burger_menu');
let burgerLogo = document.querySelector('.burger');


let toggle = function () {
  burgerMenu.classList.toggle('active');
  burgerLogo.classList.toggle('active');
};

burgerBtn.addEventListener('click', toggle);
