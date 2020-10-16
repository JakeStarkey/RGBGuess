window.onpaint = reload();

function reload() {    
    var colors = chooseColors();
    var pickedColor = pickColor();
    var squares = document.querySelectorAll(".square");
    var messageDisplay = document.querySelector("#message");
    var resetButton = document.querySelector("#reset");
    var colorDisplay = document.querySelector("#colorDisplay");

    colorDisplay.textContent = pickedColor;
    
    function chooseColors() {
        var colorArray = [];
        for ( var i = 0; i < 6; i++ ) {
        colorArray.push("rgb(" + pickRgb() + ", " + pickRgb() + ", " + pickRgb() + ")");
        }
        return colorArray;
    }

    function changeColors(color) {
            for ( var i = 0; i < colors.length; i++){
                squares[i].style.backgroundColor = color;
            }
            document.querySelector("#titleSpace").style.backgroundColor = color;
        }

    for ( var i = 0; i < squares.length; i++ ) {
        squares[i].style.backgroundColor = colors[i];

        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === colorDisplay.textContent){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
            }
            else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }

    function pickColor(){
        var random =  Math.floor(Math.random() * colors.length);
        return colors[random];
    }

    function pickRgb(){
        var random = Math.floor(Math.random() * 256);
        return random;
    }

    resetButton.addEventListener ("click", function () {
        reload();
        messageDisplay.textContent = "Pick a block...";
    })
}