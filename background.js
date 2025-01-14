let darkModeEnabled = false;

browser.browserAction.onClicked.addListener((tab) => {
  darkModeEnabled = !darkModeEnabled;

  if (darkModeEnabled) {
    browser.tabs.executeScript(tab.id, { file: "enable-dark-mode.js" });
  } else {
    browser.tabs.executeScript(tab.id, { file: "disable-dark-mode.js" });
  }
});
