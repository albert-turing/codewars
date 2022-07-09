/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

*/

/*     Example set: 
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/

// solution:

function digital_root(n){
    
    let sum = 0;
    //checking if n > 10 initially, if not then return n:
    
    if( n <10) {
        return n;
    }

    // Since digital root is a recursive function, we will have a loop which will check if we reached the value
    // wanted to check or otherwise we will call the same function once again. 

    while (n >= 10){ // checking the value of the number if >= 10;
        sum = 0;
        while ( n > 0){
            sum += n % 10; // to get the last digit through remainder.
            n = Math.floor(n/10); // to get the INT number,
        } 
        n = sum;
    } 
    return sum;

}

console.log(digital_root(456),6);
