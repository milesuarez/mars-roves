// Rover Object Goes Here
// ======================

var rover = {"direction":"N", "row":0 ,"column":0,"travelLog":["0,0"]};
var travel = "rffrfflfrffblbb";

// ======================


function turnLeft(rover){
    switch (rover.direction) {
        case "N": 
            rover.direction = "W";
            break;
        
        case "W":
            rover.direction = "S";
            break;
            
        case "S": 
            rover.direction = "E";
            break;
        
        case "E":
            rover.direction = "N";
            break;
    }
  console.log("turnLeft was called!",rover.direction);
}

function turnRight(rover){
    switch (rover.direction) {
        case "N": 
            rover.direction = "E";
            break;
        
        case "E":
            rover.direction = "S";
            break;
            
        case "S": 
            rover.direction = "W";
            break;
        
        case "W":
            rover.direction = "N";
            break;
    }
  console.log("turnRight was called!",rover.direction);
}

function moveForward(rover){
    var newPosition;
    var mensaje;
    
    switch (rover.direction) {
        case "N":
            newPosition = rover.row-1;
            if (newPosition >= 0){
                rover.row = newPosition;
                mensaje = "Rover was moved Forward";
            }
            else { mensaje = "Rover could not be moved, out border";}
            
            break;
        
        case "E":
            newPosition = rover.column+1;
            
            if (newPosition <= 9){
                rover.column = newPosition;
                mensaje = "Rover was moved Forward";
            }
            else { mensaje = "Rover could not be moved, out border";}
            
            break;
            
        case "S": 
            newPosition = rover.row+1;
            if (newPosition <= 9){
                rover.row = newPosition;
                mensaje = "Rover was moved Forward";
            }
            else { mensaje = "Rover could not be moved, out border";}
            
            break;
        
        case "W":
            newPosition = rover.column-1;
            if (newPosition >= 0){
                rover.column = newPosition;
                mensaje = "Rover was moved Forward";
            }
            else { mensaje = "Rover could not be moved, out border";}
            
            break;
    }
    
    console.log(mensaje,rover);
    
    if (mensaje=="Rover was moved Forward"){  
        rover.travelLog.push(rover.row+","+rover.column);
    }
}

function moveBackward(rover){
    var newPosition;
    var mensaje;
    
    switch (rover.direction) {
        case "N":
            newPosition = rover.row+1;
            if (newPosition <= 9){
                rover.row = newPosition;
                mensaje = "Rover was moved Backward";
            }
            else { mensaje = "Rover could not be moved";}
            
            break;
        
        case "E":
            newPosition = rover.column-1;
            if (newPosition >= 0){
                rover.column = newPosition;
                mensaje = "Rover was moved Backward";
            }
            else { mensaje = "Rover could not be moved";}
            
            break;
            
        case "S": 
            newPosition = rover.row-1;
            if (newPosition >= 0){
                rover.row = newPosition;
                mensaje = "Rover was moved Backward";
            }
            else { mensaje = "Rover could not be moved";}
            
            break;
        
        case "W":
            newPosition = rover.column+1;
            if (newPosition <= 9){
                rover.column = newPosition;
                mensaje = "Rover was moved Backward";
            }
            else { mensaje = "Rover could not be moved";}
            
            break;
    }
    
    console.log(mensaje,rover);
    
    if (mensaje=="Rover was moved Backward"){  
        rover.travelLog.push(rover.row+","+rover.column);
    }
}



function movimientos(rover,move) {
    
    for (var i = 0; i < move.length; i++){
        switch (move[i]) {
            case "b": 
                moveBackward(rover);
                break;
            case "f": 
                moveForward(rover);
                break;
            case "r": 
                turnRight(rover);
                break;
            case "l": 
                turnLeft(rover);
                break;
            default: console.log("Invalid movement",rover);
        }
    }

}


console.log("movement",travel);

movimientos(rover,travel);
console.log("Recorrido: ",rover.travelLog);
