import _ from 'lodash';
import printMe from './print';
import './styles.css';

// See WebPack docs => https://webpack.js.org/guides/
//
// The Hot Module Replacement(HMT) example used to reside here, but its use
// of the element variable was not liked by ESLint, so it has been removed.
// Once I have a tighter understanding of HMR I may add it back in here.

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
