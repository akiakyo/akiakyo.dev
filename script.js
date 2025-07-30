// Typing effect
const phrases = ["aky", "a Minecraft Dev", "a Discord Bot Dev"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

const el = document.querySelector(".typing");

function loop() {
  el.textContent = currentPhrase.join("");

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }

  if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) {
    isDeleting = true;
    setTimeout(loop, 1500);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(loop, isDeleting ? 50 : 100);
}

loop();

// Theme toggle
const themeBtn = document.getElementById("toggle-theme");
themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
};

// Tabs
const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    tabs.forEach(b => b.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    btn.classList.add("active");
    const id = btn.getAttribute("data-tab");
    document.getElementById(id).classList.add("active");
  });
});
