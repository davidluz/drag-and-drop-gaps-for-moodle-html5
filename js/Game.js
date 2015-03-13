/*!
 * HTML5 Drag and Drop with gaps for Moodle v1.0.0
 * http://github.com/davidluz
 * Date: 2015-01-03 
 */

Atividade1 = {};

//States da Atividade
Atividade1.Game = function(){ }; 
Atividade1.Play = function(){ }; 
Atividade1.Feedback = function(){ }; 
 

//Global configuration
var game = new Phaser.Game(680, 450, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update});

function preload(){

game.load.image('bg',    'imgs/bg.png');
game.load.image('drag1', 'imgs/drag1.png');
game.load.image('drag2', 'imgs/drag2.png');
game.load.image('drag3', 'imgs/drag3.png');
game.load.image('drag4', 'imgs/drag4.png');
game.load.image('drag5', 'imgs/drag5.png');
game.load.image('drag6', 'imgs/drag6.png');
game.load.image('drag7', 'imgs/drag7.png');
game.load.image('drag8', 'imgs/drag8.png');
game.load.image('drag9', 'imgs/drag9.png');
game.load.image('drag10', 'imgs/drag10.png');
game.load.image('drop', 'imgs/drop.png');
game.load.image('responder', 'imgs/responder.png');
game.load.image('responder2','imgs/responder2.png');
game.load.image('acerto','imgs/acerto.png');
game.load.image('erro','imgs/erro.png');


}




function create(){

//Defini��o das posi��es no grid
posicao1 = new Object();
posicao1.x = 25;
posicao1.y = 50;

posicao2 = new Object();
posicao2.x = 150;
posicao2.y = 50;

posicao3 = new Object();
posicao3.x = 275;
posicao3.y = 50;

posicao4 = new Object();
posicao4.x = 400;
posicao4.y = 50;

posicao5 = new Object();
posicao5.x = 525;
posicao5.y = 50;

posicao6 = new Object();
posicao6.x = 25;
posicao6.y = 100;

posicao7 = new Object();
posicao7.x = 150;
posicao7.y = 100;

posicao8 = new Object();
posicao8.x = 275;
posicao8.y = 100;

posicao9 = new Object();
posicao9.x = 400;
posicao9.y = 100;

posicao10 = new Object();
posicao10.x = 525;
posicao10.y = 100;


game.stage.backgroundColor = '#fff';
bg = game.add.sprite(0, 0, 'bg');

//Gera os Drops dinamicamente
drop = [];
for(var i=1; i<11;i++) {
var xPosition = eval('posicao'+i+'.x');
var yPosition = eval('posicao'+i+'.y');
drop[i] = game.add.sprite(xPosition, yPosition,'drop');
}

//Gera os drags dinamicamente

drag = [];
for(var i=1; i<11;i++){
var xPosition = eval('posicao'+i+'.x');
var yPosition = eval('posicao'+i+'.y');
var currentDrag = 'drag'+i;
var currentDropHandler = 'dropHandler['+i+']';
console.log(currentDropHandler);
drag[i] = game.add.sprite(xPosition, yPosition+100,currentDrag);
drag[i].inputEnabled = true;
drag[i].input.enableDrag(true);
drag[i].events.onDragStop.add(largar, this); // o this j� indica que a fun��o ser� aplicada neste objeto
	}

function largar(dropedItem){
				for (var i=1; i<11; i++){
                						
				    var boundsA = drop[i].getBounds();
					var boundsB = dropedItem.getBounds();

					if(Phaser.Rectangle.intersects(boundsA, boundsB)){
    				dropedItem.x = drop[i].x;
    				dropedItem.y = drop[i].y;
    				}

				}

			}

acerto = []; 
for(var i=1; i<11;i++){
var xPosition = eval('posicao'+i+'.x');
var yPosition = eval('posicao'+i+'.y');
acerto[i] = game.add.sprite(xPosition, yPosition,'acerto');
acerto[i].visible = false; 	
}

erro = []; 
for(var i=1; i<11;i++){
var xPosition = eval('posicao'+i+'.x');
var yPosition = eval('posicao'+i+'.y');
erro[i] = game.add.sprite(xPosition, yPosition,'erro');
erro[i].visible = false; 	
}

responder = game.add.sprite(posicao10.x,300, 'responder');
responder.inputEnabled = true;

} //<--Create acaba aqui	


function update(){

	
}

function goToPlay(){

//game.state.start('Play');
}




