  document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display input");
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonValue = button.textContent;

      if (buttonValue === "C") {
        display.value = "";
      } else if (buttonValue === "←") {
        display.value = display.value.slice(0, -1);
      } else if (buttonValue === "=") {
        try {
          display.value = eval(display.value.replace("÷", "/"));
        } catch (e) {
          display.value = "Error";
        }
      } else {
        if (display.value === "Error") {
          display.value = "";
        }
        display.value += buttonValue;
      }
    });
  });
});
