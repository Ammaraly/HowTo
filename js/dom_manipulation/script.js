body = document.body;

// Adding elements to the page
body.append("Hello World", " Yet another string with initial space");

// Create element
const div = document.createElement("div");
h1 = document.createElement('h1');
h1.innerText = "Something"
div.innerHTML = "<strong>empty1</strong>";
div.append(h1);
body.append(div);

//Remove element
const strong = document.querySelector('strong');
//div.removeChild(strong);
strong.remove();

//Add element back
body.append(strong);

//Get or Set Attributes
console.log("Strong id before setting :", strong.getAttribute('id'));
strong.setAttribute('id', "blablabla");
console.log("Strong id after setting :", strong.getAttribute('id'));

//Remove Attributes
strong.removeAttribute('id');
console.log("Strong id after removing :", strong.getAttribute('id'));

// Dataset properties
const dataElement = document.querySelector('data');
console.log(dataElement.dataset);
dataElement.dataset.newAttribute = "New Attribute";

// Get Classes
console.log(dataElement.classList);

// Add or Modify or Get styles
dataElement.style.color = "red";
console.log(dataElement.style)