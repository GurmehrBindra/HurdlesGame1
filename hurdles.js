class Hurdle{
    constructor(){

    }

    getState(){
      var gameStateRef= database.ref("gameState");
      gameStateRef.on("value",function(data){
          gameState= data.val();
      })
    }

    update(state){
        gameState= database.ref("/").update({
            gameState:state
        })
    }

    async start(){
        if (gameState===0) {
            player= new Player();
            var playerCountRef= await database.ref("playerCount").once("value");  
        }

        if(playerCountRef.exists()){
            playerCount= playerCountRef.val();
            player.getCount();   
        }
        form= new Form();
        form.display();
     }

     play(){
        form.hide();
        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            background("#C68767");
            var index = 0;
      
            var x = 175;
            var y;
      
            for(var plr in allPlayers){
              
              index = index + 1 ;
      
              x = x + 200;
              //use data form the database to display the cars in y direction
              y = displayHeight - allPlayers[plr].distance;
              athletes[index-1].x = x;
              athletes[index-1].y = y;
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=10
            player.update();
          }
      
          if (player.distance>3860) {
            gameState= 2;
            player.rank+=1;
            Player.updateAthletesAtEnd(player.rank);
          } 
      
          
        }
        end(){
          console.log("GAME ENDED");
          //game.update(2);
          console.log(player.rank);
     }
    
}