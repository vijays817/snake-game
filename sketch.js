
var snake;
var food;
var group;



function setup(){
    var canvas = createCanvas(600,600);
  snake=createSprite(100,50,55,55);
food=createSprite(70,250,20,20);
snake.shapeColor="green";
food.shapeColor="red";
group=new Group();
}

function draw(){
    background("black");
   
move();

checkTouch();

    drawSprites();
}

function move (){

    if (keyDown(UP_ARROW)){
        snake.setSpeedAndDirection(4,-90);
    }

    if (keyDown(DOWN_ARROW)){
        snake.setSpeedAndDirection(4,90);
    }

    if (keyDown(LEFT_ARROW)){
        snake.setSpeedAndDirection(4,180);
    }

    if (keyDown(RIGHT_ARROW)){
        snake.setSpeedAndDirection(4,0);
    }
}

function checkTouch(){
    if (snake.isTouching(food)){
        food.x=Math.round(random(20,550));
        food.y=Math.round(random(20,550));
        var body=createSprite(200,200,50,50);
        group.add(body);

    }
    for (var i=group.length-1;i>0;i--){
        console.log(group.length);
        group.get(i).x=group.get(i-1).x;
        group.get(i).y=group.get(i-1).y;
    }
}