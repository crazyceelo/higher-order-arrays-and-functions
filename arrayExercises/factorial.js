function factorial(n){
    if(n < 0){
        return -1;
    }
    else if( n ==0){
        return 1;
    }
    else{
        return (n * factorial(n-1));
    }
}

console.log(factorial(4));

function factorial(n){
    if(n<0){
        return -1;
    }
    else if(n==0){
        return 1;
    }
    else {
        return (n* factorial(n-1))
    }
}