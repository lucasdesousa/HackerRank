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

function getGrade(score) {
    if(score >= 0 && score <= 30){
        let possibleGrades = ['F','E','D','C','B','A'];
        let scoreIndex = parseInt((score - 1)/5);
        return possibleGrades[scoreIndex];
    }
    
    throw new Error("Invalid parameter, check constraints")
}


function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}