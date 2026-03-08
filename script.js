document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");

    if (!toggle) return;

    toggle.addEventListener("click", toggleDropdown);
    toggle.addEventListener("touchstart", toggleDropdown);

    function toggleDropdown(e) {
      e.preventDefault();
      e.stopPropagation();

      const isOpen = dropdown.classList.contains("open");

      dropdowns.forEach(d => d.classList.remove("open"));

      if (!isOpen) {
        dropdown.classList.add("open");
      }
    }
  });

  document.addEventListener("click", closeAll);
  document.addEventListener("touchstart", closeAll);

  function closeAll(e) {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  }
});