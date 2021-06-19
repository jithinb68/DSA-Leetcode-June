function findLongestCommonPrefix(myArray) {
    let stringToMatch = myArray[0];
    let isMatched = false;
    while(!isMatched && stringToMatch) {
        isMatched = checkForMatch(stringToMatch, myArray);
        if(!isMatched) stringToMatch = stringToMatch.slice(0, -1);
    }
    return isMatched ? stringToMatch : '';
}

function checkForMatch(stringToMatch, myArray) {
    return myArray.every( element => {
        return element.includes(stringToMatch);
    });
}

const myArray = ["c","acc","ccc"];
const commonPrefix =  findLongestCommonPrefix(myArray);

console.log(commonPrefix);