function tellMeTheLetters(str) {
    const stringArray = str.split('');
    var stringMap = {}
    console.log(stringArray);
    stringArray.forEach(element => {
        if(element in stringMap) {
            stringMap[element]++
        } else {
            stringMap[element] = 1;
        }
    });
    return stringMap
}

tellMeTheLetters('meeeoowwwwfff')

