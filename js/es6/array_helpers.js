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

// console.log(longWordColors);

// Find Helper

var colorStartsWhithP = colors.find((color) => color.startsWith("p"));
// console.log(colorStartsWhithP);

// Every & Some

var areAllColorsLongerThan4Chars = colors.every((color) => color.length > 4);

console.log(areAllColorsLongerThan4Chars);

var areSomeColorsLongerThan4Chars = colors.some((color) => color.length > 4);

console.log(areSomeColorsLongerThan4Chars);