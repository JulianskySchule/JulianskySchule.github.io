function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const toggleButton = document.getElementById("darkmode-toggle");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "🌙";
  } else {
    toggleButton.textContent = "🌞";
  }
}
