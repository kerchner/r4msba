<script>
document.addEventListener("DOMContentLoaded", function() {
  const toggleBtn = document.createElement("button");
  toggleBtn.id = "theme-toggle";
  toggleBtn.innerText = "🌙 Dark";
  document.body.appendChild(toggleBtn);

  // Load saved preference
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleBtn.innerText = "☀️ Light";
  } else {
    document.body.classList.add("light");
  }

  toggleBtn.addEventListener("click", function() {
    if (document.body.classList.contains("light")) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      toggleBtn.innerText = "☀️ Light";
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
      toggleBtn.innerText = "🌙 Dark";
    }
  });
});
</script>