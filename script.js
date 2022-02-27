// creating variables and assigning them a newly created query or selector

const container = document.querySelector("#container");
const content = document.createElement("div");
const paragraph = document.createElement("p");
const header = document.createElement("h3");
const borderTest = document.createElement("div");
const headerOne = document.createElement("h1");
const para = document.createElement("p");

// adding inline styles with all three different ways.
// adding text content to created elements above. Use textContent over innerHTML for standard practice and security preference
content.textContent = "This is a test, lets hope it works";
content.style.color = "blue";
content.style.backgroundColor = "red";
paragraph.classList.add("test");
paragraph.setAttribute("style", "color:red");
paragraph.textContent = "Hi, im red";
header.style.color = "blue";
header.textContent = "Hey, im blue blue";
borderTest.style.cssText = "border: black; background: pink";
headerOne.textContent = "im a div";
para.textContent = "ME TOO!";

// using append elements to show above into the DOM
container.appendChild(paragraph);
container.appendChild(content);
container.insertBefore(header, content);
borderTest.appendChild(headerOne, para);
borderTest.appendChild(para);

// using append element to add borderTest div to the container div
// and used remove element to show removal
container.appendChild(borderTest);
container.removeChild(borderTest);

container.appendChild(borderTest);

// working with classes, adding class to existing div and removing.

borderTest.classList.add("border");
borderTest.classList.remove("border");
borderTest.classList.add("border");

// if borderTest doesn't have class testOne then add it, or if it does than remove it.
borderTest.classList.toggle("testOne");

// editing attributes

// if id exists, update to 'yuyu', else create an id with value 'yuyu'
borderTest.setAttribute("id", "yuyu");

// returns value of specified attribute in this case is "yuyu",
// and removes specified attribute.
borderTest.getAttribute("id");
borderTest.removeAttribute("id");

// Events, three primary ways to call events and react to them
// 1. attach functions attributes directly on element
// 2. set the 'on_event' property on the DOM object
// 3. attach event listeners to the nodes

// method 1 (see html file for onclick property assigned to button)

// Method 2 (uses id from button#2). create variable to hold query selected. use onclick property to set arrow function

const btn = document.querySelector("#btn");

btn.onclick = () => alert("Hello Guy");

// Method 3 maintains separation of javascript from html, and
// allows for multiple event listeners. more flexible method of calling event.
// preferred method

const bttn = document.querySelector("#bttn");
bttn.addEventListener("click", () => {
  alert("Hi Mom");
});

// All 3 methods work with named functions. used named functions if you plan to repeat multiple times/places
// all three methods below use alertFunction() assigned to button onclick

function alertFunction() {
  alert("yay it worked");
}

const al = document.querySelector("#al");

al.onclick = alertFunction;

al.addEventListener("click", alertFunction);

// access more info on event by passing parament to function being called
// function (e) is a callback from addEventListener. the e is an object that references the event itself
// within that object you can access useful properties and functions like mouse button or key presses, or info about events target which is DOM node that was clicked.
al.addEventListener("click", function (e) {
  console.log(e);
});

al.addEventListener("click", function (e) {
  console.log(e.target);
});

al.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

// attaching listeners to groups of nodes using div with id #cont

// buttons is a node list. it looks and acts like an array
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
