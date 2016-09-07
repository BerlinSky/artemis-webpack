import { UIBaseComponent } from './base-component';

export class Footer extends UIBaseComponent {
  
  constructor() {
    super();
    this.styles = '';
  }
  
  addComponent() {
    return `
      <footer class="l-footer footer">
        <div class="copyright" style=${this.styles}>&copy; Inspired by Athena</div>
      </footer>
    `;
  }

  setStyles(styles) {
    this.styles = styles;
  }
}

