import './style.css';
import test from './test.jpg';
function component() {
    const element = document.createElement('div');
    element.textContent = "Hello"
    element.classList.add('hello');

    const myImage = new Image();
    myImage.src = test;

    element.appendChild(myImage)
  
    return element;
  }
  
  document.body.appendChild(component());