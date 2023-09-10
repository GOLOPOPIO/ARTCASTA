import update from "./main.js";

const url_rus =
  "./json/leng_rus.json";
const url_eng =
  "./json/leng_eng.json";

let active = url_rus;

let leng_rus = '';
let leng_rus_menu = '';
let leng_eng = '';
let leng_eng_menu = '';

let main_btn_cast = '';
let main_btn_team = '';

let toggle_rus = function () {
  leng_rus.classList.add('active');
  leng_rus_menu.classList.add('active');
  leng_eng.classList.remove('active');
  leng_eng_menu.classList.remove('active');
  active = url_rus;
  updateLanguage(active);
}
let toggle_eng = function () {
  leng_rus.classList.remove('active');
  leng_rus_menu.classList.remove('active');
  leng_eng.classList.add('active');
  leng_eng_menu.classList.add('active');
  active = url_eng;
  updateLanguage(active);
}

let updateLanguage = function (url) {
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    let json = request.response;

    setLanguge(json);
  }

  if (active === url_rus) {
    return "rus";
  } else if (active === url_eng) {
    return "eng";
  }
}

function setLanguge(json) {
  let key = '';
  for (key in json) {
    try {
      document.getElementById(key).textContent = json[key];
    }
    catch {
    }
  }
}

const startLeng = () => {
  leng_rus = document.getElementById('leng_rus');
  leng_rus_menu = document.getElementById('leng_rus_menu');
  leng_eng = document.getElementById('leng_eng');
  leng_eng_menu = document.getElementById('leng_eng_menu');

  main_btn_cast = document.getElementById('main_btn_cast');
  main_btn_team = document.getElementById('main_btn_team');

  leng_rus.addEventListener('click', toggle_rus);
  leng_rus_menu.addEventListener('click', toggle_rus);
  leng_eng.addEventListener('click', toggle_eng);
  leng_eng_menu.addEventListener('click', toggle_eng);

  let leng = updateLanguage(active);
  return leng;
};

export default startLeng;
export const getLeng = () => {
  if (active === url_rus) {
    return "rus";
  } else if (active === url_eng) {
    return "eng";
  }
}