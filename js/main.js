import startLang from "./leng.js";
import startToggle from "./clic.js";

screen.addEventListener("orientationchange", function () {
  if (screen.width < 1024) {
    lockOrintation();
    console.log(screen.orientation + "/n" + screen.width)
  }
});


document.addEventListener("DOMContentLoaded", function () {
  startToggle();
  startLang();
})