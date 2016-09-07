import { UIBaseComponent } from './base-component';

export class Navigation extends UIBaseComponent {
  
  constructor() {
    super();
    this.styles = '';
  }
  
  addComponent() {
    return `
      <h1 class="logo"><a href="#">Athena</a></h1>
      <nav class="l-navlinks navlinks">
        <ul>
          <li class="navlinks__item"><a href="/books">Books</a></li>
          <li class="navlinks__item"><a href="/authors">Authors</a></li>
          <li class="navlinks__item"><a href="/clubs">Clubs</a></li>
        </ul>
      </nav>
      <nav class="navActions">
        <ul>
          <li class="navActions__item navActions__item__search visble">
            <a class="js-buttonSearchOpen fa-search" href="/search">Search</a>
          </li>
          <li class="navActions__item menu">
            <a class="js-actionMenu fa-bars">Menu</a>
          </li></ul>
      </nav>
    `;
  }

  setStyles(styles) {
    this.styles = styles;
  }
}

