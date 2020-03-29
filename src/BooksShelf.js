import React from 'react';
import Books from './Books';

function BooksShelf(props) {
    const {shelfTitle, books} = props;

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <li key={book.id}>
                            <Books book={book} onShelfChange={props.onShelfChange}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default BooksShelf;
