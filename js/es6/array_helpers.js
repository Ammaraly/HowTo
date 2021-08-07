var colors = ["red", "blue", "green", "purple", "yellow", "brown"];

//ForEach Helper
// Simple
// colors.forEach((color) => console.log(color));

// With named function
// colors.forEach(someFunc);

// Will print out colors rendered with background colors on browser console
function someFunc(a) {
    console.log(`%c${a}`, `background-color:${a};color:white`);
}

// Map Helper
var colorsCapitalized = colors.map((color) => (color[0].toUpperCase() + color.slice(1)));

// console.log(colorsCapitalized);

// Filter Helper
var longWordColors = colors.filter((color) => color.length > 5)

console.log(longWordColors);