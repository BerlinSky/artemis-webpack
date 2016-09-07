// import { BasePage } from './base-page';
import { UIBaseComponent } from '../ui-components/base-component.js';

import { Image } from '../ui-components/image';
import { Button } from '../ui-components/button';

// import {Image} from './ui/image.js';
// import {Button} from './ui/button.js';
// import {application} from './app.js';

// export class HomePage extends BasePage {
export class HomePage extends UIBaseComponent {
    
  constructor() {
    super();
  }

  createComponent() {

    super.createComponent();

    console.log('this.element', this.component);
    
    const imgFile = "./images/vanity-fair.jpg";
    const img = new Image(imgFile);
    img.appendToComponent( this.component );
  }

  addComponent() {
      return '<div style="text-align: center;"></div>';
  }
}