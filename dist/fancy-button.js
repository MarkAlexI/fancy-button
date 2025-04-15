class FancyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    const template = document.getElementById('fancy-button-template');
    const content = template.content.cloneNode(true);
    
    this.shadowRoot.appendChild(content);
  }
  
  connectedCallback() {
    this.button = this.shadowRoot.querySelector('button');
    
    if (this.hasAttribute('label')) {
      this.button.textContent = this.getAttribute('label');
    }
    
    this.button.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('fancy-click', {
        bubbles: true,
        composed: true,
        detail: {
          message: 'Fancy Button clicked!'
        }
      }));
    });
  }
}

customElements.define('fancy-button', FancyButton);