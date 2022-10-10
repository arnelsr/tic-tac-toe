/****Program Structure***/

//Create gameboard object module containing gameboard array
//Create player object factory
//contains player details

//Create game object module
//clicking is handled by event delegation

/**Start*****/
//gameboard object module
const Gameboard = (() => {
   // const gameboardArray = new Array(3);
   const gameboardArray = [];

    //display gameboard
    const playerMove=(player,index,element) =>{
        //check if valid move
        if (Game.checkValidMove(index,gameboardArray)){
         
        
            //set array index to player name
            gameboardArray[index]=player.name;
            //draw in gameboard
            element.textContent=player.name;
            element.style.color=player.color;
            //update current player
            if (currentPlayer.name == 'X') {
                currentPlayer=playerO;
            }else{
                currentPlayer=playerX;
            }
        }

        //check if won
        Game.checkWinner(gameboardArray);
     
            
    }
    
    return {
      gameboardArray, playerMove
    };
})();
//game object module
const Game = (() => {
     //check if valid move
     const checkValidMove=(index,gameboardArray) =>{
         //check if valid move
         if ((gameboardArray[index]=='O') ||
              (gameboardArray[index]=='X')){
            return false;
         }
         return true;
     };
         

 
    //check if there's a winner
    const checkWinner=(gameboardArray) => {
        switch (true) {
           case gameboardArray[0] + gameboardArray[1] + gameboardArray[2] =='XXX':
           case gameboardArray[3] + gameboardArray[4] + gameboardArray[5] =='XXX':
           case gameboardArray[6] + gameboardArray[7] + gameboardArray[8] =='XXX':
           case gameboardArray[0] + gameboardArray[3] + gameboardArray[6] =='XXX': 
           case gameboardArray[1] + gameboardArray[4] + gameboardArray[7] =='XXX':
           case gameboardArray[2] + gameboardArray[5] + gameboardArray[8] =='XXX':
           case gameboardArray[0] + gameboardArray[4] + gameboardArray[8] =='XXX':
           case gameboardArray[2] + gameboardArray[4] + gameboardArray[6] =='XXX': 
                document.getElementById('winText').textContent='Player One Wins!';
                document.getElementById('resetText').textContent='Please Click Restart';
                end=1;
                break;
            case gameboardArray[0] + gameboardArray[1] + gameboardArray[2] =='OOO':
            case gameboardArray[3] + gameboardArray[4] + gameboardArray[5] =='OOO':
            case gameboardArray[6] + gameboardArray[7] + gameboardArray[8] =='OOO':
            case gameboardArray[0] + gameboardArray[3] + gameboardArray[6] =='OOO': 
            case gameboardArray[1] + gameboardArray[4] + gameboardArray[7] =='OOO':
            case gameboardArray[2] + gameboardArray[5] + gameboardArray[8] =='OOO':
            case gameboardArray[0] + gameboardArray[4] + gameboardArray[8] =='OOO':
            case gameboardArray[2] + gameboardArray[4] + gameboardArray[6] =='OOO': 
                 document.getElementById('winText').textContent='Player Two Wins!';
                 document.getElementById('resetText').textContent='Please Click Restart';
                 end=1;
                 break;

        }

    };
 
      
             
     
     
     return {
       checkValidMove, checkWinner
     };
 })();

//player object factory
const Player = (name,color) => {
  
    return {name,color};
};

//start of main program:  
//declare end flag
let end=0;


//declare 2 players
const playerX = Player('X','red');
const playerO = Player('O','blue');

//player X as first currentPlayer
let currentPlayer = playerX;


//main logic, event delegation
document.addEventListener('click',function(e){
    if((e.target.className== 'gameBoard')&
        (end==0)){
        //get index
        let index=e.target.dataset.index;
        let element=e.target

        //move in Gameboard and update gameboard array
        Gameboard.playerMove(currentPlayer, index,element);


    }
});