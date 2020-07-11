var canvas, backgroundImg;
var gameState=0;
var playerCount;
var distance=0;
var database;

var form,player,game;
var allPlayers;
var athletes=[];
var athlete1,athlete2,athlete3,athlete4;

function setup(){
    canvas= createCanvas(700,500);
    database= firebase.database();
    game= new Hurdle();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===4){
     game.update(1);
    }

    if(gameState===1){
        clear();
        game.play();
    }
}