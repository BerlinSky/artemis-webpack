import { UIBaseComponent } from '../ui-components/base-component.js';

export class MainLayout extends UIBaseComponent {
  constructor() {
    super();
  }

  createComponent() {
    super.createComponent();
  }

  addComponent() {
    return `
		  <div class="l-siteContainer l-header-fixed l-footer-fixed siteContainer">

	      <navigation class="l-navigation navigation js-navigationContainer"></navigation>

	      <section class="l-mainContent mainContent js-mainContentContainer"></section>

				<section class="js-footerContainer"></section>
	    </div>
    `;
  }
}