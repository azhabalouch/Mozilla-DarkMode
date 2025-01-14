function applyDarkMode() {
    document.documentElement.classList.add('dark-mode');
  }
  
  // Apply dark mode initially
  applyDarkMode();
  
  // Watch for new elements and apply dark mode
  const observer = new MutationObserver(() => applyDarkMode());
  observer.observe(document.body, { childList: true, subtree: true });
  