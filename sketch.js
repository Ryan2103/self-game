var boyImg,boy
var bgImg,boyImg1,bg
var boyJ
var stone,stoneImg
var ground
var stoneGroup
var coin ,coinGroup

function preload(){
boyImg=loadAnimation("images/r1.png","images/r2.png","images/r3.png","images/r4.png")
bgImg=loadImage("images/bg2.jpg")
boyImg1=loadImage("images/stand.png")
boyJ=loadAnimation("images/j1.png","images/j2.png","images/j3.png","images/j4.png")
stoneImg=loadImage("images/stone.png")

}


function setup() {
  createCanvas(1200,400);
 /* for(var i=100; i<1200; i=i+250 ){
  stone=createSprite(i,random(100,400),50,50)
  stone.addImage("stone",stoneImg)
  stone.scale=0.9 
stone.velocityX=-2
  }*/

  bg=createSprite(400,200,400,200)
 bg.addImage("bg",bgImg)
  bg.scale=1
  boy=createSprite(100, 100, 50, 50);
boy.addImage("boyImg1",boyImg1)
boy.addAnimation("boy",boyImg)
boy.addAnimation("jump",boyJ)
//boy.collide(stone)

ground=createSprite(600,380,1200,10)
ground.visible=false

stoneGroup=new Group ()

boy.debug=false
boy.setCollider("rectangle",0,0,40,100)
}


function draw() {
  background(0)
 if (bg.x <100){
  bg.x = bg.width/2;
 } 

 bg.velocityX=-4

  boy.collide(ground)
  boy.collide(stoneGroup)
  boy.addImage("boyImg1",boyImg1)


  if(boy.velocityX==0){
    boy.changeAnimation("boyImg1",boyImg1)
  }

  if(boy.collide(stoneGroup)){
boy.changeAnimation("boyImg1",boyImg1)

  }

  if(keyDown(RIGHT_ARROW)){
    boy.x=boy.x+5
    boy.changeAnimation("boy",boyImg)
  }

  if(keyDown(LEFT_ARROW)){
    boy.x=boy.x-5
    boy.changeAnimation("boy",boyImg)
  }

  if(keyDown("space")){
    boy.velocityY=-8
   boy.changeAnimation("jump",boyJ)
  }
  boy.velocityY=boy.velocityY+0.4

  if(frameCount%50==0){
  spawnStone()
  }
spawnCoin()

  drawSprites();
}

function spawnStone(){
  if(frameCount%150===0){
stone=createSprite(1100,Math.round(random(100,330)),100,10)
stone.addImage("stone",stoneImg)
stone.scale=0.9
stone.velocityX=-2
stone.lifetime=1000
stoneGroup.add(stone)
//boy.collide(stone)
  }
}

function spawnCoin(){
  if(frameCount%150===0){
coin=createSprite(1100,Math.round(random(100,330)),100,10)
//coin.addImage("stone",stoneImg)
coin.scale=0.9
coin.velocityX=-2
coin.lifetime=1000
//coinGroup.add(coin)
//boy.collide(stone)
  }
}