//Return true if it is not a weekday or vacation//

var sleepIn=function(weekday,vacation){
    if
       (( weekday == false) ||
    (vacation == true))
    {
return true;
}
else{

 return false;
}
}
console.log(sleepIn(false, false)); // true
console.log(sleepIn(true, false));  // false
console.log(sleepIn(true, true));   // true