import React from 'react';
import BooksShelf from './BooksShelf';
import { Link } from 'react-router-dom';

function DisplayBooks(props) {
    const books = props.books;
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
    const wantToRead = books.filter(book => book.shelf === 'wantToRead');
    const read = books.filter(book => book.shelf === 'read');
    const booksCategory = [[currentlyReading, 'Currently Reading'], [wantToRead, 'Want To Read'], [read, 'Read']]

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>

            {booksCategory.map(book => (
                <BooksShelf
                    shelfTitle={book[1]}
                    books={book[0]}
                    onShelfChange={props.onShelfChange}
                    key={book[1].toLowerCase()}
                />
            ))}

            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>

        </div>
    );
}

export default DisplayBooks;
