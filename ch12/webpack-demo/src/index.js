import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml'
import printMe from './print';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to the existing div
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  btn.textContent = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  console.log(Data);

  return element;
}

document.body.appendChild(component());