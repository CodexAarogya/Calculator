document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("input");
    const buttons = document.querySelectorAll(".btn button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonText = this.innerText;

            if (buttonText === "AC") {
                inputField.value = "";
            } else if (buttonText === "DEL") {
                inputField.value = inputField.value.slice(0, -1);
            } else if (buttonText === "=") {
                try {
                    inputField.value = eval(inputField.value);
                } catch (error) {
                    inputField.value = "Error";
                }
            } else {
                inputField.value += buttonText;
            }
        });
    });
});
