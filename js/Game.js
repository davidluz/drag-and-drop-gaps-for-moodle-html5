/*!
 * HTML5 Drag and Drop for Moodle v1.0.0
 * http://github.com/davidluz
 * Date: 2015-01-03 
 */
 
 
 //Atividade1 Ã© um objeto
Atividade1 = {};

//States da Atividade
Atividade1.Game = function(){ }; 
Atividade1.Play = function(){ }; 
Atividade1.Feedback = function(){ }; 
 

//Global configuration
var game = new Phaser.Game(800, 450, Phaser.CANVAS, 'game', { preload: preload, create: create, update: update});

function preload(){

game.load.image('bg', 'imgs/bg.png');
game.load.image('drag1', 'imgs/drag1.png');
game.load.image('drag2', 'imgs/drag2.png');
game.load.image('drop', 'imgs/drop.png');
game.load.image('responder', 'imgs/responder.png');
game.load.image('acerto','imgs/acerto.png');
game.load.image('erro','imgs/erro.png');

}




function create(){
    

//Setar as respostas
var gabarito1 = false;
var gabarito2 = false;
var gabarito3 = false;
var gabarito4 = false;
var gabarito5 = false;
var gabarito6 = false;
var gabarito7 = false;
var gabarito8 = false;
var gabarito9 = false;
var gabarito10 = false;


//Variáveis relativas
var drop1_x = 30 ;
var drop1_y = 50 ;
var drop2_x = 180 ;
var drop2_y = 50 ;
var drop3_x = 330 ;
var drop3_y = 50 ;
var drop4_x = 480 ;
var drop4_y = 50 ;
var drop5_x = 630 ;
var drop5_y = 50 ;
var drop6_x = 30 ;
var drop6_y = 100 ;
var drop7_x = 180 ;
var drop7_y = 100 ;
var drop8_x = 330 ;
var drop8_y = 100 ;
var drop9_x = 480 ;
var drop9_y = 100 ;
var drop10_x = 630 ;
var drop10_y = 100 ;



//Sprites do State
game.stage.backgroundColor = '#fff';
bg = game.add.sprite(0, 0, 'bg');


drop1 = game.add.sprite(drop1_x,drop1_y,   'drop');
drop2 = game.add.sprite(drop2_x,drop2_y,   'drop');
drop3 = game.add.sprite(drop3_x,drop3_y,   'drop');
drop4 = game.add.sprite(drop4_x,drop4_y,   'drop');
drop5 = game.add.sprite(drop5_x,drop5_y,   'drop');
drop6 = game.add.sprite(drop6_x,drop6_y,   'drop');
drop7 = game.add.sprite(drop7_x,drop7_y,   'drop');
drop8 = game.add.sprite(drop8_x,drop8_y,    'drop');
drop9 = game.add.sprite(drop9_x,drop9_y,    'drop');
drop10 = game.add.sprite(drop10_x,drop10_y, 'drop');

acerto1 = game.add.sprite(drop1_x,(drop1_y-11),'acerto');
acerto2 = game.add.sprite(drop2_x,(drop2_y-11),'acerto');
acerto3 = game.add.sprite(drop3_x,(drop3_y-11),'acerto');
acerto4 = game.add.sprite(drop4_x,(drop4_y-11),'acerto');
acerto5 = game.add.sprite(drop5_x,(drop5_y-11),'acerto');
acerto6 = game.add.sprite(drop6_x,(drop6_y-11),'acerto');
acerto7 = game.add.sprite(drop7_x,(drop7_y-11),'acerto');
acerto8 = game.add.sprite(drop8_x,(drop8_y-11),'acerto');
acerto9 = game.add.sprite(drop9_x,(drop9_y-11),'acerto');
acerto10 = game.add.sprite(drop10_x,(drop10_y-11),'acerto');

erro1 = game.add.sprite(drop1_x,(drop1_y-11),'erro');
erro2 = game.add.sprite(drop2_x,(drop2_y-11),'erro');
erro3 = game.add.sprite(drop3_x,(drop3_y-11),'erro');
erro4 = game.add.sprite(drop4_x,(drop4_y-11),'erro');
erro5 = game.add.sprite(drop5_x,(drop5_y-11),'erro');
erro6 = game.add.sprite(drop6_x,(drop6_y-11),'erro');
erro7 = game.add.sprite(drop7_x,(drop7_y-11),'erro');
erro8 = game.add.sprite(drop8_x,(drop8_y-11),'erro');
erro9 = game.add.sprite(drop9_x,(drop9_y-11),'erro');
erro10 = game.add.sprite(drop10_x,(drop10_y-11),'erro');



drag1 = game.add.sprite(300,200,'drag1');
drag1.inputEnabled = true;
drag1.input.enableDrag(true);


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

responder = game.add.sprite(630,200, 'responder');
responder.inputEnabled = true;

// Controla o Drop dos itens 	
	function dropHandler() {
        // Posição 1
                if (drag1.x>29 && drag1.x<149 && drag1.y<79 && drag1.y>49){
                drag1.x = 30;
                drag1.y = 50;
           }
        
            // Posição 2  
            if (drag1.x>179 && drag1.x<299 && drag1.y<79 && drag1.y>49  ){
                drag1.x = 180;
                drag1.y = 50;
           }
          
            // Posição 3  
            if (drag1.x>329 && drag1.x<449 && drag1.y<79 && drag1.y>49  ){
                drag1.x = 330;
                drag1.y = 50;
           }
         
            // Posição 4 
            if (drag1.x>479 && drag1.x<599 && drag1.y<79 && drag1.y>49  ){
                drag1.x = 480;
                drag1.y = 50;
           }
           
             // Posição 5 
            if (drag1.x>629 && drag1.x<749 && drag1.y<79 && drag1.y>49  ){
                drag1.x = 630;
                drag1.y = 50;
           } 
           
               // Posição 6 
            if (drag1.x>29 && drag1.x<179 && drag1.y<120 && drag1.y>89  ){
                drag1.x = 30;
                drag1.y = 100;
           } 
           
               // Posição 7 
            if (drag1.x>179 && drag1.x<329 && drag1.y<120 && drag1.y>89  ){
                drag1.x = 180;
                drag1.y = 100;
           } 
           
              // Posição 8 
            if (drag1.x>329 && drag1.x<479 && drag1.y<120 && drag1.y>89  ){
                drag1.x = 330;
                drag1.y = 100;
           } 
           
             // Posição 9 
            if (drag1.x>479 && drag1.x<629  && drag1.y<120 && drag1.y>89  ){
                drag1.x = 480;
                drag1.y = 100;
           } 
          // Posição 10 
            if (drag1.x>629 && drag1.x<779 && drag1.y<120 && drag1.y>89  ){
                drag1.x = 630;
                drag1.y = 100;
           } 
        
        }


function verificaPosicaoResposta(){

}


function avaliaResposta (){
    if(drag1.x == 30){
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
}

function update(){

}

function goToPlay(){

//game.state.start('Play');
}






