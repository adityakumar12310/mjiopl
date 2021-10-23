//Create variables here
var dog, happyDog, database, foodS, foodStock
function preload()
{
  dogImg= loadImage("images/dogImg.png");
  happyDogImg=loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
  database=firebase.database()
	createCanvas(800, 700);
  dog=createSprite(250,400,40,35);
  dog.addImage("dogImg",dogImg);
  dog.scale=0.2
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);


}


function draw() {  
background("lime")
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("dogImg",happyDogImg);
  }

  drawSprites();
  text("Food remaining : "+foodS,170,200);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
   
  //add styles here

}

function readStock(data){
  foodS=data.val();

}


function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}



