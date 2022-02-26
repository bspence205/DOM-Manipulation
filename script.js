const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = "This is a test, lets hope it works";
content.style.color = 'blue';

container.appendChild(content);