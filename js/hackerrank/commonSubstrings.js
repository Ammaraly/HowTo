function commonSubstring(x, y) {
    let c = {};
    let check = false;
    x.split('').forEach((a) => { c[a] = c[a] ? c[a]++ : 1 })
    y.split('').some((a) => { console.log(a); if (c[a]) { check = true; return true } })
    return check ? 'YES' : 'NO';
}

let a = "hdool";
let b = "World";

console.log(commonSubstring(a, b));