function processData(input) {
    const inputArray = input.trim().split('\n');
    const N = inputArray[0];
    const X = inputArray[1].split(" ");
    
    let sum = 0;
    for(let i = 0; i < N; i++){
        sum += parseInt(X[i]);
    }
    
    let mean = sum/N;
    console.log(parseFloat(Number(mean).toFixed(1)));
    
    let orderedNums = X.sort(function(a, b){ return a - b; });
    let middleIndex = orderedNums.length / 2;
    
    let median = middleIndex % 1 == 0 ? (parseInt(orderedNums[middleIndex - 1]) + parseInt(orderedNums[middleIndex])) / 2 : parseInt(orderedNums[Math.floor(middleIndex)]);
    console.log(parseFloat(Number(median).toFixed(1)));
    
    // let modeArray = {};
    // let mode = X[0];
    // let maxCount = 1;
    // for(let i = 0; i < N; i++)
    // {
    //     let x = parseInt(X[i]);
        
    //     //if not exists, = 1, if exists, sum 1
    //     modeArray[x] += 1;  
        
    //     if(modeArray[x] >= maxCount)
    //     {
    //         //make sure of mode is the smallest numerically possible
    //         if(x < mode){
    //             mode = x;
    //         }    

    //         maxCount = modeArray[x];
    //     }
    // }

    const map = new Map();
    let maxFreq = 0;
    let mode;
    for(const item of X) {
        let freq = map.has(item) ? map.get(item) : 0;
        freq++;

        if(freq > maxFreq) {
        maxFreq = freq;
        mode = item;
        }
        
        map.set(item, freq);
    }
    console.log(parseFloat(Number(mode).toFixed(1)));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});