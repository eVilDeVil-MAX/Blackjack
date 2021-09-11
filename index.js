
let  cards = []
let  sum = 0
let  blackJack = false
let isalive = true
let message  = '' 

let player= {
     name: "Player",
     chips: 100
}

let messageEL = document.getElementById('message-el')
let sumEL = document.querySelector("#sum-el")
let cardsEL = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")
playerEl.textContent =  player.name + ":$" + player.chips


function getRandom(){
    return Math.floor(Math.random() * 11 + 2)
}

function startgame(){
    firstcard = getRandom()
    secondcard  = getRandom()
    cards = [firstcard,secondcard]
    sum = firstcard + secondcard
    rendergame()
}

function newCard(){
    if (isalive === true && blackJack === false)   {
        console.log("Drawing card")
        let otherCard = getRandom()
        sum += otherCard
        rendergame()
    }
    else {
        return "sorry u are out of the game"
    }
    
}




function rendergame(){
    cardsEL.textContent = "Cards:" + " FIRSTCARD = " + cards[0] + " " + "SECONDCARD = " + cards[1]
    sumEL.textContent = "SUM:" +" "+ sum
    if (sum <= 21){
        message = "Do you want to draw a new card?🧐"
    }
    else if (sum === 21){
        message = "who who u got black jack😆😇"
        blackJack = true
    }
    else
    {
        message = "you are out of the game 😌😌"
        isalive = false;
    }
    messageEL.textContent = message
    
}



let age = 22;
if (age >= 21){
    console.log("welcome to the club, have fun ")
        
    }
else{
    console.log("sorry,But u are not old enought to enter the club" )
}


