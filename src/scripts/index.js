import 'regenerator-runtime';
import '../components/header';
import '../components/hero';
import '../components/section';
import '../components/footer';
// import '../styles/bundle.css';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/utility.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  swRegister();
});
