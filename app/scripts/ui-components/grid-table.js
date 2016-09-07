import { UIBaseComponent } from './base-component';

export class GridTable extends UIBaseComponent {

  constructor(divider, header, data) {
    super();
    this.divider = divider;
    this.header = header;
    this.data = data;
    this.styles = '';
  } 

  addComponent() {
    let col = 0;

    let headerRow = '<div class="l-grid__container grid__container grid__container--ruler">\n';
    for (const hdr of this.header) {
      headerRow += `
        <div class="l-grid__span--xs-16 l-grid__span--md-${this.divider[col]}">
          <div class="columnHeading__dataLabel">${hdr}</div>\n
        </div>
      `;

      col++;
    }
    headerRow += '</div>\n';

    let bodyRow = '';
    for (const dataRow of this.data) {
      bodyRow += `<div class="l-grid__container grid__container grid__container--ruler">`;

      let col = 0;
      for (const hdr of this.header) {
        const dataCol = dataRow[hdr.toLowerCase()];
        bodyRow += `
          <div class="l-grid__span--xs-16 l-grid__span--md-${this.divider[col]}">
            <div class="dataLabel">ISBN</div>
            <div class="dataValue">${dataCol}</div>
          </div> 
        `;

        col++;
      }

      bodyRow += '</div>\n';
    }

    return `
      <div class="js-gridTable" style="${this.styles}">
        ${headerRow}
        ${bodyRow}
      </div>
      `;
  }

  setStyles(styles) {
    this.styles = styles;
  }
}
