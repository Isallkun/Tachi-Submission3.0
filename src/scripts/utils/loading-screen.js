const loadingScreen = document.createElement('div');
loadingScreen.classList.add('loading-screen', 'loader');

document.body.appendChild(loadingScreen);

window.addEventListener('load', () => {
  loadingScreen.style.display = 'none';
});

export default loadingScreen;
