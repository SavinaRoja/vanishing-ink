
let lastEditTime = Date.now();

function updateLastEditTime() {
    lastEditTime = Date.now();
    console.log(lastEditTime);
}

const textArea = document.getElementById("mytext");

textArea.addEventListener("input", (event) => {
  updateLastEditTime();
});

function checkForReset() {
    // 1_800_000 = 1_000 * 60 * 30 (30 minutes in milliseconds)
    //if ((Date.now() -  lastEditTime) > 1800000) {
    if ((Date.now() -  lastEditTime) > 1000) {
        textArea.innerText="";
        updateLastEditTime();
    }
}

let _intervalID = setInterval(checkForReset, 5000);
