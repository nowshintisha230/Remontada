//01.solve Me First
//a function that returns the sum of two integers//
var solveMeFirst = function(a,b){
    return a+b;
}

//02.Multiply
//function that returns the product of two numbers//
var multiply = function(a,b){
    return a*b;
}

//03.Even or Odd
// a function that identifies even or odd number//
var evenOrOdd= function(number){
    if(number % 2 == 0){
        return "Even";
    }
    else {
return "Odd";
    }
}

//04.Return Negative
//return negative value of a number//
var makeNegative = function (number){
    if(number >0){
        return - number;
    }
    else  {
        return number;
    }

}

//05.Opposite Number
//Return Opposite Number//
var opposite = function (number){
    if(number >0){
        return - number;
    }
    else {
        return (-1)*number;
    }
}

//06.Simple Array sum
//Return the sum of all integers in an array//
var simpleArraySum=function (ar){
    let j=0;
for(let i=0;i< ar.length;i++){
    j=j+ar[i];
}
        return j;
};

//07.sleepIn
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

//08.monkeyTrouble
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

//09.sumDouble
//return sum of two integer but return double the sum when they equal//
var sumDouble=function(a,b){
    if( a != b){
        return a+b;
    }
    else{
        return 2*(a+b);
    }
}

//10.diff21
//return the absolute difference between n and 21,doubling it when n is greater than 21//
var diff21 = function(n) {
    if (n < 21) {
        return 21 - n;
    }
    else if (n > 21) {
        return 2 * (n - 21);
    }
    else {
        return 0;
    }
};

//11.parrotTrouble
//return true when a talking parrot is causing trouble outside the allowed hours of 7 through 20//
var parrotTrouble=function(talking,hour){
if(talking &&(hour<7 || hour >20))
{
    return true;
}
else{
return false;
}
}

//12.makes10
//return true if either number is 10 or their sum is 10//
var makes10 =function(a,b){
    if((a==10 || b==10) || (a+b ==10)){
        return true;
    }
    else{
        return false;
}
}

//13.nearHundred
//return true if n is within 10 of 100 or within 10 of 200//
var nearHundred= function(n){
    if((n>=90 && n<=110)|| (n>=190 && n<=210)){
        return true;
    }
    else{
    return false;
}
}

//14.posNeg
//return true when one number is positive and the other is negative.if negative is true both must be negative//
var posNeg = function(a, b, negative) {
    if (negative) {
        return a < 0 && b < 0;
    }
else{
    return (a < 0 && b > 0) ||
           (a > 0 && b < 0);
}
};

//15.notString
//add "not" to the beginning of a string unless it already starts with "not"
var notString=function(str){
    if(str.startsWith("not")){
        return str;
    }
    else{
    return "not" + str;
    }
}

//16.Compare the Triplets
//Compare two three-element score arrays and return how many points each person earns.//
var compareTriplets = function(a, b) {
 	let mina=0;
    let raju=0;
    for(let i=0;i<3;i++){
        if(a[i]>b[i]){
            mina++;
        }
        else if(a[i]<b[i]){
            raju++;
        }
    }
return[mina,raju];
 };

 //17. A Very Big Sum
//Return the sum of all values in an integer array.
var aVeryBigSum=function (ar){
    let  sum=0;
for(let i=0;i < ar.length;i++){
    sum=sum+ar[i];
}
        return sum;
};

//18. Staircase
//Create a right-aligned staircase of height n using # characters.
var staircase = function(n) {
 	for(let i=1;i<=n;i++){
        console.log(" ".repeat(n-i)+"#".repeat(i));
    }
 };

//19. Grading Students
//Round a grade up to the next multiple of 5 when it is close enough; keep grades below 38 unchanged.
var gradingStudents = function(grades) {
 	for(let i=0;i<grades.length;i++){
        if(grades[i]<38){
            continue;
        }
        let remainder=grades[i]%5;
     if(remainder==3 || remainder == 4){
            grades[i]=grades[i]+ (5 - remainder);
        }
    }
        return grades;
 };


//20.Time Conversion
//Convert a 12-hour AM/PM time string into 24-hour format.
var timeConversion = function(s) {
    let hour = Number(s.slice(0, 2));
    let period = s.slice(8, 10);
    if (period === "AM") {
        if (hour === 12) {
            hour = 0;
        }
    } else {
        if (hour !== 12) {
            hour = hour + 12;
        }
    }
    return String(hour).padStart(2, "0") + s.slice(2, 8);
};


//21.String Repeat
//Return a string repeated exactly n times.
var repeatStr = function(n, s) {
 	return s.repeat(n);
 };

 //22. Reversed Strings
//Return the given string with its characters in reverse order.
var solution = function(str) {
 	return str.split("").reverse().join("");
 };

 //23. Sum of Positive
//Return the sum of all positive numbers in an array. Return 0 if there are none.
var positiveSum = function(arr) {
    let sum=0;
 	for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            sum=sum + arr[i];
        }
    }
 return sum;
 };

 //24. Grasshopper - Summation
//Return the sum of all integers from 1 through n.
var summation = function(num) {
    let sum=0;
 	for(let i=1;i<=num;i++){
sum=sum+i;
    }
    return sum;
 };

 //25. Convert a Boolean to a String
//Convert a boolean value into the string "true" or "false".
var booleanToString = function(b) {
 	if(b){
        return "true";
    }
    else {
        return "false";
    }
 };

