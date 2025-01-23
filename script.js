 document.addEventListener("DOMContentLoaded", function(){
    const darkBtn = document.querySelector(".dark");
    const lightBtn = document.querySelector(".light");
    const display = document.querySelector("#display");
    const buttons = document.querySelectorAll("#buttons button");


    // darkmode theme activated
    darkBtn.addEventListener("click" , () => {
        document.documentElement.classList.remove("light");
        document.documentElement.classList.add("dark");
    });
    
    //lightmode theme activated
    lightBtn.addEventListener("click" , () =>{
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.add("light");
    });

    //button functionality
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            if (buttonText === "CLR"){
                display.value = "";
            }
             else if (buttonText === "DEL"){
                display.value = display.value.slice(0, -1);
            }
            else if (buttonText === "="){
                try {
                    display.value = eval(display.value); 
                }
                catch (e) {
                    display.value = "error";
                }
            }
            else {
                display.value += buttonText;
            }
        });
    });
 });
   

