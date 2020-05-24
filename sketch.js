var database;
var form;
var user;
var peopleCount=0;
var  line;
function setup() {
  createCanvas(displayWidth,displayHeight*1.5);
  database = firebase.database();
  form = new Form();
  form.display();
  line =createSprite(675,60,400,7);
  line.shapeColor="black"
  User = new UserData();
  User.getCount();
 
}

function draw() {
  background("white");
  drawSprites();
}