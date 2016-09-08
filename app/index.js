import './sass/main.scss';
import $ from 'jquery';

import { ApplicationBase } from './scripts/application/application-base';
import { MainLayout } from './scripts/layout/main-layout';

export class App extends ApplicationBase {
  constructor() {
    super('My Book List');

    this.createRoute('Home', MainLayout, true);
    this.createRoute("Books");
    this.createRoute("Authors");
    this.createRoute("Clubs");
    this.createRoute("Support");
  }
}

export let application = new App();
application.render($('body'));