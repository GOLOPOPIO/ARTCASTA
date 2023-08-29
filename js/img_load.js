import getLeng from "./leng.js";

const url =
  "./json/img.json";
let imgs = '';

const loadIMG = () => {
  let size = window.innerWidth;
  if (size >= 1200) {
    size = 1200;
  } else if (s >= 1024) {
    size = 1024;
  } else if (s >= 768) {
    size = 768;
  } else {
    size = 320;
  }
  let leng = getLeng();

  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    let json = request.response;

    set(json[leng][size]);
  }
}
export default loadIMG;

const set = (json) => {

  let key = '';
  let img = '';
  for (key in json) {
    let t = document.getElementById(key);
    try {
      t.src = json[key];
    }
    catch { }
  }
}