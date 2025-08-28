<script>
document.addEventListener("DOMContentLoaded", function () {
  const sidebarSections = document.querySelectorAll(".sidebar-section");
  
  sidebarSections.forEach(section => {
    const details = section.querySelector("details");
    
    if (details) {
      const links = details.querySelectorAll("a");
      let isActive = false;
      
      links.forEach(link => {
        if (link.classList.contains("active")) {
          isActive = true;
        }
      });
      
      details.open = isActive;
    }
  });
});
</script>