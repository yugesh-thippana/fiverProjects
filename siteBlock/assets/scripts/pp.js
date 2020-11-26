function buldagonta(string) {
  let regex;
  let temp;
  if (string.charAt(string.length - 1) === "/") {
    temp = string.substring(0, string.length - 1);
    if (!temp) {
      elverto.textContent =
        "The '/' character (front slash) must have adjacent text";
      retry.classList.remove("hidden");
      return;
    }
  } else {
    temp = string;
  }
  temp = oplata(temp, "p");
  let split = temp.split("\\/");
  let arr = [];
  for (let some_index_here = 0; some_index_here < split.length; some_index_here++) {
    if (!arr.length) {
      arr.push(split[some_index_here] + "\\/?$");
    } else {
      arr.push(arr[some_index_here - 1].replace(/\?\$/g, "") + split[some_index_here] + "\\/?$");
    }
  }
  regex = arr.join("|");
  let trimmedString = string;
  if (string.length > 30) {
    trimmedString = string.substring(0, 30) + "...";
  }
  oprionSourcesMsg.textContent = "Blocked " + trimmedString;
  oprionSources.classList.remove("hidden");
  dryGreen5(string, regex);
}

let passiveinfo5 = document.getElementById("childEx");
let passivesfv6 = document.getElementById("childInfo");
let passivessett = "child";
let currpassdata = "Blocking URL and child URL's";
function dryGreen2(string) {
  let temp = oplata(string, "e");
  let regex = "^" + temp + "$";
  let trimmedString = string;
  if (string.length > 30) {
    trimmedString = string.substring(0, 30) + "...";
  }
  oprionSourcesMsg.textContent = "Blocked " + trimmedString;
  oprionSources.classList.remove("hidden");
  dryGreen5(string, regex);
}
let linediv7 = document.getElementById("blockBtn");
let vses = document.querySelectorAll(".closeBtn");
let retry = document.getElementById("error");
let placeForGo = {};
let cummon = "*";
let trevata = chrome.storage.local;

let elverto = document.getElementById("errorMsg");
let unicImportantdiv = document.querySelectorAll(".exampleBtn");
let userSuffering = document.getElementById("help");
let userSufferingDeterm4 = document.getElementById("hideHelp");
let trancendetnOut = document.getElementById("siteInput");
function kolokola(string) {
  let bool = false;
  let regex;
  let temp;
  if (string.charAt(string.length - 1) === "/") {
    temp = string.substring(0, string.length - 1);
    if (!temp) {
      elverto.textContent =
        "The '/' character (front slash) must have adjacent text";
      retry.classList.remove("hidden");
      return;
    }
    bool = true;
  } else {
    temp = string;
  }
  temp = oplata(temp, "c");
  if (bool) {
    regex = temp + "$|" + temp + "\\/+.*";
  } else {
    regex = temp + "\\/?.*";
  }
  let trimmedString = string;
  if (string.length > 30) {
    trimmedString = string.substring(0, 30) + "...";
  }
  oprionSourcesMsg.textContent = "Blocked " + trimmedString;
  oprionSources.classList.remove("hidden");
  dryGreen5(string, regex);
}

function funta(string) {
  let regex = oplata(string, "k");
  let trimmedString = string;
  if (string.length > 30) {
    trimmedString = string.substring(0, 30) + "...";
  }
  oprionSourcesMsg.textContent = "Blocked " + trimmedString;
  oprionSources.classList.remove("hidden");
  dryGreen5(string, regex);
}
function dryGreen5(string, regex) {
  if (!!placeForGo) {
    let site = {
      regex: regex,
      option: currpassdata,
    };
    placeForGo[string] = site;
    trevata.set({ sites: placeForGo });
  }
}
let thingthatclicks2 = document.querySelectorAll(".optionBtn");
let hidrSufferUser = document.getElementById("showHelp");
let usialything6s = document.querySelectorAll(".special");
let oprionSources = document.getElementById("success");
function oplata(string, flag) {
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
  for (let some_index_here = 0; some_index_here < arr.length; some_index_here++) {
    let char = arr[some_index_here];
    if (!!cummon) {
      if (cummon !== char) {
        string = string.split(char).join("\\" + char);
      }
    } else {
      string = string.split(char).join("\\" + char);
    }
  }
  if (!!cummon) {
    if (flag === "e") {
      string = string.split(cummon).join("\\" + cummon);
    } else if (flag === "k") {
      string = string.split(cummon).join(".*");
    } else {
      string = string.split(cummon).join("[^/]+");
    }
  }
  return string;
}

let oprionSourcesMsg = document.getElementById("successMsg");
let useCurrentBtn = document.getElementById("useCurrentBtn");

trevata.get((data) => {
  placeForGo = data["sites"];
  cummon = data["special"];
  for (let some_index_here = 0; some_index_here < usialything6s.length; some_index_here++) {
    usialything6s[some_index_here].textContent = cummon;
  }
});

for (let some_index_here = 0; some_index_here < vses.length; some_index_here++) {
  let btn = vses[some_index_here];
  btn.addEventListener("click", () => {
    btn.parentElement.classList.add("hidden");
  });
}

for (let some_index_here = 0; some_index_here < thingthatclicks2.length; some_index_here++) {
  let btn = thingthatclicks2[some_index_here];
  btn.addEventListener("click", () => {
    let id = btn.id;
    let tempInfo = document.getElementById(id + "Info");
    let tempEx = document.getElementById(id + "Ex");
    if (tempInfo !== passivesfv6) {
      tempInfo.classList.remove("hidden");
      passivesfv6.classList.add("hidden");
      passivesfv6 = tempInfo;
    }
    if (tempEx !== passiveinfo5) {
      tempEx.classList.remove("hidden");
      passiveinfo5.classList.add("hidden");
      passiveinfo5 = tempEx;
    }
    passivessett = id;
    currpassdata = btn.value;
  });
}
hidrSufferUser.addEventListener("click", () => {
  userSuffering.classList.remove("hidden");
  hidrSufferUser.classList.add("hidden");
  userSufferingDeterm4.classList.remove("hidden");
});

for (let some_index_here = 0; some_index_here < unicImportantdiv.length; some_index_here++) {
  let btn = unicImportantdiv[some_index_here];
  btn.addEventListener("click", () => {
    let example = btn.nextElementSibling;
    if (example.classList.contains("hidden")) {
      example.classList.remove("hidden");
      btn.firstChild.textContent = "Hide";
    } else {
      example.classList.add("hidden");
      btn.firstChild.textContent = "Show";
    }
  });
}

chrome.runtime.sendMessage({ message: "open_popup" });

hidrSufferUser.addEventListener("click", () => {
  userSuffering.classList.remove("hidden");
  hidrSufferUser.classList.add("hidden");
  userSufferingDeterm4.classList.remove("hidden");
});






linediv7.addEventListener("click", () => {
  let stop = document.querySelector(".stopp");
  stop.style.visibility = "visible";
  let truth = true;
  let truth2 = true;
  let timerNode = document.querySelector(".timer");
  let seconds = 1;
  
//   let myVar = setInterval(myTimer, 1000);

// function myTimer() {
//   var d = new Date();
//   var t = d.toLocaleTimeString();
//   document.getElementById("demo").innerHTML = t;
// }

// function myStopFunction() {
//   clearInterval(myVar);
// }

  
  
  stop.addEventListener("click",()=>{
    stop.style.visibility = "hidden";
    truth2 = false;
    truth = false;
    timerNode.innerHTML = "";
  });
  // setInterval(()=>{
  //   if(!truth){
  //     stop.innerHTML = "" ;
  //     timerNode.innerHTML = "";
  //     return;
  //   }  
  // }, 100)

  timerNode.innerHTML = seconds;
  setInterval(() => {
    if(truth){
      seconds+= 1;
      timerNode.innerHTML = seconds;
      if(seconds == 6){
        timerNode.innerHTML = "";
        truth = false;
        seconds = 1;
        stop.click();
        truth2 = true;
      }
    }
    else
    truth = false;
    
  }, 1000);


  setTimeout(()=>{
    if(truth == false && truth2 == false)
      return;
    let site = trancendetnOut.value;
    if (!!site) {
      if (site.indexOf("\\") !== -1) {
        elverto.textContent = "The '\\' character (backslash) is not allowed";
        retry.classList.remove("hidden");
      } else {
        const funcs = {
          exact: dryGreen2,
          child: kolokola,
          keyword: funta,
          parent: buldagonta,
        };
        funcs[passivessett](site);
        let temp = site;
        if (temp.length > 30) {
          temp = site.substring(0, 30) + "...";
        }
      }
      trancendetnOut.value = "";
    }
  }, 5000)
  
});
userSufferingDeterm4.addEventListener("click", () => {
  userSuffering.classList.add("hidden");
  userSufferingDeterm4.classList.add("hidden");
  hidrSufferUser.classList.remove("hidden");
});
useCurrentBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url;

    trancendetnOut.value = url;
    linediv7.click();
  });
});






for (let some_index_here = 0; some_index_here < vses.length; some_index_here++) {
  let btn = vses[some_index_here];
  btn.addEventListener("click", () => {
    btn.parentElement.classList.add("hidden");
  });
}
userSufferingDeterm4.addEventListener("click", () => {
  userSuffering.classList.add("hidden");
  userSufferingDeterm4.classList.add("hidden");
  hidrSufferUser.classList.remove("hidden");
});


for (let some_index_here = 0; some_index_here < thingthatclicks2.length; some_index_here++) {
  let btn = thingthatclicks2[some_index_here];
  btn.addEventListener("click", () => {
    let id = btn.id;
    let tempInfo = document.getElementById(id + "Info");
    let tempEx = document.getElementById(id + "Ex");
    if (tempInfo !== passivesfv6) {
      tempInfo.classList.remove("hidden");
      passivesfv6.classList.add("hidden");
      passivesfv6 = tempInfo;
    }
    if (tempEx !== passiveinfo5) {
      tempEx.classList.remove("hidden");
      passiveinfo5.classList.add("hidden");
      passiveinfo5 = tempEx;
    }
    passivessett = id;
    currpassdata = btn.value;
  });
}
for (let some_index_here = 0; some_index_here < unicImportantdiv.length; some_index_here++) {
  let btn = unicImportantdiv[some_index_here];
  btn.addEventListener("click", () => {
    let example = btn.nextElementSibling;
    if (example.classList.contains("hidden")) {
      example.classList.remove("hidden");
      btn.firstChild.textContent = "Hide";
    } else {
      example.classList.add("hidden");
      btn.firstChild.textContent = "Show";
    }
  });
}