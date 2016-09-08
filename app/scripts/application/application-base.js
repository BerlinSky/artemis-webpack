import $ from 'jquery';

import { MainLayout } from '../layout/main-layout';
import { Navigation } from '../ui-components/navigation';
import { Footer } from '../ui-components/footer';

import { SearchPanel } from '../ui-components/search-panel';
import { BookSearchResult } from '../pages/book-search-result-partial.js';

import { GridTable } from '../ui-components/grid-table';

import { books } from '../data/books-data';
import { BookDataService } from '../services/book-data-service';

export class ApplicationBase {
    constructor(appTitle) {
      this.appTitle = appTitle;
      // this.navBar = new NavBar(this.appTitle);
      this.layout = new MainLayout();
      this.routes = {};
      this.defaultRoute = null;
    }

  //  enableRoute(routeId) {
  //   let component = this.navBar.component.find('.page-content');
  //   component.empty();

  //   console.log('component in app >', component);
  //   this.routes[routeId].appendToComponent(component);
  // }
    
  createRoute(routeId, pageComponent, isDefault = false) {
    // this.navBar.addLink(routeId, '');
    this.routes[routeId] = pageComponent;

    if (isDefault) {
      this.defaultRoute = routeId ;
    }
  }
    
  render(component) {
    // this.navBar.appendToComponent(component);
    this.layout.appendToComponent(component);
    this._appendNavigation();
    this._appendSearchPanel();                                
    this._appendFooter();

    this._attachSearchEvent()
    // if (this.defaultRoute) {
    //   this.enableRoute(this.defaultRoute);
    // }
  }

   _appendNavigation() {
    const navigation = new Navigation();
    const navigationContainer = this.layout.component.find('.js-navigationContainer');
    navigation.appendToComponent(navigationContainer);
  }  

  _appendSearchPanel() {
    const searchPanel = new SearchPanel();
    const mainContentContainer = this.layout.component.find('.js-mainContentContainer');
    searchPanel.appendToComponent(mainContentContainer);

    // const dataService = new BookDataService();
    // dataService.populateData(books);
    // const bookList = dataService.getBookListSortedByTitle();
    // const bookList = dataService.getBookListSortedByIsbn();

    // const divider = [2, 3, 3, 3, 3, 2];
    // const tableHeader = "isbn author title publisher pubdate price".split(' ');
    // const gridTable = new GridTable(divider, tableHeader, bookList);
    // gridTable.setStyles("background-color: #999; color: #333; padding: 5px 10px;");
    // gridTable.appendToComponent(mainContentContainer);

    // const bookSearchResult = new BookSearchResult();
    // bookSearchResult.setStyles("background-color: #999; color: #333; padding: 5px 10px;");
    // bookSearchResult.appendToComponent(mainContentContainer);
  } 

  _appendFooter() {
    const footer = new Footer();
    const footerContainer = this.layout.component.find('.js-footerContainer');
    footer.appendToComponent(footerContainer);
  }

  _attachSearchEvent() {
    const searchButton = this.layout.component.find('.js-searchBar__button');
    const searchInput = this.layout.component.find('.js-searchBar__inputText');
    const mainContentContainer = this.layout.component.find('.js-mainContentContainer');

    // searchButton.click(function() {
    searchInput.keyup(function() {
      let searchResultContainer = mainContentContainer.find('.js-gridTable');
      searchResultContainer.remove();

      const searchText = searchInput.val().trim();
      if (searchText === '') {
        return;
      }
      
      const dataService = new BookDataService();
      dataService.populateData(books);

      let bookList
      if (searchText === '*') {
        bookList = dataService.getBookListSortedByTitle();
      }
      else {
        bookList = dataService.searchBooksByTitle(searchText);
      }
      // const bookList = dataService.getBookListSortedByIsbn();


      const divider = [2, 3, 3, 3, 3, 2];
      const tableHeader = "isbn author title publisher pubdate price".split(' ');
      const gridTable = new GridTable(divider, tableHeader, bookList);
      gridTable.setStyles("background-color: #fff; color: #333; padding: 5px 10px;");
      gridTable.appendToComponent(mainContentContainer);
    });
  }
}

