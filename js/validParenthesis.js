var isValid = function(s) {
    if([')', ']', '}'].some((str) => s.startsWith(str))) return false;
    let symbolMap = {
       "{": "}",
       "(": ")",
       "[": "]"
    }
    let charecterArray = s.split('');
    let myArray = [];
    for (const charecter of charecterArray) {
        if(['(', '[', '{'].includes(charecter)) {
            myArray.push(charecter);
        } else {
            let str = myArray.pop();
            if(symbolMap[str] === charecter) {
                continue
            } else {
                return false
            }
        } 
    }
    return myArray.length ? false : true
};

let myString = "{[]}"

let isValidParenthesis = isValid(myString);

console.log(isValidParenthesis);