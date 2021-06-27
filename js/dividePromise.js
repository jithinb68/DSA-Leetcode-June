function divide(a, b) {
    return new Promise(function (resolve, reject) {
           operationOutput = a%b;
           if(operationOutput === 0) {
            divideOutput = a/b; 
            resolve(divideOutput);
           } 
           if(operationOutput !== 0) {
            reject(operationOutput);
           }
    });
}


const output = divide(6, 2);
console.log(output);