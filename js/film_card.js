let url_card_rus = "./json/film_rus.json";
let url_card_eng = "./json/film_eng.json";

let card_json;

const updateFilm = (url) => {
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.send();

  request.onload = () => {
    card_json = request.response;

    updateCards();
  }
}

const crateCard = (cardDisc, size) => {

  let card = document.createElement('div');
  let name = document.createElement('h2');
  let about = document.createElement('h4');
  let type = document.createElement('h6');
  let proj = document.createElement('h4');
  let img = document.createElement('img');

  if (size === 'b') {
    card.className = "film_card_big";
  } else if (size === 's') {
    card.className = "film_card_small";
  }
  name.className = "name";
  name.textContent = cardDisc['name'];
  about.className = "about";
  if (!(cardDisc['about'] === "")) {
    about.textContent = cardDisc['about'];
  }

  type.className = "type";
  type.textContent = cardDisc['type'];
  proj.className = "proj";
  proj.textContent = cardDisc['proj'];
  img.className = "film_bg";
  img.src = cardDisc['img'];

  card.append(name);
  card.append(about);
  card.append(type);
  card.append(proj);
  card.append(img);

  return card;
}

const updateCards = () => {
  let bigCards = new Array();
  let smallCard = new Array();
  let rowNum = 1;
  let key;
  for (key in card_json) {
    let size = card_json[key]["size"];
    let card = crateCard(card_json[key], size);


    if (size === "b") {
      bigCards.push(card);

      if (bigCards.length >= 2) {
        let row = document.createElement('div');
        row.className = "big_row";

        for (let index = 0; index < bigCards.length; index++) {
          row.append(bigCards[index]);
        }

        let r = document.getElementById('row_' + rowNum);
        while (true) {
          try {
            r.append(row);
            break;
          } catch {
            r = document.getElementById('row_' + rowNum);
          }
        }



        rowNum++;
        bigCards = new Array();
      }
    } else if (size === "s") {
      smallCard.push(card);

      if (smallCard.length >= 3) {
        let row = document.createElement('div');
        row.className = "small_row";

        for (let index = 0; index < smallCard.length; index++) {
          row.append(smallCard[index]);
        }
        let r = document.getElementById('row_' + rowNum);
        r.append(row);
        rowNum++;
        smallCard = new Array();
      }
    }
  }
}

const loadFilmsCard = (leng) => {
  if (leng === 'rus') {
    updateFilm(url_card_rus);
  } else if (leng === 'eng') {
    updateFilm(url_card_eng);
  }
}

export default loadFilmsCard;