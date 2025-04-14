class FancyButton extends HTMLElement {
  constructor() {
    super();
    
    const shadow = this.attachShadow({ mode: 'open' });
    
    const template = document.getElementById('fancy-button-template');
    const content = template.content.cloneNode(true);
    
    shadow.appendChild(content);
  }
}

customElements.define('fancy-button', FancyButton);