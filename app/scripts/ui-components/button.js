import { UIBaseComponent } from './base-component';

export class Button extends UIBaseComponent {
  
  constructor(title) {
    super();
    this.title = title;
    this.styles = '';
  }
  
  addComponent() {
    return `
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
    style="${this.styles}">
    ${this.title}
    </button>
    `;
  }

  setStyles(styles) {
    this.styles = styles;
  }
}

