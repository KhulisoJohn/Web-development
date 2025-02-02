
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

document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "https://mapeni.sirv.com/Images/assets/IMG6.webp",
      "https://mapeni.sirv.com/Images/assets/bg2.jpg",
      "https://mapeni.sirv.com/Images/assets/bg3.png",
      "https://mapeni.sirv.com/Images/assets/bg4.jpg"
    ];
    
    let currentIndex = 0;
    const homeSection = document.getElementById("home");
  
    function changeBackground() {
      homeSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${images[currentIndex]}')`;
      currentIndex = (currentIndex + 1) % images.length;
    }
  
    // Change background every 5 seconds
    setInterval(changeBackground, 5000);
  });
  