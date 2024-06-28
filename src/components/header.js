class HeaderElement extends HTMLElement {
  connectedCallback() {
    this.renderHeader();
    this.toggleDarkMode();
  }

  renderHeader() {
    this.innerHTML = `
      <a href="#mainContent" class="skip-link">Skip content</a>
      <header class="header">
        <div class="header__inner">
          <button id="menu" class="header__menu">☰</button>
          <nav id="drawer" class="nav">
            <ul class="nav__list">
              <li class="nav__item"><a href="#/home">Home</a></li>
              <li class="nav__item"><a href="#/fav">Favorite</a></li>
              <li class="nav__item"><a href="https://www.linkedin.com/in/isallkun" target="_blank" rel="noopener">Contact Us</a></li>
              <li class="nav__item">
                <button id="darkModeToggle" class="dark-mode-toggle">
                  <i class='bx bx-moon'></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>`;
  }

  toggleDarkMode() {
    const darkModeToggle = this.querySelector('#darkModeToggle');
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }
}

customElements.define('header-element', HeaderElement);
