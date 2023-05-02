function navigateToNextPage() {
  document.querySelector(".ch-next-btn").click();
}

function navigateToPrevPage() {
  document.querySelector(".ch-prev-btn").click();
}

chrome.commands.onCommand.addListener(function (command, tab) {
  if (command === "clickNextButton") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: navigateToNextPage,
    });
  }
  if (command === "clickPrevButton") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: navigateToPrevPage,
    });
  }
});
