let img = document.querySelector(".variants").getElementsByTagName("img");
for (key of img) {
  key.addEventListener("click", function (event) {
    let target = event.target;
    document.querySelector(".presentation__watch").src = target.src;

    let bg = document.querySelector(".page");

    console.log(target.parentNode.parentNode.style.background);

    bg.style.background = target.parentNode.parentNode.style.background;
  });
}

// function changeBackgroung(color) {
//   const bg = document.querySelector(".page");
//   bg.style.background = color;
// }