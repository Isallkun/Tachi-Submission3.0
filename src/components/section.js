class SectionElement extends HTMLElement {
  connectedCallback() {
    this.renderSection();
  }

  renderSection() {
    this.innerHTML = `
      <main id="mainContent" tabindex="0">
        <section class="content">
          <article class="headline">
            <figure class="headline__figure">
              <img src="../images/heros/hero.jpg" width="450" alt="">
              <figcaption>Tachi Restaurant</figcaption>
            </figure>
            <div class="headline__content">
              <h1 class="headline__title">Tachi Restaurant</h1>
              <p class="headline__description">
                Fusion of Indonesian and Japanese Cuisine
              </p>
              <button class="headline__button">Order</button>
            </div>
          </article>
          <div class="latest">
            <h1 class="latest__label">Explore Restaurant</h1>
          </div>
        </section>
      </main>
    `;
  }
}

customElements.define('section-element', SectionElement);
