let opacity = 1,
    background;

background = document.createElement("div");
background.style.width = "100%";
background.style.height = "100%";
background.style.backgroundColor = "#000";
background.style.zIndex = "9999";
background.style.position = "fixed";
background.style.top = "0";

document.body.appendChild(background);

window.onload = function() {
    let timerId = setInterval(function() {
        if (opacity <= 0) {
            clearInterval(timerId);
            background.style.display = "none";
        }
      opacity -= 0.01;
      background.style.opacity = opacity;
    }, 10);
};