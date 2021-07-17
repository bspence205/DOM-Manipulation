// adding elements and nodes to HTML via DOM

const container = document.querySelector("#container");

const content = document.createElement("p");
content.classList.add("content");
content.textContent = "Hey, im Red";
content.style.color = "red";

const heading = document.createElement("h3");
heading.classList.add("head");
heading.textContent = "Hey, im Blue";
heading.style.color = "blue";

const project = document.createElement("div");
project.setAttribute("style", "border: 1px solid black; background: pink");
project.textContent = "Test";
const headingLarge = document.createElement("h1");
headingLarge.textContent = "I'm in a div";
const paragraphSec = document.createElement("p");
paragraphSec.textContent = "ME TOO!";

container.appendChild(project);
project.appendChild(headingLarge);
project.appendChild(paragraphSec);
container.appendChild(heading);
container.appendChild(content);
