// Handling Mouse Click events
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        buttonAnimation(this.innerHTML);
        playSound(this.innerHTML);
    });
}

// Handling Keyboard Events
document.addEventListener("keydown", function(event){
    buttonAnimation(event.key);
    playSound(event.key);
})

function playSound(character){
    switch (character) {
        case ("w"):
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case ("a"):
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case ("s"):
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case ("d"):
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case ("j"):
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case ("k"):
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case ("l"):
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        default:
            console.log(this);
    }
}

function buttonAnimation(keyPressed){
    document.querySelector('.'+keyPressed).classList.add("pressed");

    setTimeout(function() {
        document.querySelector('.'+keyPressed).classList.remove("pressed");
    },100);
}
