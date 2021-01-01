
var canvas ;
var ball;
var player1 , player2;
var player3 , player4 ;
var x= 200;
var y=   200 ;

function preload(){
  Ball = loadImage("images/53283.svg")


}
function setup(){
canvas = createCanvas(displayWidth , displayHeight)

player1 = createSprite(200,100,20,50);
 player2 = createSprite(300,100,20,50);
 player3 = createSprite(350,100,20,50);
 player4 = createSprite(400,100,20,50);
 players = [player1,player2,player3,player4]
 ball = createSprite(displayWidth/2 , displayHeight/2 , 10,10)
ball.addImage(Ball)
ball.scale = 0.1;


}
function draw(){
  
  background("lightgreen")
  
for(var plr in players ){
  console.log(players[plr].x-ball.x , ball.x-players[plr].x)
   if(players[plr].x-ball.x<x || ball.x-players[plr].x< x){
     x = players[plr].x ;
     nearPlayer = players[plr];
     console.log(nearPlayer)
   }

}



drawSprites();
}