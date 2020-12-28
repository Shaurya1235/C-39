class Game {
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })

    }

    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        if(gameState === 0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form()
            form.display();
        }

        car1 = createSprite(100,200);
        car1.addImage("carl",car1_img);
        car2 = createSprite(300,200);
        car2.addImage("car2",car2_img);
        car3 = createSprite(500,,200);
        car3.addImage("car3",car3_img);
        car4 = createSprite(700,200);
        car4 = addImage("car4");
        cars = [car1,car2,car3,car4,];
    }

    play(){
        form.hide();

        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            background(rbg(198,135,103));
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);

            //var display_position = 100;
            

            display_position+=20
            textSize(15);
            text(allPLayers[plr].name + ":" + allPlayers[plr].distance,120,display_position)
            }
        }
        
        if(keyIsDown(UP_ARROW)&& player.index !==null){
            player.distance +=50
            player.update();
        }
    }
}