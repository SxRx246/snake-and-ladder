function init(){


const cells = []
const gridWidth = 10
const numberOfCells = gridWidth * gridWidth


// if user clicked on the dice, 
// the character will move based 
// on the result of the dice


// if the 


let playerPosition = 0
// Let  snakesPositions = [10,22,30,47,.....]
let snakesPositions = [10, 22, 30, 47]
let ladderPositions = [4, 9, 28, 52]
let winOrLose = ""
let diceOutput



const gridElem = document.querySelector('.grid')
const scoreElem = document.querySelector('#Position-display')
const audioElem = document.querySelector('#character')
const diceElem = document.querySelector('.dice');
const diceOutputElem = document.querySelector("#dice-output")



function addCharacter(){
    // playerPosition = (playerPosition +100)
    cells[playerPosition].classList.add('character')
}

function removeCharacter(){
    cells[playerPosition].classList.remove('character')
}



// if the player locatoion and ladder Position is the same, he will go up
function goingDown() {
    // removeCharacter()
    snakesPositions.forEach(snakesPosition => {
        if (playerPosition === 10 && snakesPosition === 10) {
            playerPosition = 1
        }
        else if (playerPosition === 22 && snakesPosition === 22) {
            playerPosition = 15
        }
        else if (playerPosition === 38 && snakesPosition === 38) {
            playerPosition = 7
        }
        // return playerPosition
    })
    addCharacter()
}

// if the player Position and the snake mouth Position is the same he will go some steps down
function goingUp() {
    // removeCharacter()
    ladderPositions.forEach(ladderPosition => {
        if (playerPosition === 4 && ladderPosition === 4) {
            playerPosition = 14
        }
        else if (playerPosition === 28 && ladderPosition === 28) {
            playerPosition = 78
        }
        // return playerPosition
    })
    addCharacter()
}

//  this function will be run to get a rando number between 1 -6 
function dice(){
    removeCharacter();
    diceOutput = Math.floor(Math.random() * 6) + 1
    if (playerPosition<numberOfCells)
        playerPosition += diceOutput
    else{
        playerPosition = playerPosition
        console.log("you sould get less points to reach exactly 100")}
    goingDown();
    goingUp();
    diceOutputElem.textContent = `The dice output:${diceOutput}`
}

// function playerCurrentPosition(){

// }

function endGame(){
    alert("The game is ended, your "+ winOrLose) 
    // score = 0
    // scoreElem.textContent = "Your score is 0"
}

function play(event){
    if(event.target.classList.contains('dice'))
            dice()
}

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

        // const tempCells = 
        const row = document.createElement('div')
        row.classList.add("row")

        reverseCount++
        // (7)by add this line we will notice that we are adding new class called duck into all divs
        // cell.classList.add("duck")
        cell.textContent = i

        // to keep it listen to clicks
        // cell.addEventListener('click', handleClick)
        // document.addEventListener('click', dice)

        // textContent is the text content of the cell
        // it is the same as the innerText
        
        // we will push all the divs into an array
        cells.push(cell)
        tempCells.push(cell)

        
        if(reverseCount % 10 === 0 ){
            count++
            let reversedRow = tempCells.map( cell => cell)
            console.log(reversedRow)
            tempCells.splice(0, tempCells.length);
            reversedRow.forEach(cell => {
                row.appendChild(cell)
            // reversedRow.splice(0, reversedRow.length);
                if (count % 2 === 1 )
                    row.classList.add("reverse")
            });

        // if(reverseCount % 10 === 0 ){
        //     gridElem.appendChild(row) 

        // };



            gridElem.appendChild(row) 
        }
        // console.log(row)

        // what we just did is "create and push" directly into the array
        // if ()
        // gridElem.appendChild(row)        
    }

        // console.log(cells)

}

// for (let i=10 ; i>=1; i--){
//         // (1)thats will create 100 div
//         const cell = document.createElement('div')
//         // const tempCells = 
//         const row = document.createElement('div')
//         for (let j=10 ; j>=1; j--){
//         // reverseCount++
//         // (7)by add this line we will notice that we are adding new class called duck into all divs
//         // cell.classList.add("duck")
//         cell.textContent = i

//         // to keep it listen to clicks
//         // cell.addEventListener('click', handleClick)
//         // document.addEventListener('click', dice)

//         // textContent is the text content of the cell
//         // it is the same as the innerText
        
//         // we will push all the divs into an array
//         cells.push(cell)
//         row.appendChild(cell)
//     }
//         // tempCells.push(cell)


//         // if(reverseCount % 10 === 0 ){
//         //     reversedRow = tempCells.map( cell => cell)
//         //     tempCells.splice(0, tempCells.length);
//         //     reversedRow.forEach(cell => {
//         //         row.appendChild(cell)
//         //     // reversedRow.splice(0, reversedRow.length);
//         //     });
   
//         // }

//         // what we just did is "create and push" directly into the array
        
//         gridElem.appendChild(row)        }
//         console.log(cells)

// } 

createGrid()
// play()

diceElem.addEventListener('click', play);

}



document.addEventListener("DOMContentLoaded",init)

// what I didnt add is, 
// when he got 6
// he has second play withe dice

// after play once with the dice
// then it is the computer turn
// we will give him random dice number
// then we will change the computer character 