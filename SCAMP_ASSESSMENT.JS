var fibFunc = (num) => {
    if (num ===1) return [0,1];
    
    var sequence = fibFunc(num-1);
    sequence.push(sequence[sequence.length-1] + sequence[sequence.length-2]);
    return sequence;
    }
    
    console.log(fibFunc(4))