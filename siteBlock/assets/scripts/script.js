chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    const over = document.getElementById(`overlay_${chrome.runtime.id}`);
    if (request.action == "show_overlay") {
      if (over) {
        over.style.display = "block";

      }
    } else if (request.action == "hidden_overlay") {
      if (over) {
        // over.style.display = "none";

        var keyboardEvent = document.createEvent("KeyboardEvent");
        var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

        keyboardEvent[initMethod](
          "w", // event type: keydown, keyup, keypress
          true,     // ctrlKey
          false,     // altKey
          false,     // shiftKey
          false,     // metaKey
        );
        document.dispatchEvent(keyboardEvent);
        
      }
    }
  });
  
  const overlay = `<div id='overlay_${chrome.runtime.id}' style="position: fixed; width: 100%; height: 100%; top: 0; display: none; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); z-index: 9999999; cursor: pointer; " onclick="this.style.display='none'"></div>`;
  
  document.body.insertAdjacentHTML("beforeend", overlay);
  