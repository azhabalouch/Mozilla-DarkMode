let darkModeEnabled = false;

// Restore dark mode state from storage on startup
browser.storage.local.get("darkModeEnabled").then((result) => {
  if (result.darkModeEnabled !== undefined) {
    darkModeEnabled = result.darkModeEnabled;
  }
});

// Toggle dark mode on browser action click
browser.browserAction.onClicked.addListener(async (tab) => {
  // Toggle the dark mode state
  darkModeEnabled = !darkModeEnabled;

  // Save the new state in storage
  await browser.storage.local.set({ darkModeEnabled });

  // Send a message to the content script to apply or remove dark mode
  browser.tabs.sendMessage(tab.id, { darkModeEnabled });
});

// Add a listener for tab updates (e.g., refreshes)
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (darkModeEnabled && changeInfo.status === "complete") {
    // Reapply dark mode if the current tab has been refreshed
    browser.tabs.sendMessage(tabId, { darkModeEnabled });
  }
});
