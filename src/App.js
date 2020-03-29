import React, { Component } from 'react';
import DisplayBooks from './DisplayBooks'
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';

class BooksApp extends Component {
    state = {
        books: []
    }

    onShelfChange = (newBook, newShelf) => {
        this.setState(currentState => ({
            books: currentState.books.filter(book => book.id !== newBook.id).concat([newBook])
        }))
        BooksAPI.update(newBook, newShelf);
    }

    componentDidMount = () => {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            })
    }

    render() {

        return (
            <div className="app">
                <Route exact
                    path="/"
                    render={() => (
                        <DisplayBooks
                            books={this.state.books}
                            onShelfChange={this.onShelfChange}
                        />
                    )}
                />

                <Route
                    path="/search"
                    render={() => (
                        <SearchBooks
                            onShelfChange={this.onShelfChange}
                            books={this.state.books}
                        />
                    )}
                />
            </div>
        );
    }
}

export default BooksApp;
