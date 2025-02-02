
document.addEventListener("DOMContentLoaded", function () {
    const openMenu = document.querySelector(".open-menu");
    const closeMenu = document.querySelector(".close-menu");
    const navLinks = document.querySelector(".nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    openMenu.addEventListener("click", function () {
        navLinks.style.display = "block";
        openMenu.style.display = "none";
        closeMenu.style.display = "block";
    });

    closeMenu.addEventListener("click", function () {
        navLinks.style.display = "none";
        openMenu.style.display = "block";
        closeMenu.style.display = "none";
    });

    navItems.forEach(item => {
        item.addEventListener("click", function () {
            navLinks.style.display = "none";
            openMenu.style.display = "block";
            closeMenu.style.display = "none";
        });
    });

    // Hide close button initially
    closeMenu.style.display = "none";
});