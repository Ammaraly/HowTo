function pairs(arr) {
    let copy = [...arr];
    copy.sort((a, b) => b > a ? -1 : a > b ? 1 : 0);
    let pairs = 0;
    copy.reduce((prev, curr) => {
        if (prev === curr) pairs++;
        return curr;
    });
    return pairs;
}


let arr = [4, 6, 2, 5, 1, 9, 5, 2, 4, 1];

console.log(pairs(arr))