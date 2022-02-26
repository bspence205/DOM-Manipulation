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
