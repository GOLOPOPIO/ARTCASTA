let url_json =
  "./json/partners.json";
let partners = '';

let updatePartners = function (url) {
  let request = new XMLHttpRequest();
  request.open("GET", url);
  request.responseType = "json";
  request.send();

  request.onload = function () {
    let json = request.response;

    setParthers(json);
  }
}

let setParthers = function (json) {
  partners = document.querySelector(".partners__links");

  let def_img_src = '';
  let hov_img_src = '';
  let link = '';
  let key = '';
  for (key in json) {
    def_img_src = json[key]["def_img"];
    hov_img_src = json[key]["hov_img"];
    link = json[key]["link"];

    let partner = document.createElement("a");
    partner.className = "partner";
    partner.href = link;

    let def_img = document.createElement("img");
    def_img.className = "partner__default__img";
    def_img.src = def_img_src;
    let hov_img = document.createElement("img");
    hov_img.className = "partner__hover__img";
    hov_img.src = hov_img_src;

    partner.append(def_img);
    partner.append(hov_img);

    partners.append(partner);
  }
}

const startPartners = () => {
  updatePartners(url_json);
};
export default startPartners;