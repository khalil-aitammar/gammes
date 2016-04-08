

/*Le pouvoir de Thor level 1 & 2 & 3 & 4*/ 

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); 
var lightY = parseInt(inputs[1]); 
var initialTX = parseInt(inputs[2]);
var initialTY = parseInt(inputs[3]);

var thorX = initialTX;
var thorY = initialTY;


while (true) {
    var remainingTurns = parseInt(readline());

    var directionX = "";
    var directionY = "";
    
    if (thorX > lightX) {
        directionX = "W";
        thorX--;
    } else if (thorX < lightX) {
        directionX = "E";
        thorX++;
    }

    if (thorY > lightY) {
        directionY = "N";
        thorY--;
    } else if (thorY < lightY){
        directionY = "S";
        thorY++;
    }    

  

    print(directionY + directionX);
}
