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


game.stage.backgroundColor = '#fff';
bg = game.add.sprite(0, 0, 'bg');
drop1 = game.add.sprite(30,50,  'drop');
drop2 = game.add.sprite(180,50, 'drop');
drop3 = game.add.sprite(330,50, 'drop');
drop4 = game.add.sprite(480,50, 'drop');
drop5 = game.add.sprite(630,50, 'drop');
drop6 = game.add.sprite(30,100, 'drop');
drop7 = game.add.sprite(180,100, 'drop');
drop8 = game.add.sprite(330,100, 'drop');
drop9 = game.add.sprite(480,100, 'drop');
drop10 = game.add.sprite(630,100, 'drop');

acerto1 = game.add.sprite(139,59,'acerto');
acerto2 = game.add.sprite(289,59,'acerto');
acerto3 = game.add.sprite(439,59,'acerto');
acerto4 = game.add.sprite(589,59,'acerto');
acerto5 = game.add.sprite(739,59,'acerto');
acerto6 = game.add.sprite(139,109,'acerto');
acerto7 = game.add.sprite(289,109,'acerto');
acerto8 = game.add.sprite(439,109,'acerto');
acerto9 = game.add.sprite(589,109,'acerto');
acerto10 = game.add.sprite(739,109,'acerto');

erro1 = game.add.sprite(139,69,'erro');
erro2 = game.add.sprite(289,69,'erro');
erro3 = game.add.sprite(439,69,'erro');
erro4 = game.add.sprite(589,69,'erro');
erro5 = game.add.sprite(739,69,'erro');
erro6 = game.add.sprite(139,119,'erro');
erro7 = game.add.sprite(289,119,'erro');
erro8 = game.add.sprite(439,119,'erro');
erro9 = game.add.sprite(589,119,'erro');
erro10 = game.add.sprite(739,119,'erro');


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

drag1 = game.add.sprite(300,200,'drag1');
drag1.inputEnabled = true;
drag1.input.enableDrag(true);


drag1.events.onDragStop.add(dropHandler, this);
responder.inputEnabled = true;
responder.events.onInputDown.add(avaliaResposta, this);
}

function update(){

}

function goToPlay(){

//game.state.start('Play');
}






