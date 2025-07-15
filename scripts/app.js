function init(){

const cells = []
const gridWidth = 10
const numberOfCells = gridWidth * gridWidth


// if user clicked on the diec, 
// the character will move based 
// on the result of the diec

let playerPosition = 0
let computerPosition = 0
let snakesPositions = [12, 51, 79, 85, 95]
let ladderPositions = [3, 19, 27, 43, 53, 70]
let playerWin = false
let playerLose = false
let diceOutput
let computerDiceOutput
let ladder = false
let snake = false
let reachedValue

const gridElem = document.querySelector('.grid')
const currentPositionElem = document.querySelector('#current-position')
const computerCurrentPositionElem = document.querySelector('#computer-current-position')
const pastPositionElem = document.querySelector('#past-position')
const computerPastPositionElem = document.querySelector('#computer-past-position')
const diceElem = document.querySelector('.diec');
const diceOutputElem = document.querySelector("#dice-output")
const computerOutputElem = document.querySelector('#computer-dice-output');
const computerMessageElem = document.querySelector('#computer-message');
const playerMessageElem = document.querySelector('#player-message');
const computerValuesElem = document.querySelector(".computer-values")
const playerValuesElem = document.querySelector(".player-values")




function addCharacter(){
    playerPosition = (99 - playerPosition)
    cells[playerPosition].classList.add('character')
}

function removeCharacter(){
    cells[playerPosition].classList.remove('character')
    playerPosition = (99 - playerPosition)
}


function addComputer(){
    computerPosition = (99 - computerPosition)
    cells[computerPosition].classList.add('computer')
}

function removeComputer(){
    cells[computerPosition].classList.remove('computer')
    computerPosition = (99 - computerPosition)
}

// if the player locatoion and ladder Position is the same, he will go up
function goingDown() {
snakesPositions.forEach(snakesPosition => {
        if (playerPosition === 12 && snakesPosition === 12) {
            playerPosition = 6
            snake = true
        }
        else if (playerPosition === 51 && snakesPosition === 51) {
            playerPosition = 47
            snake = true
        }
        else if (playerPosition === 79 && snakesPosition === 79) {
            playerPosition = 75
            snake = true

        }
        else if (playerPosition === 85 && snakesPosition === 85) {
            playerPosition = 14
            snake = true
        }
        else if (playerPosition === 95 && snakesPosition === 95) {
            playerPosition = 62
            snake = true
        }
    })
}



function computerGoingDown() {
snakesPositions.forEach(snakesPosition => {
        if (computerPosition === 12 && snakesPosition === 12) {
            computerPosition = 6
            snake = true
        }
        else if (computerPosition === 51 && snakesPosition === 51) {
            computerPosition = 47
            snake = true
        }
        else if (computerPosition === 79 && snakesPosition === 79) {
            computerPosition = 75
            snake = true
        }
        else if (computerPosition === 85 && snakesPosition === 85) {
            computerPosition = 14
            snake = true
        }
        else if (computerPosition === 95 && snakesPosition === 95) {
            computerPosition = 62
            snake = true
        }
    })
} 


// if the player Position and the snake mouth Position is the same he will go some steps down
function goingUp() {
    ladderPositions.forEach(ladderPosition => {
        if (playerPosition === 3 && ladderPosition === 3) {
            playerPosition = 15
            ladder = true
        }
        else if (playerPosition === 19 && ladderPosition === 19) {
            playerPosition = 37
            ladder = true
        }
        else if (playerPosition === 27 && ladderPosition === 27) {
            playerPosition = 77
            ladder = true
        }

        else if (playerPosition === 43 && ladderPosition === 43) {
            playerPosition = 55
            ladder = true
        }
        else if (playerPosition === 53 && ladderPosition === 53) {
            playerPosition = 72
            ladder = true
        }
        else if (playerPosition === 70 && ladderPosition === 70) {
            playerPosition = 90
            ladder = true
        }
    })
}


function computerGoingUp() {
    ladderPositions.forEach(ladderPosition => {
        if (computerPosition === 3 && ladderPosition === 3) {
            computerPosition = 15
            ladder = true
        }
        else if (computerPosition === 19 && ladderPosition === 19) {
            computerPosition = 37
            ladder = true

        }
        else if (computerPosition === 27 && ladderPosition === 27) {
            computerPosition = 77
            ladder = true

        }

        else if (computerPosition === 43 && ladderPosition === 43) {
            computerPosition = 55
            ladder = true

        }
        else if (computerPosition === 53 && ladderPosition === 53) {
            computerPosition = 72
            ladder = true
        }
        else if (computerPosition === 70 && ladderPosition === 70) {
            computerPosition = 90
            ladder = true
        }
    })
}


function otherPlayerDice(){
    // ladder = false
    // snake = false
    setTimeout(add(playerValuesElem),3000)
    remove(computerValuesElem)
    
    // setTimeout(remove(computerMessageElem),1)
    // setTimeout(remove(computerMessageElem),1)
    computerValuesElem.classList.remove('hidden')
    console.log("Here we go")
    computerPastPositionElem.textContent = `Computer's Past Position was ${99-computerPosition+1}`

    removeComputer();
    computerDiceOutput = Math.floor(Math.random() * 6) + 1
    if ((computerPosition+computerDiceOutput+1)<=numberOfCells)
        computerPosition += computerDiceOutput
        if((computerPosition+1) === 100 ){
            playerLose = true
        }
    else{
        computerPosition = computerPosition
        console.log("you sould get less points to reach exactly 100")
    }
    // console.log("it is at "+(computerPosition+1) + " position" )
    reachedValue = computerPosition +1
    computerGoingDown();
    computerGoingUp();
    addComputer()
    computerOutputElem.textContent = `Computer's Dice Output is ${computerDiceOutput}`
    computerCurrentPositionElem.textContent = `Computer's Current Position is ${99- computerPosition +1}`
    if (playerWin || playerLose)
    // setTimeout(endGame() , 1000)
    endGame()
}

//  this function will be run to get a rando number between 1 -6 
function diec(){
    // computer-values

    computerValuesElem.classList.add('hidden')
    playerValuesElem.classList.remove('hidden')
    ladder = false
    snake = false
    computerMessageElem.textContent = ""
    playerMessageElem.textContent = ""
    // let printingPastPosition = playerPosition
    pastPositionElem.textContent = `Your Past Position was ${99-playerPosition+1}`
    removeCharacter();
    diceOutput = Math.floor(Math.random() * 6) + 1
    if ((playerPosition+diceOutput+1)<=numberOfCells){
        console.log("expected result: "+(playerPosition+diceOutput+1))
        console.log(playerPosition+1)
        playerPosition += diceOutput
        console.log(playerPosition+1)
        if((playerPosition+1) === 100 ){
            playerWin = true
        }
    }
    else{
        playerPosition= playerPosition
        console.log("when There are less steps"+playerPosition+1)
        console.log("you sould get less points to reach exactly 100")
    }
    // console.log("it is at "+(playerPosition+1) + " position" )
    // let printingCurrentPosition = playerPosition +1

    
   
    // if (playerWin || playerLose){
    //     // setTimeout(endGame() , 1000)
    //     endGame()
    // }
    // else{
    reachedValue = playerPosition +1
    goingDown();
    goingUp();
    addCharacter()
    diceOutputElem.textContent = `Your Dice Output is ${diceOutput}`
    currentPositionElem.textContent = `Your Current Position is ${99- playerPosition +1}`
    if(ladder)
        playerMessageElem.textContent = `You Went UP Because of the Ladder at ${reachedValue}`
    else if (snake)
        playerMessageElem.textContent = `You Went Down Because of the Snake at ${reachedValue}`


    ladder = false
    snake = false
    if (playerWin || playerLose)
    // setTimeout(endGame() , 1000)
    endGame()
    else{
        // remove()

    setTimeout(otherPlayerDice, 3000)

    // setTimeout((playerValuesElem.classList.add('hidden')), 10000)
    // computerValuesElem.classList.add('hidden')
    // setTimeout(computerValuesElem.classList.remove('hidden'),20000)
    // computerValuesElem.classList.remove('hidden')
    if(ladder)
        computerMessageElem.textContent = `The Computer Went UP Because of the Ladder at ${reachedValue}`
    else if (snake)
        computerMessageElem.textContent = `The Computer Went Down Because of the Snake at ${reachedValue}`
}
// }
    // if (playerWin || playerLose){
    //     // setTimeout(endGame() , 1000)
    //     endGame()
    // }
}

    function add(Elem){
        setTimeout(Elem.classList.add('hidden'))
    }
    function remove(Elem){
        setTimeout(Elem.classList.remove('hidden'))
    }

function endGame(){
    diceElem.removeEventListener('click', play); 
    computerValuesElem.classList.add('hidden')
    playerValuesElem.classList.add('hidden')
    if(playerWin){
    // alert("The game is ended, your a Winner")
    playerMessageElem.style.fontWeight = "bold"
    playerMessageElem.textContent = "The game is ended, your a Winner"
    }
    if(playerLose){
    // alert("The game is ended, your Lose")
    playerMessageElem.style.fontWeight = "bold"
    computerMessageElem.textContent = "The game is ended, your Lose"

    }

    // if(playerWin || playerLose){
    // addCharacter()
    // addComputer()
// }

    // score = 0
    // scoreElem.textContent = "Your score is 0"
}

function play(event){
    if(event.target.classList.contains('diec')){
        // if(playerTurn)
            diec()
            // playerTurn = false
            // computerTurn = true
        }
    // otherPlayerDice()

    
}

// function computer(){

//     if (computerTurn){
//         otherPlayerDice()
//         computerTurn = false
//         playerTurn = true
//     }
// }

// function play(event){
//     if(playerPosition){
//     if(event.target.classList.contains('diec')){
//             diec()
//             computerTurn = true
//             playerTurn = false
//         }
//         else if (computerTurn){
//         otherPlayerDice()
//         computerTurn = false
//         playerTurn = true
//     }
    
// }

// Adding one character like the duck, and this character that will move over the game 



function createGrid(){
    // for every call that we require create a div
    // append this call to our grid

//    running the loop 100 times, then create div 100 rimes and add them to the grid class
    
let reverseCount = 0
// const reversedRow = []
const tempCells = []
let count = 1
for (let i=100 ; i>=1; i--){
        // (1)thats will create 100 div
        const cell = document.createElement('div')
        cell.classList.add("cell")

        const row = document.createElement('div')
        row.classList.add("row")

        reverseCount++
       
        cell.textContent = i

        if(i%2 === 0)
            cell.style.backgroundColor = "rgba(31, 224, 227, 1)"
        else
            cell.style.backgroundColor = "rgb(255, 132, 0)"


        
        snakesPositions.forEach(snakesPosition => {
            if (cell.textContent === snakesPosition)
            cell.classList.add("snake")
        });
        
        // we will push all the divs into an array
        cells.push(cell)
        tempCells.push(cell)

        
        if(reverseCount % 10 === 0 ){
            count++
            let reversedRow = tempCells.map( cell => cell)
            // console.log(reversedRow)
            tempCells.splice(0, tempCells.length);
            reversedRow.forEach(cell => {
                row.appendChild(cell)
                if (count % 2 === 1 )
                    row.classList.add("reverse")
            });
            gridElem.appendChild(row) 
        }        
    }

    addCharacter()
    addComputer()

}

createGrid()

// play()
// while(true){
//     if (playerTurn){
diceElem.addEventListener('click', play);

//             computerTurn = true
//             playerTurn = false
//         }
    // if (computerTurn){
    //     otherPlayerDice()
    //     computerTurn = false
    //     playerTurn = true
    // }}
// diceElem.addEventListener('click', play);

}



document.addEventListener("DOMContentLoaded",init)

// what I didnt add is, 
// when he got 6
// he has second play withe dice

// after play once with the dice
// then it is the computer turn
// we will give him random dice number
// then we will change the computer character 




// the game over