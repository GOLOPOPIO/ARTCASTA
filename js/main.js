import startLang from "./leng.js";
import startToggle from "./clic.js";
import startPartners from "./partners.js";

startToggle();
startLang();
startPartners();

const content = document.querySelector(".main__content");

const homePage = "./pages/homePage.html";
const castPage = "./pages/castPage.html";
const teamPage = "./pages/teamPage.html";

const loadHome = () => {
  $(content).load(homePage);
}

const loadCast = () => {
  $(content).load(castPage);
}

const loadTeam = () => {
  $(content).load(teamPage);
}

const burger_cast = document.getElementById("burger_cast");
const card_cast = document.getElementById("main_btn_cast");
const burger_team = document.getElementById("burger_team");
const card_team = document.getElementById("main_btn_team");

burger_cast.addEventListener('click', loadCast);
card_cast.addEventListener('click', loadCast);
burger_team.addEventListener('click', loadTeam);
card_team.addEventListener('click', loadTeam);