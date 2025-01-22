const darkBtn = document.querySelector(".dark");
const lightBtn = document.querySelector(".light");

darkBtn.addEventListener("click" , () => {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
});

lightBtn.addEventListener("click" , () =>{
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
})