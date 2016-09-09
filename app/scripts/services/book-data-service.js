import { Book } from '../components/book';

export class BookDataService {
	constructor() {
		this.books = [];
	}

	populateData(books) {
		for (const data of books) {
			const book = this._createBook(data);
			this.books.push(book);
		}
	}

	getBookListSortedByIsbn() {
		return this.books.sort((book1, book2) => {
			if (book1.isbn < book2.isbn) {
				return -1;
			}
			if (book1.isbn > book2.isbn) {
				return 1;
			}
			return 0;
		});
	}

	getBookListSortedByTitle() {
		return this.books.sort((book1, book2) => {
			if (book1.title < book2.title) {
				return -1;
			}
			if (book1.title > book2.title) {
				return 1;
			}
			return 0;
		});
	}

	getCartByIsbn(isbn) {
		return this.books.find( book => {
			if (book.isbn === isbn) {
				return book;
			}
		});
	} 

	searchBooksByTitle(title) {
		return this.books.filter( book => book.title.includes(title) );
	}

	_createBook(book) {
		return new Book(book.isbn, book.author, book.title, book.publisher, book.pubdate, book.price);
	}
}

