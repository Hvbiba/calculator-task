// get the label and button text
let label=document.querySelector('label');
let numbers = document.querySelectorAll(".numbers");
numbers.forEach(number => {
   number.addEventListener('click', () => {
      const buttonText = number.textContent;
      if (label.textContent === "0") {
         label.textContent = buttonText;
      } else {
         label.textContent += buttonText;
      }
   });
});

// reset action
let resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
   label.textContent = "0";
});

// del action
let delBtn = document.querySelector('#del');
delBtn.addEventListener('click', () => {
   label.textContent = label.textContent.slice(0, -1);
});

// equal action
let equalBtn = document.querySelector('#equal');
equalBtn.addEventListener('click', () => {
   label.textContent = eval(label.textContent);
});
