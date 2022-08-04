let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern =[];


nextSequence = function (){
    var randomNumber = Math.round(Math.random()*3)
    return randomNumber
}

let newNumber = nextSequence()




var randomChosenColour = buttonColours[newNumber];
gamePattern.push(randomChosenColour)    
$('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    


$('.btn').on('click', function(){
    console.log(this.id)
    let col = this.id
    var sound = new Audio('sounds/'+col+'.mp3')
    sound.play();
})