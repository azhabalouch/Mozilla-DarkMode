// Listen for messages from background.js to toggle dark mode
browser.runtime.onMessage.addListener((message) => {
    if (message.darkModeEnabled) {
      // Apply dark mode if enabled
      document.documentElement.classList.add("dark-mode");
    } else {
      // Remove dark mode if disabled
      document.documentElement.classList.remove("dark-mode");
    }
  });
  
  // Ensure dark mode is applied based on saved state when the page is loaded
  browser.storage.local.get("darkModeEnabled").then((result) => {
    if (result.darkModeEnabled) {
      document.documentElement.classList.add("dark-mode");
    }
  });
  