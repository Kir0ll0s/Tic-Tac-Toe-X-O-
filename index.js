let sq1 = document.getElementById("sq-1");
let sq2 = document.getElementById("sq-2");
let sq3 = document.getElementById("sq-3");
let sq4 = document.getElementById("sq-4");
let sq5 = document.getElementById("sq-5");
let sq6 = document.getElementById("sq-6");
let sq7 = document.getElementById("sq-7");
let sq8 = document.getElementById("sq-8");
let sq9 = document.getElementById("sq-9");
let x = "X";
let span = document.querySelector("span");
let dis = document.querySelector(".win");

function remove() {
  dis.classList.remove("none");
}
function success() {
  if (
    sq1.innerHTML === sq2.innerHTML &&
    sq2.innerHTML === sq3.innerHTML &&
    sq1.innerHTML != "" &&
    sq2.innerHTML != "" &&
    sq3.innerHTML != ""
  ) {
    sq1.style.backgroundColor = "green";
    sq2.style.backgroundColor = "green";
    sq3.style.backgroundColor = "green";
    remove();
  } else if (
    sq4.innerHTML === sq5.innerHTML &&
    sq5.innerHTML === sq6.innerHTML &&
    sq4.innerHTML != "" &&
    sq5.innerHTML != "" &&
    sq6.innerHTML != ""
  ) {
    sq4.style.backgroundColor = "green";
    sq5.style.backgroundColor = "green";
    sq6.style.backgroundColor = "green";
    remove();
  } else if (
    sq7.innerHTML === sq8.innerHTML &&
    sq8.innerHTML === sq9.innerHTML &&
    sq7.innerHTML != "" &&
    sq8.innerHTML != "" &&
    sq9.innerHTML != ""
  ) {
    sq7.style.backgroundColor = "green";
    sq8.style.backgroundColor = "green";
    sq9.style.backgroundColor = "green";
    remove();
  }
  if (
    sq1.innerHTML === sq4.innerHTML &&
    sq4.innerHTML === sq7.innerHTML &&
    sq1.innerHTML != "" &&
    sq4.innerHTML != "" &&
    sq7.innerHTML != ""
  ) {
    sq1.style.backgroundColor = "green";
    sq4.style.backgroundColor = "green";
    sq7.style.backgroundColor = "green";
    remove();
  }
  if (
    sq2.innerHTML === sq5.innerHTML &&
    sq5.innerHTML === sq8.innerHTML &&
    sq2.innerHTML != "" &&
    sq5.innerHTML != "" &&
    sq8.innerHTML != ""
  ) {
    sq2.style.backgroundColor = "green";
    sq5.style.backgroundColor = "green";
    sq8.style.backgroundColor = "green";
    remove();
  }
  if (
    sq3.innerHTML === sq6.innerHTML &&
    sq6.innerHTML === sq9.innerHTML &&
    sq3.innerHTML != "" &&
    sq6.innerHTML != "" &&
    sq9.innerHTML != ""
  ) {
    sq3.style.backgroundColor = "green";
    sq6.style.backgroundColor = "green";
    sq9.style.backgroundColor = "green";
    remove();
  } else if (
    sq1.innerHTML === sq5.innerHTML &&
    sq5.innerHTML === sq9.innerHTML &&
    sq1.innerHTML != "" &&
    sq5.innerHTML != "" &&
    sq9.innerHTML != ""
  ) {
    sq1.style.backgroundColor = "green";
    sq5.style.backgroundColor = "green";
    sq9.style.backgroundColor = "green";
    remove();
  } else if (
    sq3.innerHTML === sq5.innerHTML &&
    sq5.innerHTML === sq7.innerHTML &&
    sq3.innerHTML != "" &&
    sq5.innerHTML != "" &&
    sq7.innerHTML != ""
  ) {
    sq3.style.backgroundColor = "green";
    sq5.style.backgroundColor = "green";
    sq7.style.backgroundColor = "green";
    remove();
  }
}

function play(id) {
  let z = document.getElementById(id);
  if (x === "X" && z.innerHTML == "") {
    z.innerHTML = x;
    span.innerHTML = "Next is O";
    x = "O";
  } else if (x === "O" && z.innerHTML == "") {
    z.innerHTML = x;
    span.innerHTML = "Next is X";
    x = "X";
  }
  success();
  disbtn();
}
let btn = document.querySelector("button");
function disbtn() {
  if (
    sq1.innerHTML !== "" &&
    sq2.innerHTML !== "" &&
    sq3.innerHTML !== "" &&
    sq4.innerHTML !== "" &&
    sq5.innerHTML !== "" &&
    sq6.innerHTML !== "" &&
    sq7.innerHTML !== "" &&
    sq8.innerHTML !== "" &&
    sq9.innerHTML !== ""
  ) {
    btn.classList.remove("none");
  }
}
btn.addEventListener("click", () => {
  sq1.innerHTML = "";
  sq2.innerHTML = "";
  sq3.innerHTML = "";
  sq4.innerHTML = "";
  sq5.innerHTML = "";
  sq6.innerHTML = "";
  sq7.innerHTML = "";
  sq8.innerHTML = "";
  sq9.innerHTML = "";
  dis.classList.add("none");
  sq1.style.backgroundColor = "black";
  sq2.style.backgroundColor = "black";
  sq3.style.backgroundColor = "black";
  sq4.style.backgroundColor = "black";
  sq5.style.backgroundColor = "black";
  sq6.style.backgroundColor = "black";
  sq7.style.backgroundColor = "black";
  sq8.style.backgroundColor = "black";
  sq9.style.backgroundColor = "black";
});
