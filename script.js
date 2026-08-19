const checkbox = document.getElementById("check");
const sidebar = document.querySelector(".sidebar_menu");
const menuLinks = document.querySelectorAll(".menu li a");

document.addEventListener("click", function (event) {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnToggleBtn = event.target.closest(".btn_one");
  const isClickOnCheckbox = event.target === checkbox;

  if (!isClickInsideSidebar && !isClickOnToggleBtn && !isClickOnCheckbox && checkbox.checked) {
    checkbox.checked = false;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && checkbox.checked) {
    checkbox.checked = false;
  }
});

menuLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    document.querySelectorAll(".menu li").forEach((li) => {
      li.classList.remove("active-link");
    });
    this.parentElement.classList.add("active-link");
  });
});