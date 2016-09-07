import { UIBaseComponent } from './base-component';

export class Image extends UIBaseComponent {
  
  constructor(filePath) {
    super();
    this.filePath = filePath;
    this.styles = '';
  }
  
  addComponent() {
    return `
    <img src="${this.filePath}" style=${this.styles} alt="" />
    `;
  }

  setStyles(styles) {
    this.styles = styles;
  }
}

