const Google = {
    locations: ["Bolivia", "Ethiopia", "Papua New Guinea", "Romania", "Eritrea"]
}

const { locations: [, second] } = Google;

// console.log(second);
const iterable = {
    [Symbol.iterator]: function* iteratTeam() {
        for (prop of Object.getOwnPropertyNames(this)) {
            if (typeof this[prop] === 'object') yield* this[prop]
            else yield this[prop];
        }
    }
}

const testingTeam = {
    lead: "Roberta Mosciski",
    testers: ["Kelli Johnston", "Mack Rath"]
}

const Team = {
    testingTeam,
    lead: "Jo Abbott",
    manager: "PWilbert Hilll",
    engineers: ["Arnold Rohan", "Janet Renner", "Beth Lesch", "Glenda Anderson"]
}
Team.__proto__ = iterable;
testingTeam.__proto__ = iterable;

for (member of Team) {
    console.log(member);
}

// console.log(Team.__proto__)