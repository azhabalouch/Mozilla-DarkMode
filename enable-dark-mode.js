// Add the dark mode class to the root element
document.documentElement.classList.add("dark-mode");

// Optionally observe changes and apply dark mode to new elements
const observer = new MutationObserver(() => {
  document.documentElement.classList.add("dark-mode");
});
observer.observe(document.body, { childList: true, subtree: true });
