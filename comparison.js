/**
 * Comparison Operator
 * Greater Then >(Bigger)
 * Less Then < (Smaller)
 * Equal (==) Same to same
 * Greater then or equal to (>=)
 * Less then or eual to (<=)
 * Not Equl(!=)
 * 
 * (-----------------------------------------------)
 * logical AND : (&&)
 * Logical OR : (||)
 * Logical Not :  (!) also known as the ternary operator
 */
// Greater then 
console.log(5 > 10);

// Less then 
console.log(5 < 10);

// Equl to 
console.log(10 == 10);

// greater or equal to 
console.log(10 >= 10);

// less then or equal to 
console.log(5 <= 10);

// Not equl to 
console.log(10 != 10);
console.log(10 != 9);


/** Simple Example */
let guavaPrice = 40;
let applePrice = 140;

console.log(applePrice < guavaPrice);

if(applePrice > guavaPrice){
    console.log("Apple price is Greater");
}
else{
    console.log("Guava Price is Greater");
}