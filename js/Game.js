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

// Gabarito


//Definição das posições no grid
posicao1 = new Object();
posicao1.status = 0;
posicao1.x = 25;
posicao1.y = 50;

posicao2 = new Object();
posicao2.status = 0;
posicao2.x = 150;
posicao2.y = 50;

posicao3 = new Object();
posicao3.status = 0;
posicao3.x = 275;
posicao3.y = 50;

posicao4 = new Object();
posicao4.status = 0;
posicao4.x = 400;
posicao4.y = 50;

posicao5 = new Object();
posicao5.status = 0;
posicao5.x = 525;
posicao5.y = 50;

posicao6 = new Object();
posicao6.status = 0;
posicao6.x = 25;
posicao6.y = 100;

posicao7 = new Object();
posicao7.status = 0;
posicao7.x = 150;
posicao7.y = 100;

posicao8 = new Object();
posicao8.status = 0;
posicao8.x = 275;
posicao8.y = 100;

posicao9 = new Object();
posicao9.status = 0;
posicao9.x = 400;
posicao9.y = 100;

posicao10 = new Object();
posicao10.status = 0;
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
drop[i].name = i;
}

//Gera os drags dinamicamente

drag = [];
for(var i=1; i<11;i++){
var xPosition = eval('posicao'+i+'.x');
var yPosition = eval('posicao'+i+'.y');
var currentDrag = 'drag'+i;
var currentDropHandler = 'dropHandler['+i+']';
drag[i] = game.add.sprite(xPosition, yPosition+100,currentDrag);
drag[i].inputEnabled = true;
drag[i].input.enableDrag(true);
drag[i].events.onDragStop.add(largar, this); // o this já indica que a função será aplicada neste objeto
drag[i].name = i;
drag[i].resposta = false;

}

function largar(dropedItem){

              
				for (var i=1; i<11; i++){
                	
                	//Executa se ocorrer a intesecção e se status da posição está como 0
        				
				    var boundsA = drop[i].getBounds();
					var boundsB = dropedItem.getBounds();
					if(Phaser.Rectangle.intersects(boundsA, boundsB)){
					dropedItem.x = drop[i].x;
    				dropedItem.y = drop[i].y;
    				drag[i].resposta = 1;
    		
    				}    
    				
				
				}

				//Testa se largou sobre outro drag

				for(var i=1; i<11; i++){
					var boundsA = dropedItem.getBounds();
					var boundsB = drag[i].getBounds();
					if(Phaser.Rectangle.intersects(boundsA, boundsB)&& boundsA!=boundsB){
						dropedItem.y = dropedItem.y+20;
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
responder.events.onInputDown.add(enviarResposta, this);


function enviarResposta(){

// Alterar valores aqui para mudar gabarito

// Resposta 1***************

for(var i=1; i<=10; i++){

if(drag[i].y == 50 || drag[1].y == 100) {
drag[i].resposta = 1;
}
  
else{
drag[i].resposta = 0;  
}
}
avaliaResposta();

}

function avaliaResposta(){

    //Avalia resposta 1
	if(drag[1].resposta==1){
		acerto[1].visible = true; 
	}
	else{
		erro[1].visible;
	}

	//Avalia resposta 2
	if(drag[2].resposta==1){
		acerto[2].visible = true; 
	}
	else{
		acerto[1].visible = true; 
	}

	//Avalia resposta 3
	if(drag[3].resposta==1){
		acerto[3].visible;
	}
	else{
		erro[3].visible;
	}

	//Avalia resposta 4
	if(drag[4].resposta==1){
		acerto[4].visible;
	}
	else{
		erro[4].visible;
	}

	//Avalia resposta 5
	if(drag[5].resposta==1){
		erro[5].visible;
	}
	else{
		console.log('errou');
	}
    //Avalia resposta 6
	if(drag[6].resposta==1){
		console.log('acertou');
	}
	else{
		console.log('errou');
	}
	
	//Avalia resposta 7
	if(drag[7].resposta==1){
		acerto[7].visible;
	}
	else{
		erro[7].visible;
	}

	//Avalia resposta 8
	if(drag[8].resposta==1){
		console.log('acertou');
	}
	else{
		console.log('errou');
	}
	//Avalia resposta 9
	if(drag[9].resposta==1){
		console.log('acertou');
	}
	else{
		console.log('errou');
	}

	//Avalia resposta 10
	if(drag[10].resposta==1){
		console.log('acertou');
	}
	else{
		console.log('errou');
	}



}
//**************************




} //<--Create acaba aqui	


function update(){


}

function goToPlay(){

//game.state.start('Play');
}




