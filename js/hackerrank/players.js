function countTeams(skills, minPlayers, minLevel, maxLevel) {
    // Write your code here
    let remainingPlayers = skills.filter((skill) => skill <= maxLevel && skill >= minLevel).length;
    console.log(skills.filter((skill) => skill <= maxLevel && skill >= minLevel));
    if (remainingPlayers < minPlayers) return 0;
    if (remainingPlayers === minPlayers) return 1;
    let totalNumberOfTeams = 0;
    let remainingPlayersFact = factorial(remainingPlayers);
    console.log(remainingPlayersFact);
    while (minPlayers < remainingPlayers) {
        let minPlayersFact = factorial(minPlayers);
        // console.log(minPlayersFact);
        totalNumberOfTeams += remainingPlayersFact / (minPlayersFact * (remainingPlayers - minPlayers));
        console.log(totalNumberOfTeams);
        minPlayers++
    }
    return totalNumberOfTeams + 1;
}

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

let skills = [6, 4, 8, 7, 5, 2];
let minPlayers = 2;
let minLevel = 3;
let maxLevel = 10;

console.log(countTeams(skills, minPlayers, minLevel, maxLevel));