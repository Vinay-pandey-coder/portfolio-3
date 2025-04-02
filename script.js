let text = document.getElementById("scroll-text");
let container = document.getElementById("scroll-container");

function scrollText() {
    let pos = text.offsetTop;
    let containerHeight = container.clientHeight;

    if (pos + text.clientHeight < 0) {
        text.style.top = containerHeight + "px"; // Reset position
    } else {
        text.style.top = pos - 1 + "px"; // Move text upwards
    }

    requestAnimationFrame(scrollText);
}

scrollText();