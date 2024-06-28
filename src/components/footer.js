class FooterElement extends HTMLElement {
  connectedCallback() {
    this.renderFooter();
  }

  renderFooter() {
    this.innerHTML = `
      <footer>
        <p>Copyright &copy; 2024 - Tachi Resto.</p>
      </footer>`;
  }
}

customElements.define('footer-element', FooterElement);
