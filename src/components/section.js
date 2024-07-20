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
            <form class="search-form">
              <input type="text" id="searchInput" placeholder="Search by name">
              <select id="sortSelect">
                <option value="default">Sort by</option>
                <option value="rating">Rating</option>
              </select>
              <button type="button" id="searchButton">Search</button>
            </form>
          </div>
        </section>
      </main>
    `;
  }
}

customElements.define('section-element', SectionElement);
