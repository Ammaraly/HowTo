// Simple self executing function
(() => { console.log("Simple self executing function") })()

// Create Closures
var obj = (() => { var message = "Some Message"; return { showMessage: () => console.log(message) } })();
obj.showMessage();