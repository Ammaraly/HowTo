const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

//Add Event Listener
console.log(grandparent)
grandparent.addEventListener("click", e => { console.log("Grandparent capture") }, { capture: true });
grandparent.addEventListener("click", e => { console.log("Grandparent bubble") }, );

parent.addEventListener("click", e => { console.log("parent capture") }, { capture: true });
parent.addEventListener("click", e => { console.log("parent bubble") }, );

child.addEventListener("click", e => { console.log("child capture") }, { capture: true });
child.addEventListener("click", e => {
    console.log("child bubble");
}, );

document.addEventListener("click", e => { console.log("document capture") }, { capture: true });
document.addEventListener("click", e => { console.log("document bubble") }, );

parent.addEventListener("click", someFunction);

// Once Event
child.addEventListener("click", e => {
    console.log("child bubble once event");
    e.stopPropagation();
}, { once: true });

// Remove Event Listener
setTimeout(() => {
    parent.removeEventListener("click", someFunction);;
}, 3000);

function someFunction() {
    console.log("To be removed after 3 seconds");
}

// Event Delegation
const newDiv = document.createElement("div");
newDiv.style.height = "500px";
newDiv.style.width = "500px";
newDiv.style.backgroundColor = "purple";
document.body.append(newDiv);

addGlobalEventListener("click", "div", () => console.log("Delegated event also works on new elements"));

function addGlobalEventListener(type, selector, callback) {
    document.body.addEventListener(type, e => {
        e.target.matches(selector) && callback();
    })
}