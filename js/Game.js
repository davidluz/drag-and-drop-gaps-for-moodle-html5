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
var game = new Phaser.Game(680, 360, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update});




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

//Definição das posições no grid
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

 
// grupo com drags
 drags = game.add.group();	   


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

dropHandler = function(){
return dropHandler[i];
} 

drag[i].events.onDragStop.add(largar, this);


function largar(){
console.log("largou");
}

}

}

















/*
drag1 = game.add.sprite(drop1_x,200,'drag1');
drag1.inputEnabled = true;
drag1.input.enableDrag(true);

drag2 = game.add.sprite(drop2_x,200,'drag2');
drag2.inputEnabled = true;
drag2.input.enableDrag(true);

drag3 = game.add.sprite(drop3_x,200,'drag3');
drag3.inputEnabled = true;
drag3.input.enableDrag(true);


drag4 = game.add.sprite(drop4_x,200,'drag4');
drag4inputEnabled = true;
drag4.input.enableDrag(true);

drag5 = game.add.sprite(drop5_x,200,'drag5');
drag5.inputEnabled = true;
drag5.input.enableDrag(true);

drag6 = game.add.sprite(drop6_x,200,'drag6');
drag6.inputEnabled = true;
drag6.input.enableDrag(true);

drag7 = game.add.sprite(drop7_x,250,'drag7');
drag7.inputEnabled = true;
drag7.input.enableDrag(true);

drag8 = game.add.sprite(drop8_x,250,'drag8');
drag8.inputEnabled = true;
drag8.input.enableDrag(true);

drag9 = game.add.sprite(drop9_x,250,'drag9');
drag9.inputEnabled = true;
drag9.input.enableDrag(true);

drag10 = game.add.sprite(drop10_x,250,'drag10');
drag10.inputEnabled = true;
drag10.input.enableDrag(true);



acerto1 = game.add.sprite(drop1_x,(drop1_y-10),'acerto');
acerto2 = game.add.sprite(drop2_x,(drop2_y-10),'acerto');
acerto3 = game.add.sprite(drop3_x,(drop3_y-10),'acerto');
acerto4 = game.add.sprite(drop4_x,(drop4_y-10),'acerto');
acerto5 = game.add.sprite(drop5_x,(drop5_y-10),'acerto');
acerto6 = game.add.sprite(drop6_x,(drop6_y-10),'acerto');
acerto7 = game.add.sprite(drop7_x,(drop7_y-10),'acerto');
acerto8 = game.add.sprite(drop8_x,(drop8_y-10),'acerto');
acerto9 = game.add.sprite(drop9_x,(drop9_y-10),'acerto');
acerto10 = game.add.sprite(drop10_x,(drop10_y-10),'acerto');

erro1 = game.add.sprite(drop1_x,(drop1_y-10),'erro');
erro2 = game.add.sprite(drop2_x,(drop2_y-10),'erro');
erro3 = game.add.sprite(drop3_x,(drop3_y-10),'erro');
erro4 = game.add.sprite(drop4_x,(drop4_y-10),'erro');
erro5 = game.add.sprite(drop5_x,(drop5_y-10),'erro');
erro6 = game.add.sprite(drop6_x,(drop6_y-10),'erro');
erro7 = game.add.sprite(drop7_x,(drop7_y-10),'erro');
erro8 = game.add.sprite(drop8_x,(drop8_y-10),'erro');
erro9 = game.add.sprite(drop9_x,(drop9_y-10),'erro');
erro10 = game.add.sprite(drop10_x,(drop10_y-10),'erro');






acerto1.visible = false;
acerto2.visible = false;
acerto3.visible = false;
acerto4.visible = false;
acerto5.visible = false;
acerto6.visible = false;
acerto7.visible = false;
acerto8.visible = false;
acerto9.visible = false;
acerto10.visible = false;


erro1.visible = false;
erro2.visible = false;
erro3.visible = false;
erro4.visible = false;
erro5.visible = false;
erro6.visible = false;
erro7.visible = false;
erro8.visible = false;
erro9.visible = false;
erro10.visible = false;

responder = game.add.sprite(drop10_x,200, 'responder');
responder.inputEnabled = true;

// Controla o Drop dos itens 	
	function dropHandler() {
        // Posição 1
                if (drag1.x>24 && drag1.x<144 && drag1.y>49 && drag1.y<99){
                drag1.x = 25;
                drag1.y = 50;
           }
        
            // Posição 2  
            if (drag1.x>150 && drag1.x<270 && drag1.y>49 && drag1.y<99  ){
                drag1.x = 150;
                drag1.y = 50;
           }
          
            // Posição 3  
            if (drag1.x>275 && drag1.x<395 && drag1.y>49 && drag1.y<99  ){
                drag1.x = 275;
                drag1.y = 50;
           }
         
            // Posição 4 
            if (drag1.x>400 && drag1.x<520 && drag1.y>49 && drag1.y<99  ){
                drag1.x = 400;
                drag1.y = 50;
           }
           
             // Posição 5 
            if (drag1.x>525 && drag1.x<645 && drag1.y>49 && drag1.y<99  ){
                drag1.x = 525;
                drag1.y = 50;
           } 
           
               // Posição 6 
            if (drag1.x>24 && drag1.x<144 && drag1.y>99 && drag1.y<140  ){
                drag1.x = 25;
                drag1.y = 100;
           } 
           
               // Posição 7 
            if (drag1.x>150 && drag1.x<270 && drag1.y>99 && drag1.y<140  ){
                drag1.x = 150;
                drag1.y = 100;
           } 
           
              // Posição 8 
            if (drag1.x>275 && drag1.x<395 && drag1.y>99 && drag1.y<140  ){
                drag1.x = 275;
                drag1.y = 100;
           } 
           
             // Posição 9 
            if (drag1.x>400 && drag1.x<520  && drag1.y>99 && drag1.y<140  ){
                drag1.x = 400;
                drag1.y = 100;
           } 
          // Posição 10 
            if (drag1.x>525 && drag1.x<645 && drag1.y>99 && drag1.y<140  ){
                drag1.x = 525;
                drag1.y = 100;
           } 


         if(drag1.x == drop1_x){
		responder = game.add.sprite(drop10_x,200, 'responder2');
	    }


           
        
        }


function verificaPosicaoResposta(){

}


function avaliaResposta (){
    if(drag1.x == drop1_x){
    acerto1.visible = true;
    acerto1.bringToTop;
    }

    else{
    erro1.visible = true;
    acerto1.bringToTop;
    }

}


drag1.events.onDragStop.add(dropHandler, this);
responder.events.onInputDown.add(avaliaResposta, this);


*/


function update(){

	
}

function goToPlay(){

//game.state.start('Play');
}




