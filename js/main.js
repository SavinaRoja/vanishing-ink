
    let lastEditTime = Date.now();

    function updateLastEditTime() {
        lastEditTime = Date.now();
        console.log(lastEditTime);
    }
    
    const textArea = document.getElementById("mytext");
    const brightnessInp = document.getElementById("brightnessInp");
    const imgInp = document.getElementById("imgInp");
    const textIncrInp = document.getElementById("textIncrInp");
    const textDecrInp = document.getElementById("textDecrInp");
    const bodyEle = document.body;
    const fontSizes = [12, 16, 20, 24, 30, 36, 48, 72]; 
    let fontSizeIndex = 5; // Start with the second value (16px)
    let imgBrightnessIndex = 0;
    console.log(bodyEle.style.backgroundImage);
    console.log(bodyEle.style.width);
    
    textArea.addEventListener("input", (event) => {
      updateLastEditTime();
    });
    
  
    
    brightnessInp.addEventListener("click", () => {
        const opacities = [1.0, 0.7, 0.5];
        textArea.style.opacity = opacities[imgBrightnessIndex];
        imgBrightnessIndex = (imgBrightnessIndex + 1) % opacities.length; // Loop back to the start
        console.log(imgBrightnessIndex);
    });
    
    imgInp.addEventListener("click", () => {
        const totalImages = 100;
        const randomIndex = Math.floor(Math.random() * totalImages) + 1;
        bodyEle.style.backgroundImage = `url("./su-bgrounds/Day ${randomIndex}.png")`;
        // $('body').css("background-image", `url("./su-bgrounds/Day ${randomIndex}.png")`);
    });

    // Set the predefined sizes

    function updateTextSize() {
        textArea.style.fontSize = fontSizes[fontSizeIndex] + 'px';
    }

    textIncrInp.addEventListener('click', () => {
        if (fontSizeIndex < fontSizes.length - 1) {
            fontSizeIndex++;
            updateTextSize();
        }
    });

    textDecrInp.addEventListener('click', () => {
        if (fontSizeIndex > 0) {
            fontSizeIndex--;
            updateTextSize();
        }
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