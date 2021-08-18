function capitalize(str) {
    return str.toLowerCase().replace(/\b[a-z]/g,
        (char) => {
            console.log(char);
            return char.toUpperCase()
        });
}

function maxCharacter(str) {
    let charMap = {};
    const specialCharacters = [' ', ',', ';', ':', '.', '!', '@', '#']
    str.toLowerCase().split('').forEach(char => {
        if (specialCharacters.includes(char)) return;
        if (charMap[char]) charMap[char]++
        else charMap[char] = 1
    });
    return Object.keys(charMap).reduce((prev, curr) => charMap[prev] > charMap[curr] ? prev : curr);
}

function longestWord(str) {
    let sortedWords = str.split(' ').sort((a, b) => b.length - a.length);
    let longestWordLength = sortedWords[0].length;
    let longestWords = sortedWords.filter((a) => a.length === longestWordLength);
    if (longestWords.length === 1) return longestWords[0];
    return longestWords
}

function chunkArray(arr, len) {
    let i = 0;
    let chunks = [];
    while (i < arr.length) {
        chunks.push(arr.slice(i, i + len));
        i += len;
    }
    return chunks
}

function mapArray(arr) {
    return arr.map(a => arr.reduce((prev, curr) => curr === a ? prev : curr * prev))

}

function flatternArray(arr) {
    if (!arr.length) return arr;
    return arr.reduce((flattened, val) => flattened.concat(flatternArray(val)), []);
}

// console.log(mapArray([1, 2, 3, 4]));
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
console.log(flatternArray([[1, 2], [3, 4], 5, [6, [7, 8, [9, 10]]]]));