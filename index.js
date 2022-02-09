const btn = document.querySelectorAll(".btn");
const operation = document.querySelector(".operation");
const result = document.querySelector(".result");
const evaluate = document.querySelector(".evaluate");
const cancel = document.querySelector(".cancel");

evaluate.addEventListener("click", function () {
  result.value = eval(operation.value);
});

btn.forEach((item) => {
  item.addEventListener("click", function (e) {
    btnText = e.target.innerText;
    if (btnText == "+/-") btnText = "-";
    operation.value += btnText;
    if (btnText == "AC") {
      operation.value = "";
      result.value = "0";
    }
  });
});

function backspace() {
  operation.value = operation.value.substr(0, operation.value.length - 2);
}

cancel.addEventListener("click", () => {
  backspace();
});
