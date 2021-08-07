var colors = ["red", "blue", "green", "purple", "yellow", "brown"];

// Simple
colors.forEach((color) => console.log(color));

// With named function
colors.forEach(someFunc);

// Will print out colors rendered with background colors on browser console
function someFunc(a) {
    console.log(`%c${a}`, `background-color:${a};color:white`);
}