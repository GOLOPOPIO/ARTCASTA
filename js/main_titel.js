const A = "./img/vector/chars/Vector-A.svg";
const C = "./img/vector/chars/Vector-C.svg";
const R = "./img/vector/chars/Vector-R.svg";
const S = "./img/vector/chars/Vector-S.svg";
const T = "./img/vector/chars/Vector-T.svg";

const str = [A, R, T, C, A, S, T, A];
const colors =
  [".perpl", ".dark_blue", ".light_blue", ".green", ".yelow", ".orange", ".red", ".total_fill"]

let color = 0;
let char = 0;


for (color in colors) {
  colors[color] = document.querySelector(colors[color]);

}
color = 0;
const anim = () => {
  for (color in colors) {
    colors[color].classList.toggle('anim');
  }
}
anim();

let updateLanguage = function (url, num) {
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "text";
  request.send();

  request.onload = function () {
    let text = request.response;
    char += 1;
    for (color in colors) {
      colors[color].insertAdjacentHTML('beforeend', text);
    }
    if (char <= str.length - 1) {
      setTimeout(updateLanguage, 100, str[char], char);
    }
    else {
      anim();
    }
  }
}

updateLanguage(str[char], char);