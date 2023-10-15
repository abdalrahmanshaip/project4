let whenClick = document.querySelectorAll(".our-work ul li");
whenClick.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".our-work ul li.active").classList.remove("active");
    el.classList.add("active");
  });
});

document.getElementById("submit").onsubmit = function () {
  let email = document.getElementById("email").value;
  let emailre = /([a-zA-Z0-9])@gmail.com/gi;
  let match = emailre.test(email);
  if (match === false) {
    swal({
      title: "Email!",
      text: "not crroct value!",
      icon: "error",
    });
  } else {
    return true;
  }
};
let buttonToUp = document.querySelector(".button-to-up");

if (window.scroll = 20) {
  buttonToUp.classList.add("active")
  buttonToUp.addEventListener("click", function () {
    window.scrollTo(0, 0)
  })
}