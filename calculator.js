 const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";
    let resetNext = false;

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.textContent;

        if (button.classList.contains("clear")) {
          currentInput = "";
          display.textContent = "0";
        } else if (value === "=") {
          try {
            currentInput = eval(currentInput).toString();
            display.textContent = currentInput;
          } catch {
            display.textContent = "Error";
            currentInput = "";
          }
        } else {
          if (display.textContent === "0" || resetNext) {
            currentInput = "";
            resetNext = false;
          }
          currentInput += value;
          display.textContent = currentInput;
        }
      });
    });