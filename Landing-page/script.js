document.addEventListener("DOMContentLoaded", () => {
    const openMenu = document.querySelector('.open-menu');
    const closeMenu = document.querySelector('.close-menu');
    const nav = document.querySelector('.nav-links');

    openMenu.addEventListener('click', () => {
        nav.style.display= 'block';
        openMenu.style.display= 'none' ;
       
        
    });

    closeMenu.addEventListener('click', () => {
        nav.classList.remove('.nav-links');
        openMenu.style.display = 'block';
       
    });
});
