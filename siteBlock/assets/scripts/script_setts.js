function yukola() {
  pilot.textContent = 0;
  let row = document.createElement("TR");
  let site = document.createElement("TD");
  let option = document.createElement("TD");
  let creelen = document.createElement("TD");
  site.textContent = "This table is empty.";
  option.textContent = "N/A";
  creelen.textContent = "N/A";
  site.classList.add("italic");
  option.classList.add("italic");
  creelen.classList.add("italic");
  row.appendChild(site);
  row.appendChild(option);
  row.appendChild(creelen);
  site1.appendChild(row);
}

function kolokola(datahata) {
  let bool = false;
  let regex;
  let temp;
  if (datahata.charAt(datahata.length - 1) === "/") {
    temp = datahata.substring(0, datahata.length - 1);
    if (!temp) {
      return;
    }
    bool = true;
  } else {
    temp = datahata;
  }
  temp = oplata(temp, "c");
  if (bool) {
    regex = temp + "$|" + temp + "\\/+.*";
  } else {
    regex = temp + "\\/?.*";
  }
  if (!!ultimatiam) {
    let site = {
      regex: regex,
      option: "Blocking URL and child URL's",
    };
    ultimatiam[datahata] = site;
  }
}

function indavirata() {
  if (!!ultimatiam) {
    let keys = Object.keys(ultimatiam);
    pilot.textContent = keys.length;
    if (!!keys.length) {
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let row = document.createElement("TR");
        let site = document.createElement("TD");
        let option = document.createElement("TD");
        let creelen = document.createElement("TD");
        let velena = document.createElement("BUTTON");
        let changeBtn = document.createElement("BUTTON");
        velena.textContent = "Unblock";
        velena.classList.add("unlinediv7");
        velena.addEventListener("click", () => {
          let site =
            velena.parentElement.parentElement.firstChild.textContent;
          if (!!ultimatiam) {
            delete ultimatiam[site];
            trevata.set({ sites: ultimatiam });
          }
        });
        changeBtn.textContent = "Change";
        changeBtn.addEventListener("click", () => {
          let trancendetnOuts = gertunsa.querySelectorAll("input");
          for (let trancendetnOut of trancendetnOuts) {
            if (trancendetnOut.value === option.title) {
              trancendetnOut.checked = true;
              break;
            }
          }
          cremerta.textContent = site.textContent;
          gertunsa.classList.remove("hidden");
        });
        site.textContent = key;
        option.textContent = ultimatiam[key].option;
        option.title = option.textContent;
        option.classList.add("optionCell");
        option.appendChild(changeBtn);
        creelen.appendChild(velena);
        row.appendChild(site);
        row.appendChild(option);
        row.appendChild(creelen);
        site1.appendChild(row);
      }
    } else {
      yukola();
    }
  } else {
    yukola();
  }
}

const site1 = document.getElementById("blacklistTable");
const site2 = document.getElementById("changeRedirect");
const site2Btn = document.getElementById("changeRedirectBtn");
const dirSite = document.getElementById("changeSpecial");
const qutio = document.getElementById("changeSpecialBtn");
const vse = document.getElementById("closeBtn");
const boblik = document.getElementById("closeImportModal");
const untio = document.getElementById("closeOptionModal");
const endenga = document.getElementById("importModal");
const cremerta = document.getElementById("modalSiteText");
const ulerta = document.getElementById("noResults");
const pilot = document.getElementById("numItems");
const gertunsa = document.getElementById("optionModal");
const finaladd1 = document.getElementById("redirectSpan");
const getdefine = document.getElementById("downloadList");


function xonarta(e) {
  let f = e.target.files[0];
  if (!!f) {
    let r = new FileReader();
    r.onload = function (e) {
      symbolsy = e.target.result;
    };
    r.readAsText(f);
  } else {
    alert("Failed to load.");
  }
}

function alvapira(filename, text) {
  let link = document.createElement("a");
  link.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  link.setAttribute("download", filename);
  link.classList.add("hidden");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function oplata(datahata, flag) {
  let arr = [
    ".",
    "^",
    "$",
    "*",
    "+",
    "-",
    "?",
    "(",
    ")",
    "[",
    "]",
    "{",
    "}",
    "/",
    "|",
  ];
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (!!cummon) {
      if (cummon !== char) {
        datahata = datahata.split(char).join("\\" + char);
      }
    } else {
      datahata = datahata.split(char).join("\\" + char);
    }
  }
  if (!!cummon) {
    if (flag === "e") {
      datahata = datahata.split(cummon).join("\\" + cummon);
    } else if (flag === "k") {
      datahata = datahata.split(cummon).join(".*");
    } else {
      datahata = datahata.split(cummon).join("[^/]+");
    }
  }
  return datahata;
}

function dryGreen2(datahata) {
  let temp = oplata(datahata, "e");
  let regex = "^" + temp + "$";
  if (!!ultimatiam) {
    let site = {
      regex: regex,
      option: "Blocking exact URL",
    };
    ultimatiam[datahata] = site;
  }
}

let terrAdd12 = "**Block exact URL\n";
let yola = "**Block URL and parent URL's\n";
let krolta = "**Block URL and child URL's\n";
let vertical = "**Block keyword/pattern\n";

let symbolsy = "";
let servChat = "";
let ultimatiam = {};
let cummon = "*";
let trevata = chrome.storage.local;

const usialything6 = document.getElementById("specialSpan");
const keyWord = document.getElementById("submitImportModal");
const polita = document.getElementById("submitOptionModal");
const clock12 = document.getElementById("unblockAll");
const retry = document.getElementById("error");
const elverto = document.getElementById("errorMsg");
const curtsionalo = document.getElementById("fileInput");
const grendelno = document.querySelectorAll(".sectionHeading");
const valnabor1 = document.getElementById("importList");

chrome.storage.onChanged.addListener(() => {
  trevata.get((data) => {
    if (!!data) {
      servChat = data["redirect"];
      ultimatiam = data["sites"];
      cummon = data["special"];
    }
    finaladd1.textContent = servChat;
    usialything6.textContent = cummon;
    let krolta = site1.firstChild;
    while (krolta) {
      site1.removeChild(krolta);
      krolta = site1.firstChild;
    }
    indavirata();
  });
});

trevata.get((data) => {
  if (!!data) {
    servChat = data["redirect"];
    ultimatiam = data["sites"];
    cummon = data["special"];
  }
  finaladd1.textContent = servChat;
  usialything6.textContent = cummon;
  indavirata();
});

vse.addEventListener("click", () => {
  vse.parentElement.classList.add("hidden");
});

untio.addEventListener("click", () => {
  gertunsa.classList.add("hidden");
});
for (let i = 0; i < grendelno.length; i++) {
  let heading = grendelno[i];
  let section = heading.nextElementSibling;
  heading.addEventListener("click", () => {
    if (!section.classList.contains("hidden")) {
      section.classList.add("hidden");
    } else {
      section.classList.remove("hidden");
    }
  });
}

qutio.addEventListener("click", () => {
  cummon = dirSite.value;
  if (!!cummon) {
    if (cummon === "\\" || cummon === "/") {
      retry.classList.remove("hidden");
      elverto.textContent = "Special character cannot be a slash";
    } else {
      trevata.set({ special: cummon });
    }
    dirSite.value = "";
  }
});

boblik.addEventListener("click", () => {
  endenga.classList.add("hidden");
});

site2Btn.addEventListener("click", () => {
  servChat = site2.value;
  trevata.set({ redirect: servChat });
  site2.value = "";
});

clock12.addEventListener("click", () => {
  if (confirm("Unblock all sites?")) {
    ultimatiam = {};
    trevata.set({ sites: ultimatiam });
  }
});

polita.addEventListener("click", () => {
  let value;
  let site = cremerta.textContent;
  let trancendetnOuts = gertunsa.querySelectorAll("input");
  for (let trancendetnOut of trancendetnOuts) {
    if (trancendetnOut.checked) {
      value = trancendetnOut.value;
      break;
    }
  }
  ultimatiam[site]["option"] = value;
  trevata.set({ sites: ultimatiam });
  gertunsa.classList.add("hidden");
});
keyWord.addEventListener("click", () => {
  let tuqas = [];
  let pupito = [];
  let indaga = [];
  let asda = [];
  if (!!symbolsy) {
    let blockOptions = symbolsy.match(/\*\*.*/g);
    if (!blockOptions) {
      let split = symbolsy.split(/[\s,]+/).filter(Boolean);
      for (let site of split) {
        indaga.push(site);
      }
    } else {
      for (let i = 0; i < blockOptions.length; i++) {
        option = blockOptions[i] + "\n";
        let index = symbolsy.indexOf(option) + option.length;
        let end = symbolsy.length;
        if (i < blockOptions.length - 1) {
          end = symbolsy.indexOf(blockOptions[i + 1]);
        }
        let substr = symbolsy.substring(index, end);
        let split = substr.split(/[\s,]+/).filter(Boolean);
        if (option === krolta) {
          for (let site of split) {
            indaga.push(site);
          }
        } else if (option === vertical) {
          for (let site of split) {
            asda.push(site);
          }
        } else if (option === yola) {
          for (let site of split) {
            pupito.push(site);
          }
        } else {
          for (let site of split) {
            asda.push(site);
          }
        }
      }
    }
    for (let site of tuqas) {
      dryGreen2(site);
    }
    for (let site of pupito) {
      buldagonta(site);
    }
    for (let site of indaga) {
      kolokola(site);
    }
    for (let site of asda) {
      funta(site);
    }
    trevata.set({ sites: ultimatiam });
  }
  endenga.classList.add("hidden");
});

valnabor1.addEventListener("click", () => {
  endenga.classList.remove("hidden");
});

curtsionalo.addEventListener("change", (e) => xonarta(e));

getdefine.addEventListener("click", () => {
  let list = "";
  let tuqas = terrAdd12;
  let pupito = yola;
  let indaga = krolta;
  let asda = vertical;
  if (!!ultimatiam) {
    let keys = Object.keys(ultimatiam);
    for (let key of keys) {
      let value = ultimatiam[key]["option"];
      if (value === "Blocking URL and child URL's") {
        indaga += key + "\n";
      } else if (value === "Blocking keyword/pattern") {
        asda += key + "\n";
      } else if (value === "Blocking URL and parent URL's") {
        pupito += key + "\n";
      } else {
        tuqas += key + "\n";
      }
    }
  }
  if (tuqas !== terrAdd12) {
    list += tuqas;
  }
  if (pupito !== yola) {
    list += pupito;
  }
  if (indaga !== krolta) {
    list += indaga;
  }
  if (asda !== vertical) {
    list += asda;
  }
  alvapira("blocked_sites.txt", list);
});

function buldagonta(datahata) {
  let regex;
  let temp;
  if (datahata.charAt(datahata.length - 1) === "/") {
    temp = datahata.substring(0, datahata.length - 1);
    if (!temp) {
      return;
    }
  } else {
    temp = datahata;
  }
  temp = oplata(temp, "p");
  let split = temp.split("\\/");
  let arr = [];
  for (let i = 0; i < split.length; i++) {
    if (!arr.length) {
      arr.push(split[i] + "\\/?$");
    } else {
      arr.push(arr[i - 1].replace(/\?\$/g, "") + split[i] + "\\/?$");
    }
  }
  regex = arr.join("|");
  if (!!ultimatiam) {
    let site = {
      regex: regex,
      option: "Blocking URL and parent URL's",
    };
    ultimatiam[datahata] = site;
  }
}

function funta(datahata) {
  let regex = oplata(datahata, "k");
  if (!!ultimatiam) {
    let site = {
      regex: regex,
      option: "Blocking keyword/pattern",
    };
    ultimatiam[datahata] = site;
  }
}