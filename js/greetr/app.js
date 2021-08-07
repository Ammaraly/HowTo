var dan = G$("Dan", "Willie", "en");

// You can use any CSS in console log
console.log(`%cHello World`, "font-weight: bold; background-color: blue; color: white", dan);

// Optional Chaining with ?. returns undefined instead of failing
console.log(dan?.greet?.());