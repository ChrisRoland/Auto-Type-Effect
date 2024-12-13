const textElemet = document.getElementById("text");
const speedElemet = document.getElementById("speed");

const text = "Surviving is winning Franklin! ...›";

let idx = 1;
let speed = 300 / speedElemet.value;

typeText()

function typeText() {
    textElemet.innerText = text.slice(0,idx)

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(typeText, speed);
}

speedElemet.addEventListener("input", (e) => {
    speed = 300 / e.target.value
})