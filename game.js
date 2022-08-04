let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern =[];
let userClickedPatter =[];


nextSequence = function (){
    var randomNumber = Math.round(Math.random()*3)
    return randomNumber
}

let newNumber = nextSequence()




var randomChosenColour = buttonColours[newNumber];
gamePattern.push(randomChosenColour)    
$('#'+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
$(document).ready(function(){
    var sound = new Audio('sounds/'+randomChosenColour+'.mp3')
    sound.play(); 

})   


$('.btn').on('click', function(){   
    let userChoseColour = this.id
    userClickedPatter.push(userChoseColour)
    console.log(userClickedPatter)
    var sound = new Audio('sounds/'+userChoseColour+'.mp3')
    sound.play();
})