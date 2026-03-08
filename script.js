document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");

    if (!toggle) return;

    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      dropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove("open");
        }
      });

      dropdown.classList.toggle("open");
    });
  });

  document.addEventListener("click", (e) => {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  });
});