function minAbsDiff(arr) {
    let copy = [...arr];
    let minDiff = Infinity;
    copy = copy.map((a) => a < 0 ? -a : a);
    copy.sort((a, b) => b > a ? -1 : a > b ? 1 : 0);
    console.log(copy);
    copy.reduce((prev, curr) => {
        if (curr - prev < minDiff) minDiff = curr - prev;
        return curr;
    });
    copy.reduce((prev, curr) => {
        if (curr - prev === minDiff) console.log(prev, curr);
        return curr;
    });
}


function closestNumbers(numbers) {
    // Write your code here
    let copy = [...numbers];
    let minDiff = Infinity;
    copy.sort((a, b) => a > b ? 1 : b > a ? -1 : 0);
    console.log(copy);
    copy.reduce((prev, curr) => {
        if (curr - prev < minDiff) minDiff = curr - prev;
        return curr;
    })
    console.log(minDiff);
    copy.reduce((prev, curr) => {
        if (curr - prev === minDiff || prev - curr === minDiff) console.log(prev, curr)
        return curr;
    })
}

let arr = [-9, -5, 9, 10, 12];

closestNumbers(arr);