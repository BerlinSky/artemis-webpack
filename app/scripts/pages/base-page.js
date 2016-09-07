import { UIBaseComponent } from '../ui-components/base-component.js';

export class BasePage extends UIBaseComponent {
  constructor(pageTitle) {
    super();
    this.pageTitle = pageTitle;
  }
}