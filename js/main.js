import startLang, { getLeng } from "./leng.js";
import startToggle from "./clic.js";
import startPartners from "./partners.js";
import loadIMG from "./img_load.js";
import loadFilmsCard from "./film_card.js";


const content = document.querySelector(".main__content");

const homePage = "./pages/homePage.html";
const castPage = "./pages/castPage.html";
const teamPage = "./pages/teamPage.html";

$(content).load(homePage);


const loadHome = () => {
  load(homePage);
}

const loadCast = () => {
  load(castPage);
  let leng = getLeng();
  loadFilmsCard(leng);
}

const loadTeam = () => {
  load(teamPage);
  loadIMG();
}
const load = (page) => {
  $(content).load(page);
  window.scrollTo(0, 0);
  startLang();
  loadIMG();
}

const start = () => {
  const burger_cast = document.getElementById("burger_cast");
  const card_cast = document.getElementById("main_btn_cast");
  const burger_team = document.getElementById("burger_team");
  const card_team = document.getElementById("main_btn_team");

  burger_cast.addEventListener('click', loadCast);
  card_cast.addEventListener('click', loadCast);
  burger_team.addEventListener('click', loadTeam);
  card_team.addEventListener('click', loadTeam);

  startToggle();
  startLang();
  startPartners();
  loadIMG();
}

export default start;