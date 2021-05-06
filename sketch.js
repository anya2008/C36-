var game, form, player;
var gameState=0;
var playerCount=0;

function setup(){
    database = firebase.database();
    createCanvas(500,500);

    game = new Game();
    game.getState();
    game.start();

    /*ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballref = database.ref("ball/position")
    ballref.on("value",readpos)*/

}

function draw(){
    background("white");
    
}

/*function changePosition(x,y){
    database.ref("ball/position") .set({
        x: position.x + x, 
        y:position.y + y,
    })
}

function readpos(data){
    position = data.val()
    ball.x = position.x
    ball.y = position.y 
}*/