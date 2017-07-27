import _ from 'lodash';
import printMe from './print';
import './styles.css';

if( module.hot ) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChile(element);
    element = component(); // Re-render the "component" to update click handler
    document.body.appendChild(element);
  })
}

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component())
