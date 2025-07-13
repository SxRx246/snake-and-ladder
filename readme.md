STORY:
    1. as a user I want to see a grib of numbers that has snakes and laders

    2. as a user, I want to see my character start from 0 in the grid

    3. as a user, I want to see a diec

    4. as a user, I want to be able to click on the diec and resuilt showing to me

    5. as a user I want to see my character moving based on what the diec showed

    6. as a user, I want to see a message if I win or I lose (if the other player "computer" reached the end point before me)

PSEUDOCODE:
    1. if user clicked on the diec
    2. character 



my plan and functions: 

    Let PlayerPosition = 0
    Let  snakesPositions = [10,22,30,47,.....]

    Function goingDown(){
    snakePositions.foreach (snakePosition =>  if(playerPosition === snakePosition  == 10) {
        PlayerPosition  = 1
    }
    Else if (playerPosition === snakePosition  == 22) {
        PlayerPosition  = 15
    }
    .
    .
    .
    }

    Function goingUp(){
    snakePositions.foreach (snakePosition =>  if(playerPosition === snakePosition  == 4) {
        PlayerPosition  = 14
    }
    Else if (playerPosition === snakePosition  == 28) {
        PlayerPosition  = 78
    }
    .
    .
    .
    }

    Function Diec(){
    PlayerPosition += (Math.random() * 6)
    }

    Function play(){
    If(event.target.classList.contains('diec')
                Diec()

    Document.addEventListener('click' , diec)
    }

    Adding one character like the duck, and this character that will move over the game 


