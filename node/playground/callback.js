add = (numbers, callback) => {
    let sum = numbers.reduce((prev, curr) => prev + curr, 0)
    callback(sum)
}



add([1, 2, 3], (sum) => { console.log(sum) });