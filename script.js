const container = document.querySelector("#container");
const content = document.createElement("div");
const paragraph = document.createElement("p");
const header = document.createElement("h3");
const borderTest = document.createElement("div");
const headerOne = document.createElement("h1");
const para = document.createElement("p");

content.classList.add("content");
content.textContent = "This is a test, lets hope it works";
content.style.color = "blue";
paragraph.classList.add("test");
paragraph.style.color = "red";
paragraph.textContent = "Hi, im red";
header.style.color = "blue";
header.textContent = "Hey, im blue blue";
borderTest.style.cssText = "border: black; background: pink";
headerOne.textContent = "im a div";
para.textContent = "ME TOO!";

container.appendChild(paragraph);
container.appendChild(content);
container.insertBefore(header, content);
borderTest.appendChild(headerOne);
borderTest.appendChild(para);
container.appendChild(borderTest);
