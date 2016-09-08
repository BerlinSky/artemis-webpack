import { ApplicationBase } from './application/application-base';
import { MainLayout } from './layout/main-layout';

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