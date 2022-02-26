const divv = document.querySelector("button");

const div = document.createElement('div');

//  Adding inline style methods

div.style.color = "blue";

div.style.cssText = "color: blue; background: black";

div.setAttribute("style", "color: blue; background: red");

// Editing Attributes

div.setAttribute("id", "theDiv");
// if id exists, update it to 'theDiv', else create an id
// with value "theDiv"

div.getAttribute("id");
// returns value of specified attribute, in this case
// "theDiv"

div.removeAttribute("id");
// removes specified attribute

// Working with Classes

div.classList.add("new");
// adds class "new" to your new div

div.classList.remove("new");
// removes "new" class from div

div.classList.toggle("active");
// if div doesn't have class "active" then add it, or if
// it does, then remove it


div.textContent = "Hello World!";

div.innerHTML = '<span>Hello World!</span>';

