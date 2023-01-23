// for ( {setter} ; {condition} ; {increment})

/*
for( let i = 1; i <= 10 ; i++)
    console.log(i*7);
console.log(i); 
*/

/*
for ( let i = 1 ; i <= 10 ; i++ )
    for ( let a = 1 ; a <= 10 ; a++ )
        console.log(`${i} * ${a} = ${i*a}`);
*/

/*
let sum = 0;
for ( let i = 1 ; i <= 10 ; i++ )
    sum += i;
*/

/*
let sum = 1;
for ( let i = 10 ; i >= 1 ; i--)
    sum *= i;
console.log(sum);
*/

let sum = 0;
for ( let i = 11 ; i <= 30 ; i += 2 )
    sum += i;
console.log(sum);