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
let winOrLose = ""
let diceOutput
let computerDiceOutput

const gridElem = document.querySelector('.grid')
const positionElem = document.querySelector('#current-position')
const pastPositionElem = document.querySelector('#past-position')
const diceElem = document.querySelector('.diec');
const diceOutputElem = document.querySelector("#dice-output")



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
        }
        else if (playerPosition === 51 && snakesPosition === 51) {
            playerPosition = 47
        }
        else if (playerPosition === 79 && snakesPosition === 79) {
            playerPosition = 75

        }
        else if (playerPosition === 85 && snakesPosition === 85) {
            playerPosition = 14
        }
        else if (playerPosition === 95 && snakesPosition === 95) {
            playerPosition = 62
        }
    })
}



function computerGoingDown() {
snakesPositions.forEach(snakesPosition => {
        if (computerPosition === 12 && snakesPosition === 12) {
            computerPosition = 6
        }
        else if (computerPosition === 51 && snakesPosition === 51) {
            computerPosition = 47
        }
        else if (computerPosition === 79 && snakesPosition === 79) {
            computerPosition = 75
        }
        else if (computerPosition === 85 && snakesPosition === 85) {
            computerPosition = 14
        }
        else if (computerPosition === 95 && snakesPosition === 95) {
            computerPosition = 62
        }
    })
} 


// if the player Position and the snake mouth Position is the same he will go some steps down
function goingUp() {
    ladderPositions.forEach(ladderPosition => {
        if (playerPosition === 3 && ladderPosition === 3) {
            playerPosition = 15
        }
        else if (playerPosition === 19 && ladderPosition === 19) {
            playerPosition = 37
        }
        else if (playerPosition === 27 && ladderPosition === 27) {
            playerPosition = 77
        }

        else if (playerPosition === 43 && ladderPosition === 43) {
            playerPosition = 55
        }
        else if (playerPosition === 53 && ladderPosition === 53) {
            playerPosition = 72
        }
        else if (playerPosition === 70 && ladderPosition === 70) {
            playerPosition = 90
        }
    })
}

function computerGoingUp() {
    ladderPositions.forEach(ladderPosition => {
        if (computerPosition === 3 && ladderPosition === 3) {
            computerPosition = 15
        }
        else if (computerPosition === 19 && ladderPosition === 19) {
            computerPosition = 37
        }
        else if (computerPosition === 27 && ladderPosition === 27) {
            computerPosition = 77
        }

        else if (computerPosition === 43 && ladderPosition === 43) {
            computerPosition = 55
        }
        else if (computerPosition === 53 && ladderPosition === 53) {
            computerPosition = 72
        }
        else if (computerPosition === 70 && ladderPosition === 70) {
            computerPosition = 90
        }
    })
}


function otherPlayerDice(){
    removeComputer();
    computerDiceOutput = Math.floor(Math.random() * 6) + 1
    if (computerPosition<numberOfCells)
        computerPosition += computerDiceOutput
    else{
        computerPosition = computerPosition
        console.log("you sould get less points to reach exactly 100")}
    console.log("it is at "+(computerPosition+1) + " position" )
    computerGoingDown();
    computerGoingUp();
    addComputer()
    diceOutputElem.textContent = `The dice output:${computerDiceOutput}`
}

//  this function will be run to get a rando number between 1 -6 
function diec(){
    let printingPastPosition = (playerPosition - 99) 
    pastPositionElem.textContent = `Past Position is ${printingPastPosition}`
    removeCharacter();
    diceOutput = Math.floor(Math.random() * 6) + 1
    if ((playerPosition-99)<numberOfCells)
        playerPosition += diceOutput
    else{
        playerPosition = playerPosition
        console.log("you sould get less points to reach exactly 100")
    }
    // console.log("it is at "+(playerPosition+1) + " position" )
    // let printingCurrentPosition = playerPosition 

    positionElem.textContent = `Current Position is ${playerPosition}`
    goingDown();
    goingUp();
    addCharacter()
    diceOutputElem.textContent = `The dice output:${diceOutput}`
    setTimeout(otherPlayerDice, 400);
}

function endGame(){
    alert("The game is ended, your "+ winOrLose) 
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
    if ( playerPosition === 100 || computerPosition === 100){
            endGame()
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