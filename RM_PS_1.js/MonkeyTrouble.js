//two monkeys are in trouble if both are smiling or neither is smiling return true//

var monkeyTrouble=function(aSmile,bSmile){
    if((aSmile == true) && (bSmile== true)){
        return true;
    }
    else if((aSmile == false) && (bSmile== false)){
        return true;
    } 
    else {
        return false;
    }
};
