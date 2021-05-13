'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Create the function factorial here
 */
function factorial(n){
    if(typeof n === "number"){
        let value = 1;
        
        for (let i = 2; i <= n; i++)
            value *= i;
        
        return value;
    }
    
    throw new Error("n must be a integer");
}

function main() {
    const n = +(readLine());
    
    console.log(factorial(n));
}