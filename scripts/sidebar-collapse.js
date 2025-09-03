<script>
document.addEventListener("DOMContentLoaded", function () {
  const sidebarSections = document.querySelectorAll(".sidebar-item-section");

  sidebarSections.forEach((section, index) => {
    const toggle = section.querySelector(".sidebar-item-toggle");
    const content = section.querySelector("ul");

    if (toggle && content) {
      // Generate a unique ID for the collapsible content
      const id = `sidebar-section-${index}`;
      content.id = id;

      // Link the toggle to the collapsible content
      toggle.setAttribute("data-bs-target", `#${id}`);
      toggle.setAttribute("aria-controls", id);

      // Optional: collapse all sections by default
      content.classList.remove("show");
      toggle.setAttribute("aria-expanded", "false");

      // Add click handler to toggle visibility
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        const isOpen = content.classList.contains("show");
        content.classList.toggle("show", !isOpen);
        toggle.setAttribute("aria-expanded", String(!isOpen));
      });
    }
  });
});
</script>