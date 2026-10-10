//return the absolute difference between n and 21,doubling it when n is greater than 21//

var diff21=function(n){
    if(n<21){
        return n-21;
    }
    else if(n>21){
        return 2*(n-21);
    }
}
