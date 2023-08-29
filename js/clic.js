let burgerBtn = '';
let burgerMenu = '';
let burgerLogo = '';
let mainContent = '';
let lengSpan = '';
let adress = '';
let map = '';


export const toggle = function () {
  burgerMenu.classList.toggle('active');
  burgerLogo.classList.toggle('active');
  lengSpan.classList.toggle('active');
  mainContent.addEventListener('click', function () {
    toggle();
  });
};

let mapToggle = function () {
  if (map.style.maxWidth === "") {
    map.style.maxWidth = "600px";
    adress.classList.toggle('hover');
    adress.style.borderWidth = "thick";
    adress.style.borderColor = "#7c5ae1";
  } else if (map.style.maxWidth === "600px") {
    map.style.maxWidth = "";
    adress.classList.toggle('hover');

  }
}

const startToggle = function () {
  burgerBtn = document.getElementById('burger_btn');
  burgerMenu = document.getElementById('burger_menu');
  burgerLogo = document.querySelector('.burger');
  mainContent = document.querySelector('.main__content');
  lengSpan = document.querySelector('.leng__iner');

  adress = document.getElementById('contacts_andress');
  map = document.getElementById('yandex_map');

  adress.addEventListener('click', mapToggle);
  burgerBtn.addEventListener('click', toggle);
};

export default startToggle;