import './style.css';
function component() {
    const element = document.createElement('div');
    element.textContent = "Hello"
    element.classList.add('hello');
  
    return element;
  }
  
  document.body.appendChild(component());