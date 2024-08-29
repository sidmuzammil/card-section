document.addEventListener("DOMContentLoaded", function() {
    const toggleButtons = document.querySelectorAll("p.toggle-more");
  
    toggleButtons.forEach(function(button) {
      button.addEventListener("click", function() {
        const submenu = this.previousElementSibling; // Find the previous sibling, which is the .submenu
  
        submenu.classList.toggle("expanded");
        if (submenu.classList.contains("expanded")) {
          this.textContent = "Show less";
        } else {
          this.textContent = "Show more";
        }
      });
    });
  });
  