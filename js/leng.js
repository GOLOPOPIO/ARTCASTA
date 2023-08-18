let ls = location.hostname;
console.log(ls);
let url_rus =
  "http://" + String(location.hostname) + "/json/leng_rus.json";
let url_eng =
  "http://" + String(location.hostname) + "/json/leng_eng.json";
console.log(url_rus);
let leng_rus = document.getElementById('leng_rus');
let leng_rus_menu = document.getElementById('leng_rus_menu');
let leng_eng = document.getElementById('leng_eng');
let leng_eng_menu = document.getElementById('leng_eng_menu');

let toggle_rus = function () {
  leng_rus.classList.add('active');
  leng_rus_menu.classList.add('active');
  leng_eng.classList.remove('active');
  leng_eng_menu.classList.remove('active');

  updateLanguage(url_rus);
}
let toggle_eng = function () {
  leng_rus.classList.remove('active');
  leng_rus_menu.classList.remove('active');
  leng_eng.classList.add('active');
  leng_eng_menu.classList.add('active');

  updateLanguage(url_eng);
}

let updateLanguage = function (url) {

  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    let json = request.response;

    setLanguge(json);
  }
}

function setLanguge(json) {
  for (key in json) {
    let el = document.getElementById(key);
    el.textContent = '';
    el.textContent = json[key];
  }
}

updateLanguage(url_rus);

leng_rus.addEventListener('click', toggle_rus);
leng_rus_menu.addEventListener('click', toggle_rus);
leng_eng.addEventListener('click', toggle_eng);
leng_eng_menu.addEventListener('click', toggle_eng);