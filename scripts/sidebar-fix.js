<script>
document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");

  // Collapse all sections
  sidebar?.querySelectorAll("ul.collapse").forEach((section) => {
    section.classList.remove("show");
  });

  // Get the saved section ID from localStorage
  const savedSectionId = localStorage.getItem("activeSidebarSection");

  if (savedSectionId) {
    const sectionToShow = document.getElementById(savedSectionId);
    if (sectionToShow) {
      sectionToShow.classList.add("show");

      // Optional: update toggle icon state
      const toggle = sidebar.querySelector(`[data-bs-target="#${savedSectionId}"]`);
      if (toggle) {
        toggle.setAttribute("aria-expanded", "true");
      }
    }
  }

  // Add click listeners to sidebar links to save the section ID
  sidebar?.querySelectorAll("a.sidebar-link").forEach((link) => {
    link.addEventListener("click", function () {
      const parentSection = link.closest("ul.collapse");
      if (parentSection && parentSection.id) {
        localStorage.setItem("activeSidebarSection", parentSection.id);
      } else {
        localStorage.removeItem("activeSidebarSection");
      }
    });
  });
});
</script>
