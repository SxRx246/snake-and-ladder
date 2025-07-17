function init(){

const cells = []
const gridWidth = 10
const numberOfCells = gridWidth * gridWidth


// if user clicked on the diec, 
// the character will move based 
// on the result of the diec

let playerPosition = 0
let computerPosition = 0
let snakesPositions = [12, 22, 51, 56, 85, 81]
let ladderPositions = [3, 19, 27, 48, 76, 69]
let playerWin = false
let playerLose = false
let diceOutput
let computerDiceOutput
let ladder = false
let snake = false
let reachedValue
let isProcessing = false;

const gridElem = document.querySelector('.grid')
const currentPositionElem = document.querySelector('#current-position')
const computerCurrentPositionElem = document.querySelector('#computer-current-position')
const pastPositionElem = document.querySelector('#past-position')
const computerPastPositionElem = document.querySelector('#computer-past-position')
const diceElem = document.querySelector('.diec');
const diceDivElem = document.querySelector('.dice-div')
const diceOutputElem = document.querySelector("#dice-output")
const computerOutputElem = document.querySelector('#computer-dice-output');
const computerMessageElem = document.querySelector('#computer-message');
const playerMessageElem = document.querySelector('#player-message');
const computerValuesElem = document.querySelector(".computer-values")
const playerValuesElem = document.querySelector(".player-values")
const restartElem = document.querySelector('#restart')

// 
const snake13Elem = document.querySelector('.snake-13')
const snake23Elem = document.querySelector('.snake-23')
const snake52Elem = document.querySelector('.snake-52')
const snake57Elem = document.querySelector('.snake-57')
const snake82Elem = document.querySelector('.snake-82')
const snake86Elem = document.querySelector('.snake-86')

// ladders
const ladder4Elem = document.querySelector('.ladder-4')
const ladder20Elem = document.querySelector('.ladder-20')
const ladder28Elem = document.querySelector('.ladder-28')
const ladder49Elem = document.querySelector('.ladder-49')
const ladder70Elem = document.querySelector('.ladder-70')
const ladder77Elem = document.querySelector('.ladder-77')


// dice
const dice1Elem = document.querySelector('.dice-1')
const dice2Elem = document.querySelector('.dice-2')
const dice3Elem = document.querySelector('.dice-3')
const dice4Elem = document.querySelector('.dice-4')
const dice5Elem = document.querySelector('.dice-5')
const dice6Elem = document.querySelector('.dice-6')


// Audios
const winningAudioElem = document.querySelector('#winning')
const congratsAudioElem = document.querySelector('#congrats')
const gameOverAudioElem = document.querySelector('#gameOver')
const lossingAudioElem = document.querySelector('#lossing')
const downSnakeAudioElem = document.querySelector('#downSnake')
const letsGoAudioElem = document.querySelector('#letsGo')
const diceAudioElem = document.querySelector('#rollingDice')
const noAudioElem = document.querySelector('#no')


// console.log(restartElem)


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
snakesPositions.forEach(snakePosition => {
        if (playerPosition === 12 && snakePosition === 12) {
            playerPosition = 6
            snake = true
        }
        else if (playerPosition === 22 && snakePosition === 22) {
            playerPosition = 2
            snake = true
        }
        else if (playerPosition === 51 && snakePosition === 51) {
            playerPosition = 47
            snake = true
        }
        else if (playerPosition === 56 && snakePosition === 56) {
            playerPosition = 21
            snake = true
        }
        else if (playerPosition === 79 && snakePosition === 79) {
            playerPosition = 75
            snake = true

        }
        else if (playerPosition === 85 && snakePosition === 85) {
            playerPosition = 14
            snake = true
        }
        else if (playerPosition === 81 && snakePosition === 81) {
            playerPosition = 61
            snake = true
        }
    })

    if(snake === true)
        downSnakeAudioElem.play()
}



function computerGoingDown() {
snakesPositions.forEach(snakePosition => {
        if (computerPosition === 12 && snakePosition === 12) {
            computerPosition = 6
            snake = true
        }
        else if (playerPosition === 22 && snakePosition === 22) {
            playerPosition = 2
            snake = true
        }
        else if (computerPosition === 51 && snakePosition === 51) {
            computerPosition = 47
            snake = true
        }
        else if (computerPosition === 56 && snakePosition === 56) {
            computerPosition = 21
            snake = true
        }
        else if (computerPosition === 79 && snakePosition === 79) {
            computerPosition = 75
            snake = true
        }
        else if (computerPosition === 85 && snakePosition === 85) {
            computerPosition = 14
            snake = true
        }
        else if (computerPosition === 81 && snakePosition === 81) {
            computerPosition = 61
            snake = true
        }

    })
        if(snake === true)
            letsGoAudioElem.play()
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

        else if (playerPosition === 48 && ladderPosition === 48) {
            playerPosition = 52
            ladder = true
        }
        else if (playerPosition === 69 && ladderPosition === 69) {
            playerPosition = 90
            ladder = true
        }
        else if (playerPosition === 76 && ladderPosition === 76) {
            playerPosition = 84
            ladder = true
        }
    })
        if(ladder === true)
            letsGoAudioElem.play()
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

        else if (computerPosition === 48 && ladderPosition === 48) {
            computerPosition = 52
            ladder = true

        }
        else if (computerPosition === 69 && ladderPosition === 69) {
            computerPosition = 90
            ladder = true
        }
        else if (computerPosition === 76 && ladderPosition === 76) {
            computerPosition = 84
            ladder = true
        }
    })
      if(ladder === true)
            noAudioElem.play()
}

function removeFaces(){
    dice1Elem.classList.add('hidden')
    dice2Elem.classList.add('hidden')
    dice3Elem.classList.add('hidden')
    dice4Elem.classList.add('hidden')
    dice5Elem.classList.add('hidden')
    dice6Elem.classList.add('hidden')
}

function otherPlayerDice(){
    playerMessageElem.innerText = "" 
    removeFaces()
    diceElem.disabled = true;
    isProcessing = true; 
    setTimeout(add(playerValuesElem),3000)
    remove(computerValuesElem)

    diceElem.classList.add('hidden')
    computerValuesElem.classList.remove('hidden');
    playerValuesElem.classList.add('hidden');
    computerPastPositionElem.textContent = `Computer's Past Position was ${99-computerPosition+1}`
    

    // setTimeout(() => {
    removeComputer();
    computerDiceOutput = Math.floor(Math.random() * 6) + 1
    //  diceElem.classList.add('hidden')
    if(computerDiceOutput === 1){
        dice1Elem.classList.remove('hidden')
        // diceElem.classList.add('hidden')
    }
    else if(computerDiceOutput === 2){
        dice2Elem.classList.remove('hidden')
        // diceElem.classList.add('hidden')
    }
    else if(computerDiceOutput === 3){
        dice3Elem.classList.remove('hidden')
        // diceElem.classList.add('hidden')
    }
    else if(computerDiceOutput === 4){
        dice4Elem.classList.remove('hidden')
        // diceElem.classList.add('hidden')
    }
    else if(computerDiceOutput === 5){
        dice5Elem.classList.remove('hidden')
        // diceElem.classList.add('hidden')
    }
    else if(computerDiceOutput === 6){
        dice6Elem.classList.remove('hidden')
        // diceElem.classList.add('hidden')
    }



    if ((computerPosition+computerDiceOutput+1)<=numberOfCells)
        computerPosition += computerDiceOutput
        if((computerPosition+1) === 100 ){
            playerLose = true
        }
    else{
        computerPosition = computerPosition
    }
    // console.log("it is at "+(computerPosition+1) + " position" )
    reachedValue = computerPosition +1
    computerGoingDown();
    computerGoingUp();
    addComputer()
    computerOutputElem.textContent = `Computer's Dice Output is ${computerDiceOutput}`
    computerCurrentPositionElem.textContent = `Computer's Current Position is ${99- computerPosition +1}`     


    if (playerWin || playerLose)
    endGame()
    else if(computerDiceOutput === 6){
        computerMessageElem.textContent = "2 rolls from your rival, your turn now!"
        setTimeout(otherPlayerDice() , 3000)
    }
else {
    setTimeout(() => {
        isProcessing = false;
        diceElem.disabled = false;

        // Show dice GIF again
        diceElem.classList.remove('hidden');

        // Hide all old dice faces
        removeFaces();

        // Show player's values section
        computerValuesElem.classList.add('hidden');
        computerMessageElem.innerText = "" 
        playerValuesElem.classList.remove('hidden');
        currentPositionElem.innerText =""
        pastPositionElem.innerText =""
        diceOutputElem.innerText =""
        // playerMessageElem = ""
        
    }, 2500); // Delay to visually finish the computer move before player's turn
}

        // computerValuesElem.classList.add('hidden');

}

//  this function will be run to get a rando number between 1 -6 
function diec(){
    if (isProcessing) 
        return; 
    isProcessing = true; 
    diceElem.disabled = true; 

    removeFaces()

    // diceElem.classList.add('hidden');
    computerValuesElem.classList.add('hidden')
    playerValuesElem.classList.remove('hidden')
    ladder = false
    snake = false
    computerMessageElem.textContent = ""
    playerMessageElem.textContent = ""
    pastPositionElem.textContent = `Your Past Position was ${99-playerPosition+1}`
    removeCharacter();
    diceOutput = Math.floor(Math.random() * 6) + 1

        if(diceOutput === 1){
        dice1Elem.classList.remove('hidden')
        // diceElem.classList.add('hidden')
    }
    else if(diceOutput === 2){
        dice2Elem.classList.remove('hidden')
        // diceElem.classList.add('hidden')
    }
    else if(diceOutput === 3){
        dice3Elem.classList.remove('hidden')
        // diceElem.classList.add('hidden')
    }
    else if(diceOutput === 4){
        dice4Elem.classList.remove('hidden')
        // diceElem.classList.add('hidden')
    }
    else if(diceOutput === 5){
        dice5Elem.classList.remove('hidden')
        // diceElem.classList.add('hidden')
    }
    else if(diceOutput === 6){
        dice6Elem.classList.remove('hidden')
        // diceElem.classList.add('hidden')
    }

    if ((playerPosition+diceOutput+1)<=numberOfCells){
        // console.log("expected result: "+(playerPosition+diceOutput+1))
        // console.log(playerPosition+1)
        playerPosition += diceOutput
        // console.log(playerPosition+1)
        if((playerPosition+1) === 100 ){
            playerWin = true
        }
    }
    else{
        playerPosition= playerPosition
        // console.log("when There are less steps"+playerPosition+1)
    }
    
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


    // playerLose = true

    if (playerWin || playerLose)
    // setTimeout(endGame() , 1000)
    endGame()
    else if(diceOutput === 6){
        playerMessageElem.textContent = "You have another roll"
        isProcessing = false; // ✅ Allow the player to click again
        diceElem.disabled = false;
        // setTimeout(play() , 3000)
    }
    else{
        // remove() 
    setTimeout(otherPlayerDice, 2000)

    // setTimeout((playerValuesElem.classList.add('hidden')), 10000)
    // computerValuesElem.classList.add('hidden')
    // setTimeout(computerValuesElem.classList.remove('hidden'),20000)
    // computerValuesElem.classList.remove('hidden')
    if(ladder)
        computerMessageElem.textContent = `The Computer Went UP Because of the Ladder at ${reachedValue}`
    else if (snake)
        computerMessageElem.textContent = `The Computer Went Down Because of the Snake at ${reachedValue}`
    }

    // diceElem.classList.remove('hidden')
    // console.log(diceElem)
    // anotherTurn()
    // setTimeout(play() , 4000)
}



// function anotherTurn(){
//     // setTimeout(add(computerValuesElem),100)
//     computerValuesElem.classList.add('hidden')
//         console.log("you reachhed")
//     console.log(diceElem)
//     // diceElem.classList.remove('hidden')
//     console.log(diceElem)


//     // dice1Elem.classList.add('hidden')
//     // dice2Elem.classList.add('hidden')
//     // dice3Elem.classList.add('hidden')
//     // dice4Elem.classList.add('hidden')
//     // dice5Elem.classList.add('hidden')
//     // dice6Elem.classList.add('hidden')

//     // console.log(dice1Elem)

//     // computerValuesElem.classList.add('hidden')
//     console.log("Enter it")
// }

// dice()

    function add(Elem){
        setTimeout(Elem.classList.add('hidden') , 5000)
    }
    function remove(Elem){
        setTimeout(Elem.classList.remove('hidden'), 5000)
    }

function endGame(){
    diceElem.removeEventListener('click', play); 
    computerValuesElem.classList.add('hidden')
    playerValuesElem.classList.add('hidden')
    diceElem.classList.add('hidden')
    removeFaces()
    if(playerWin){
    // alert("The game is ended, your a Winner")
    playerMessageElem.style.fontWeight = "bold"
    playerMessageElem.style.color = 'rgba(0, 0, 0, 1)'
    playerMessageElem.textContent = "The game is ended, your a Winner"
    winningAudioElem.play()
    congratsAudioElem.play()

    }
    else if(playerLose){
    // alert("The game is ended, your Lose")
    computerMessageElem.style.fontWeight = "bold"
    computerMessageElem.style.color = 'rgba(0, 0, 0, 1)'
    computerMessageElem.textContent = "The game is ended, your Lose"
    lossingAudioElem.play()
    gameOverAudioElem.play()
    // playerMessageElem
    }

    restartElem.classList.remove('hidden')

    // if(playerWin || playerLose){
    // addCharacter()
    // addComputer()
// }

    // score = 0
    // scoreElem.textContent = "Your score is 0"
}

    function restart(){
        if(playerWin){
            playerValuesElem.classList.add('hidden')
            computerValuesElem.classList.add('hidden')
            playerMessageElem.textContent = "The Game has been restart"
            playerMessageElem.style.color = "rgba(8, 79, 18, 1)"
        }
        else if (playerLose){
        computerMessageElem.textContent = "The Game has been restart"
        computerMessageElem.style.color = "rgba(255, 71, 10, 1)"
        }

        restartElem.classList.add('hidden')
        removeCharacter()
        removeComputer()
        playerPosition = 0
        computerPosition = 0
        playerWin = false
        playerLose = false
        ladder = false
        snake = false
        isProcessing = false
        diceElem.disabled = false
        // playerMessageElem.innerText = ""
        // computerMessageElem.innerText = ""
        // playerMessageElem.classList.add('hidden')
        // computerMessageElem.classList.add('hidden')
        addCharacter()
        addComputer()
        diceElem.classList.remove('hidden')
        diceElem.addEventListener('click', play); 
        // createGrid();
        removeFaces()
        // play()

    }

function play(event){
    computerMessageElem.style.color = "black"
    playerMessageElem.style.color = "black"

    if(event.target.classList.contains('diec')){
        if (isProcessing) 
            return;
        // isProcessing = true;    
        // diceElem.disabled = true
            diceAudioElem.play()
            diec()
        }
}


// Adding one character like the duck, and this character that will move over the game 



function createGrid(){
    // for every call that we require create a div
    // append this call to our grid

//    running the loop 100 times, then create div 100 rimes and add them to the grid class
    
let reverseCount = 0
const tempCells = []
let count = 1
for (let i=100 ; i>=1; i--){
        let countforSnakesandLadders = 101 - i
        // (1)thats will create 100 div
        const cell = document.createElement('div')
        cell.classList.add("cell")

        const row = document.createElement('div')
        row.classList.add("row")

        reverseCount++
       
        cell.textContent = i

        if(i%2 === 0)
            cell.style.backgroundColor = "rgba(0, 255, 106, 1)"
        else
            cell.style.backgroundColor = "rgba(255, 206, 10, 1)"


        
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
            tempCells.splice(0, tempCells.length);
            reversedRow.forEach(cell => {
                row.appendChild(cell)
                if (count % 2 === 1 )
                    row.classList.add("reverse")
            });
            gridElem.appendChild(row) 
        }        


        if(cell.innerText === "27"){
            cell.appendChild(snake13Elem)
        }
        else if(cell.innerText === "68"){
            cell.appendChild(snake52Elem)
        }
        else if(cell.innerText === "62"){
            cell.appendChild(snake57Elem)
        }
        else if(cell.innerText === "39"){
            cell.appendChild(snake23Elem)
        }
        else if(cell.innerText === "95"){
            cell.appendChild(snake86Elem)
        }
        else if(cell.innerText === "100"){
            cell.appendChild(snake82Elem)
        }
        // else if(cell.innerText === ""){
        //     cell.appendChild(snakeLastRowElem)        
        // }

        




// Ladders:
        if(cell.innerText === "24"){
            cell.appendChild(ladder4Elem)
        }
        else if(cell.innerText === "42"){
            cell.appendChild(ladder20Elem)
        }
        else if(cell.innerText === "96"){
            cell.appendChild(ladder28Elem)
        }
        else if(cell.innerText === "68"){
            cell.appendChild(ladder49Elem)
        }
        else if(cell.innerText === "92"){
            cell.appendChild(ladder70Elem)
        }
        else if(cell.innerText === "97"){
            cell.appendChild(ladder77Elem)
        }
    }

    addCharacter()
    addComputer()

}

createGrid()

diceElem.addEventListener('click', play);
restartElem.addEventListener('click' , restart)
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