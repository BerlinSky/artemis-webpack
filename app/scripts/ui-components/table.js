import { UIBaseComponent } from './base-component';

export class Table extends UIBaseComponent {

  constructor(header, data) {
    super();
    this.header = header;
    this.data = data;
    this.styles = '';
  }

  addComponent() {

    let headerRow = '';
    for (const hdr of this.header) {
      headerRow += `<th class="mdl-data-table__cell--non-numeric">${hdr}</th>\n`;
    }

    let tableRow = '';
    for (const dataRow of this.data) {
      tableRow += `<tr>`;
      // let tdTags = '';
      for (const hdr of this.header) {
        const dataCol = dataRow[hdr.toLowerCase()];
        tableRow += `<td class="mdl-data-table__cell--non-numeric">
                     ${dataCol}
                   </td>
                  `;
      }
      tableRow += '</tr>';
    }
    return `
      <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
          ${headerRow}
          </tr>
        </thead>
        <tbody>
          ${tableRow}
        </tbody>
      </table>
    `;
  }

  setStyles(styles) {
    this.styles = styles;
  }
}
