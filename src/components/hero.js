class HeroElement extends HTMLElement {
  connectedCallback() {
    this.renderHero();
  }

  renderHero() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">Tachi Restaurant</h1>
          <p class="hero__tagline">Fusion of Indonesian and Japanese Cuisine</p>
        </div>
      </div>
    `;
  }
}

customElements.define('hero-element', HeroElement);
