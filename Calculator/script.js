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





    function calculate() {
        const a = parseFloat(document.getElementById('a').value);
        const b = parseFloat(document.getElementById('b').value);
        const c = parseFloat(document.getElementById('c').value);
        const d = parseFloat(document.getElementById('d').value);
        const action = document.getElementById('action').value;
        const resultBox = document.getElementById('result');

        let result = '';

        switch (action) {
            case 'solveLinear':
                if (a !== 0) {
                    result = `Solution for linear equation: x = ${-c / a}`;
                } else {
                    result = 'Coefficient a cannot be zero for a linear equation.';
                }
                break;
            case 'solveQuadratic':
                const discriminant = b ** 2 - 4 * a * c;
                if (discriminant > 0) {
                    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                    result = `Roots of the quadratic equation: x₁ = ${root1}, x₂ = ${root2}`;
                } else if (discriminant === 0) {
                    const root = -b / (2 * a);
                    result = `The quadratic equation has one root: x = ${root}`;
                } else {
                    result = 'The quadratic equation has no real roots.';
                }
                break;
            case 'solveCubic':
                result = 'Cubic equation solving is under construction.';
                break;
            case 'solveXYLinear':
                result = 'Solving linear equations for x and y is under construction.';
                break;
            case 'solveXYQuadLinear':
                result = 'Solving quadratic and linear equations for x and y is under construction.';
                break;
            case 'factorize':
                if (a !== 0) {
                    const factorizedForm = `Factorized form: ${a}(x² + ${b / a}x + ${c / a})`;
                    result = factorizedForm;
                } else {
                    result = 'Coefficient a cannot be zero for factorization.';
                }
                break;
            default:
                result = 'Invalid action selected.';
        }

        resultBox.innerHTML = `<strong>Result:</strong> ${result}`;
    }
 });
   
