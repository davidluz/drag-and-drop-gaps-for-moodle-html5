//Gera a lógica dos handler dinamicamente
dropHandler =[];
for(var i=1; i<11; i++){
 
dropHandler[i] = function () {

this.executeDropHandler = function(){
 // Posição 1
                if (drag[i].x>24 && drag[i].x<144 && drag[i].y>49 && drag[i].y<99){
                drag[i].x = 25;
                drag[i].y = 50;
           }
        
            // Posição 2  
            if (drag[i].x>150 && drag[i].x<270 && drag[i].y>49 && drag[i].y<99  ){
                drag[i].x = 150;
                drag[i].y = 50;
           }
          
            // Posição 3  
            if (drag[i].x>275 && drag[i].x<395 && drag[i].y>49 && drag[i].y<99  ){
                drag[i].x = 275;
                drag[i].y = 50;
           }
         
            // Posição 4 
            if (drag[i].x>400 && drag[i].x<520 && drag[i].y>49 && drag[i].y<99  ){
                drag[i].x = 400;
                drag[i].y = 50;
           }
           
             // Posição 5 
            if (drag[i].x>525 && drag[i].x<645 && drag[i].y>49 && drag[i].y<99  ){
                drag[i].x = 525;
                drag[i].y = 50;
           } 
           
               // Posição 6 
            if (drag[i].x>24 && drag[i].x<144 && drag[i].y>99 && drag[i].y<140  ){
                drag[i].x = 25;
                drag[i].y = 100;
           } 
           
               // Posição 7 
            if (drag[i].x>150 && drag[i].x<270 && drag[i].y>99 && drag[i].y<140  ){
                drag[i].x = 150;
                drag[i].y = 100;
           } 
           
              // Posição 8 
            if (drag[i].x>275 && drag[i].x<395 && drag[i].y>99 && drag[i].y<140  ){
                drag[i].x = 275;
                drag[i].y = 100;
           } 
           
             // Posição 9 
            if (drag[i].x>400 && drag[i].x<520  && drag[i].y>99 && drag[i].y<140  ){
                drag[i].x = 400;
                drag[i].y = 100;
           } 
          // Posição 10 
            if (drag[i].x>525 && drag[i].x<645 && drag[i].y>99 && drag[i].y<140  ){
                drag[i].x = 525;
                drag[i].y = 100;
           }

console.log('rodou 1x');		   
}

}
}
