let array_things = [
    {
      id: 1,
      src: "https://kec.az/oKGit",
      marka: "LG F2V7GW1W",
      cost: "1099azn",
    },
    {
      id: 2,
      src: "https://kec.az/EmLgI",
      marka: "LG F2T9GW9P",
      cost: "1199azn",
    },
    {
      id: 3,
      src: "https://kec.az/WjkPz",
      marka: "LG F4V5VS2S",
      cost: "1299azn",
    },
    {
      id: 4,
      src: "https://kec.az/Mivjk",
      marka: "BEKO WTV 8612 XSS",
      cost: "799azn",
    },
    {
      id: 5,
      src: "https://kec.az/OcSbp",
      marka: "BOSCH WAJ 2017 SME",
      cost: "899azn",
    },
    {
      id: 6,
      src: "https://kec.az/nfScW",
      marka: "Riffel WMRF 84410",
      cost: "699azn",
    },
    {
      id: 7,
      src: "https://kec.az/GPIaD",
      marka: "LG F2J3HS2W",
      cost: "899azn",
    },
    {
      id: 8,
      src: "https://kec.az/HibJv",
      marka: "SAMSUNG WW90T554CAT",
      cost: "1599azn",
    },
    {
      id: 9,
      src: "https://kec.az/pfIpp",
      marka: "Beko WKY 61231 YB3",
      cost: "1399azn",
    },
  ],
  basket_array = [],
  favorite_array = [];

for (let i = 0; i < array_things.length; i++) {
  let div = document.createElement("div");
  let favorite = document.createElement("i");
  favorite.setAttribute("onclick", "choose(this)");
  favorite.setAttribute("check", 0);
  favorite.classList.add("fa-sharp");
  favorite.classList.add("fa-solid");
  favorite.classList.add("fa-heart");
  div.appendChild(favorite);
  let img = document.createElement("img");
  div.appendChild(img);
  let p_1 = document.createElement("p");
  p_1.classList.add("marka");
  div.appendChild(p_1);
  let p_2 = document.createElement("p");
  p_2.classList.add("qiymet");
  div.appendChild(p_2);
  let button = document.createElement("button");
  button.classList.add("add");
  button.appendChild(document.createTextNode("Səbətə at"));
  div.appendChild(button);
  document.querySelector(".container-things").appendChild(div);
}

let yekun_mebleg;
(div_container = document.querySelectorAll(".container-things div img")),
  (marka_p = document.querySelectorAll(".marka")),
  (qiymet_p = document.querySelectorAll(".qiymet"));

for (let i = 0; i < div_container.length; i++) {
  for (let j = 0; j < array_things.length; j++) {
    if (i == j) {
      div_container[i].src = array_things[j].src;
      marka_p[i].innerText = array_things[j].marka;
      qiymet_p[i].innerText = array_things[j].cost;
    }
  }
}

bascet_click.addEventListener("click", function () {
  document.querySelector(".container-things").style.display = "none";
  document.querySelector(".inside-bascet").style.display = "block";
  document.querySelector(".odenilecek-mebleg").style.display = "block";
});

kontact_home.addEventListener("click", function () {
  document.querySelector(".container-things").style.display = "flex";
  document.querySelector(".inside-bascet").style.display = "none";
  document.querySelector(".odenilecek-mebleg").style.display = "none";
});

let adding = document.querySelectorAll(".add");
adding.forEach((elave_et, elave_index) => {
  elave_et.addEventListener("click", function () {
    for (let i = 0; i < array_things.length; i++) {
      if (elave_index == i) {
        if (!basket_array.includes(array_things[i])) {
          basket_array.push(array_things[i]);
        }
      }
    }
    sebeti_doldurmaq();
  });
});

function sebeti_doldurmaq() {
  sebet_ul.innerHTML = "";
  basket_array.forEach((b_a, index_ba) => {
    let li = document.createElement("li"),
      img = document.createElement("img");
    img.src = basket_array[index_ba].src;
    let p_marka = document.createElement("p");
    p_marka.appendChild(document.createTextNode(basket_array[index_ba].marka));
    p_marka.classList.add("basket-marka");
    let p_cost = document.createElement("p");
    p_cost.appendChild(document.createTextNode(basket_array[index_ba].cost));
    li.setAttribute(
      "qiymet",
      basket_array[index_ba].cost.slice(
        0,
        basket_array[index_ba].cost.length - 3
      )
    );
    p_cost.classList.add("basket-cost");
    let del = document.createElement("button"),
      del_data = document.createElement("i");
    del_data.classList.add("fa-solid");
    del_data.classList.add("fa-trash");
    del.setAttribute("onclick", "delte(this)");
    let div = document.createElement("div");
    div.classList.add("miqdar");
    div.setAttribute("s", 1);
    let i_plas = document.createElement("i");
    i_plas.classList.add("fa-solid");
    i_plas.setAttribute("onclick", "artir(this)");
    i_plas.classList.add("fa-plus");
    let i_minus = document.createElement("i");
    i_minus.classList.add("fa-solid");
    i_minus.setAttribute("onclick", "azalt(this)");
    i_minus.classList.add("fa-minus");
    let label = document.createElement("lable");
    label.appendChild(document.createTextNode("1"));
    label.classList.add("n");
    div.appendChild(i_plas);
    div.appendChild(label);
    div.appendChild(i_minus);
    del.appendChild(del_data);
    li.appendChild(img);
    li.appendChild(p_marka);
    li.appendChild(p_cost);
    li.appendChild(del);
    li.appendChild(div);
    sebet_ul.appendChild(li);
    yekun_mebleg = 0;
    document.querySelectorAll("#sebet_ul li").forEach((sum) => {
      k = Number(sum.getAttribute("qiymet"));
      yekun_mebleg += k;
    });
  });
  say.innerText = basket_array.length;
  if (basket_array.length == 0) {
    return_cost.innerText = "Ödəniləcək məbləğ: " + "0" + " azn";
  } else {
    return_cost.innerText = "Ödəniləcək məbləğ: " + yekun_mebleg + " azn";
  }
}

function delte(x) {
  for (let i = 0; i < basket_array.length; i++) {
    if (basket_array[i].src.includes(x.parentElement.firstElementChild.src)) {
      basket_array.splice(i, 1);
    }
  }
  console.log(x.parentElement.children[4].querySelector("lable").innerText);
  yekun_mebleg-=Number(x.parentElement.children[4].querySelector("lable").innerText)*Number(x.parentElement.getAttribute("qiymet"));
  x.parentElement.style.display="none";
  return_cost.innerText = "Ödəniləcək məbləğ: " + yekun_mebleg + " azn";
  say.innerText = basket_array.length;
}

let f = 1;
function artir(x) {
  a = Number(x.parentElement.getAttribute("s")) + 1;
  x.parentElement.setAttribute("s", a);
  x.parentElement.children[1].innerText = x.parentElement.getAttribute("s");
  yekun_mebleg += Number(x.parentElement.parentElement.getAttribute("qiymet"));
  return_cost.innerText = "Ödəniləcək məbləğ: " + yekun_mebleg + " azn";
}
function azalt(y) {
  if (y.parentElement.getAttribute("s") == 0) {
    return;
  }
  a = Number(y.parentElement.getAttribute("s")) - 1;
  y.parentElement.setAttribute("s", a);
  y.parentElement.children[1].innerText = y.parentElement.getAttribute("s");
  yekun_mebleg -= Number(y.parentElement.parentElement.getAttribute("qiymet"));
  return_cost.innerText = "Ödəniləcək məbləğ: " + yekun_mebleg + " azn";
}

document.querySelector(".main-heart").addEventListener("click", function () {
  document.querySelector(".like").style.width = "20%";
});

function cl0se() {
  document.querySelector(".like").style.width = "0%";
}

let y;
function choose(get) {
  y = Number(get.getAttribute("check")) + 1;
  get.setAttribute("check", y);
  console.log(get);
  if (get.getAttribute("check") == 2) {
    get.setAttribute("check", 0);
  }
  if (Number(get.getAttribute("check")) % 2 != 0) {
    for (let i = 0; i < array_things.length; i++) {
      if (array_things[i].src.includes(get.parentElement.children[1].src)) {
        favorite_array.push(array_things[i]);
        addToList_favorite();
        console.log(favorite_array);
        get.style.color = "red";
      }
    }
  } else {
    favorite_array.forEach((sil, index) => {
      if (
        get.parentElement.children[1].src.includes(favorite_array[index].src)
      ) {
        favorite_array.splice(index, 1);
        addToList_favorite();
      }
    });
    get.style.color = "lightblue";
  }
}

function addToList_favorite() {
  console.log(favorite_array);
  favorite_ul.innerHTML = "";
  favorite_array.forEach((obj, index) => {
    let li = document.createElement("li");
    let p_1 = document.createElement("p");
    p_1.classList.add("fav-close");
    p_1.setAttribute("onclick", "delete_favorite(this)");
    p_1.appendChild(document.createTextNode("-"));
    let div = document.createElement("div");
    div.classList.add("li-text");
    p_2 = document.createElement("p");
    p_2.classList.add("fa-marka");
    p_2.appendChild(document.createTextNode(favorite_array[index].marka));
    let p_3 = document.createElement("p");
    p_3.classList.add("fa-cost");
    p_3.appendChild(document.createTextNode(favorite_array[index].cost));
    let button = document.createElement("button");
    button.appendChild(document.createTextNode("Səbətə at"));
    button.classList.add("add_2");
    let img = document.createElement("img");
    div.appendChild(p_1);
    div.appendChild(p_2);
    div.appendChild(p_3);
    div.appendChild(button);
    img.src = favorite_array[index].src;
    li.appendChild(img);
    li.appendChild(div);
    favorite_ul.appendChild(li);
  });
  like_count.innerText = favorite_array.length;

  document.querySelectorAll(".add_2").forEach((ad, index) => {
    ad.addEventListener("click", function () {
      for (let j = 0; j < favorite_array.length; j++) {
        if (
          favorite_array[j].src.includes(
            ad.parentElement.parentElement.children[0].src
          )
        ) {
          if (!basket_array.includes(favorite_array[j])) {
            basket_array.push(favorite_array[j]);
            console.log(basket_array);
            sebeti_doldurmaq();
          }
        }
      }
    });
  });
}

function delete_favorite(dash) {
  for (let i = 0; i < favorite_array.length; i++) {
    if (
      favorite_array[i].src.includes(
        dash.parentElement.parentElement.children[0].src
      )
    ) {
      favorite_array.splice(i, 1);
    }

    let divs = document.querySelectorAll(".container-things div");
    for (let i = 0; i < divs.length; i++) {
      if (
        dash.parentElement.parentElement.children[0].src ==
        divs[i].children[1].src
      ) {
        divs[i].children[0].style.color = "lightblue";
        divs[i].children[0].setAttribute("check", 0);
      }
    }

    addToList_favorite();
  }
}
