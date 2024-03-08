let string = "";
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((item) => {
  item.addEventListener('click', (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector(".inp").value = string;

    }
    else if (e.target.innerHTML == "AC") {
      string = "";
      document.querySelector(".inp").value = string;

    }
    else {

      string = string + e.target.innerHTML;
      document.querySelector(".inp").value = string;

    }
  })
})


