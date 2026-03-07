let drums = document.querySelectorAll(".drum");

//console.log(drums);

document.addEventListener("keydown", onKeyPressed);

for (let i = 0; i < drums.length; i++) {
    
    drums[i].addEventListener("click", onButtonClicked);
}

function onKeyPressed(event) {
    //console.log(event);
        
    let instrumentAt = event.key;
    //console.log(instrumentId);
    makeSoundOf(instrumentAt);
    animateThe(instrumentAt);
}

function onButtonClicked() {
    //alert("Button Clicked");
    
    //console.log(this);

    let instrumentAt = this.textContent;
    makeSoundOf(instrumentAt);
    animateThe(instrumentAt);
}

function makeSoundOf(instrumentAt) {

    let soundToPlay = new Audio();

    switch (instrumentAt) {

        case "w":
            soundToPlay = new Audio("./sounds/tom-1.mp3");
            soundToPlay.play();
            break;

        case "a":
            soundToPlay = new Audio("./sounds/tom-2.mp3");
            soundToPlay.play();
            break;

        case "s":
            soundToPlay = new Audio("./sounds/tom-3.mp3");
            soundToPlay.play();
            break;

        case "d":
            soundToPlay = new Audio("./sounds/tom-4.mp3");
            soundToPlay.play();
            break;

        case "j":
            soundToPlay = new Audio("./sounds/snare.mp3");
            soundToPlay.play();
            break;

        case "k":
            soundToPlay = new Audio("./sounds/crash.mp3");
            soundToPlay.play();
            break;

        case "l":
            soundToPlay = new Audio("./sounds/kick-bass.mp3");
            soundToPlay.play();
            break;

        default:
            break;
    }
}

function animateThe(instrumentAt) {
    
    //check if there are any instruments associated with the instrumentAt key 
    if (!"wasdjkl".includes(instrumentAt)) {
        return;
    }

    let btnToAnimate =  document.querySelector("." + instrumentAt);

    //button click feedback
    btnToAnimate.classList.add("pressed");

    //removes the class to finish the feedback
    setTimeout(
        function () { btnToAnimate.classList.remove("pressed"); },
        100
    );
}


