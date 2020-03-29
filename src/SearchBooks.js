import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Books from './Books';

class SearchBooks extends Component {
    state = {
        query: '',
        booksList: []
    }

    handleInputChange = (query) => {
        this.setState({
            query: query.trim(),
            booksList: []
        });

        BooksAPI.search(query.trim())
            .then((booksList) => {
                if(!booksList || booksList.error) {
                    this.setState({
                        booksList: []
                    })
                    return;
                }

                booksList = booksList.map(bookInSearchResults => {
                    this.props.books.map(bookOnHomePage => {
                        if (bookInSearchResults.id === bookOnHomePage.id) {
                            bookInSearchResults.shelf = bookOnHomePage.shelf;
                        }
                        return bookInSearchResults
                    });
                    return bookInSearchResults;
                });

                this.setState({
                    booksList
                });

            });
    }

    render() {
        const { booksList } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.handleInputChange(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {booksList.map(book => (
                            <li key={book.id}>
                                <Books
                                    book={book}
                                    onShelfChange={this.props.onShelfChange}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchBooks;
