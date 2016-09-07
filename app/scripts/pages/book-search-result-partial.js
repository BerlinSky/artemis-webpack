import { UIBaseComponent } from '../ui-components/base-component';

export class BookSearchResult extends UIBaseComponent {
  
  constructor() {
    super();
    this.styles = '';
  }
  
  addComponent() {
    return `
      <div class="js-mainContentContainer" style="${this.styles}">
        <div class="l-grid__container grid__container grid__container--ruler"> 
          <div class="l-grid__span--xs-16 l-grid__span--md-2">
            <div class="columnHeading__dataLabel">ISBN</div>
          </div> 
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="columnHeading__dataLabel">TITLE</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="columnHeading__dataLabel">AUTHOR</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="columnHeading__dataLabel">PUBLISHER</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="columnHeading__dataLabel">PUBLISHED</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-2">
            <div class="columnHeading__dataLabel columnHeading__dataLabel--numeric">PRICE ($)</div>
          </div>
        </div>

        <div class="l-grid__container grid__container grid__container--ruler"> 
          <div class="l-grid__span--xs-16 l-grid__span--md-2">
            <div class="dataLabel">ISBN</div>
            <div class="dataValue">0446310786</div>
          </div> 
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="dataLabel">TITLE</div>
            <div class="dataValue">To Kill a Mockingbird</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="dataLabel">AUTHOR</div>
            <div class="dataValue">Haper Lee</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="dataLabel">PUBLISHER</div>
            <div class="dataValue">Grand Central Publishing</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="dataLabel">PUBLISHED</div>
            <div class="dataValue">October 11, 1988</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-2">
            <div class="dataLabel">PRICE ($)</div>
            <div class="dataValue dataValue--numeric">17.33</div>
          </div>
        </div>

        <div class="l-grid__container grid__container grid__container--ruler"> 
          <div class="l-grid__span--xs-16 l-grid__span--md-2">
            <div class="dataLabel">ISBN</div>
            <div class="dataValue">0141439556</div>
          </div> 
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="dataLabel">TITLE</div>
            <div class="dataValue">Wuthering Heights</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="dataLabel">AUTHOR</div>
            <div class="dataValue">Emily Bronte</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="dataLabel">PUBLISHER</div>
            <div class="dataValue">Penguin Classic</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="dataLabel">PUBLISHED</div>
            <div class="dataValue">December 31, 2002</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-2">
            <div class="dataLabel">PRICE ($)</div>
            <div class="dataValue dataValue--numeric">12.99</div>
          </div>
        </div>

        <div class="l-grid__container grid__container grid__container--ruler"> 
          <div class="l-grid__span--xs-16 l-grid__span--md-2">
            <div class="dataLabel">ISBN</div>
            <div class="dataValue">0684801221</div>
          </div> 
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="dataLabel">TITLE</div>
            <div class="dataValue">The Old Man and The Sea</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="dataLabel">AUTHOR</div>
            <div class="dataValue">Ernest Hemingways</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="dataLabel">PUBLISHER</div>
            <div class="dataValue">Scribner</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-3">
            <div class="dataLabel">PUBLISHED</div>
            <div class="dataValue">May 5, 1995</div>
          </div>
          <div class="l-grid__span--xs-16 l-grid__span--md-2">
            <div class="dataLabel">PRICE ($)</div>
            <div class="dataValue dataValue--numeric">15.28</div>
          </div>
        </div>
      </div>
    `;
  }

  setStyles(styles) {
    this.styles = styles;
  }
}

