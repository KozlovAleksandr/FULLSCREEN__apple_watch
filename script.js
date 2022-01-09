let img = document.querySelector(".variants").getElementsByTagName("img"),
  presentationIcon = document.querySelector(".presentation__watch"),
  bg = document.querySelector(".page"),
  shadow = document.querySelector(".shadow"),
  burger = document.querySelector(".burger__icon"),
  socialIcons = document.getElementsByClassName("social__icon"),
  switches = document.querySelector(".switch").children;

for (key of img) {
  key.addEventListener("click", function (event) {
    let target = event.target;
    changePresentationImage(target);
    changeBackgroungColor(target);
    changeShadowColor(target);
    changeIconsColor(target);
    changeSwitcher(target);
  });
}

for (key of switches) {
  key.addEventListener("click", function (event) {
    let target = event.target;
    changePresentationImage(target);
    changeBackgroungColor(target);
    changeShadowColor(target);
    changeIconsColor(target);
    changeSwitcher(target);
  });
}

function changePresentationImage(target) {
  switch (true) {
    case (target.className == "mainGreen" && target.src !== "undefined"):
      presentationIcon.src = "img/01.svg";
      break;
    case (target.className == "mainBeige" && target.src !== "undefined"):
      presentationIcon.src = "img/02.svg";
      break;
    case (target.className == "mainRed" && target.src !== "undefined"):
      presentationIcon.src = "img/03.svg";
      break;
    case (target.className == "mainBlue" && target.src !== "undefined"):
      presentationIcon.src = "img/04.svg";
      break;
  }
}

function changeBackgroungColor(target) {
  bg.classList.forEach((element) => {
    if (element !== "page") {
      bg.classList.remove(element);
    }
  });
  target.classList.forEach((element) => {
    if (element !== "big") {
      bg.classList.add(element);
    }
  });
}

function changeShadowColor(target) {
  shadow.classList.forEach((element) => {
    if (element !== "shadow") {
      shadow.classList.remove(element);
    }
  });

  target.classList.forEach((element) => {
    if (element !== "big") {
      shadow.classList.add(element);
    }
  });
}

function changeIconsColor(target) {
  burger.classList.forEach((element) => {
    if (element !== "burger__icon") {
      burger.classList.remove(element);
    }
  });

  target.classList.forEach((element) => {
    if (element !== "big") {
      burger.classList.add(element);
    }
  });

  for (key of socialIcons) {
    key.classList.forEach((element) => {
      if (element !== "social__icon") {
        key.classList.remove(element);
      }
    });

    target.classList.forEach((element) => {
      if (element !== "big") {
        key.classList.add(element);
      }
    });
  }
}

function changeSwitcher(target) {
  for (key of switches) {
    key.classList.remove("big");
    key.classList.forEach((element) => {
      if (element == target.className) {
        key.classList.add("big");
      }
    });
  }
}