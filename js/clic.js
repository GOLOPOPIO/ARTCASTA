let burgerBtn = '';
let burgerMenu = '';
let burgerLogo = '';
let mainContent = '';
let lengSpan = '';
let adress = '';
let map = '';


let toggle = function () {
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
  } else if (map.style.maxWidth === "600px") {
    map.style.maxWidth = "";
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