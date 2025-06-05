// Toggle dark mode on click
document.querySelector(".darkmode").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const modeText = document.getElementById("mode-toggle");
  modeText.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});



document.querySelector(".h2").addEventListener("click", () => {
 location.reload();
});


document.querySelector(".h2").addEventListener("click", () => {

    setTimeout(() => {
    location.reload();
  }, 500);
});

