import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './listBooks'
import SearchBooks from './searchBooks'

class BooksApp extends React.Component {
state = {
    /**
    * TODO: Instead of using this state variable to keep track of which page
    * we're on, use the URL in the browser's address bar. This will ensure that
    * users can use the browser's back and forward buttons to navigate between
    * pages, as well as provide a good URL they can bookmark and share.
    */
    showSearchPage: false,
    changed:false,
    books:[]
}

getAllBooks(){
    BooksAPI.getAll().then((books)=>{
        this.setState({books: books});
    })
}

componentDidMount(){
    this.getAllBooks();
}

updateBook=(book, shelf)=>{
    console.log("updateBook!");
    BooksAPI.update(book, shelf).then((books)=>{
        this.getAllBooks();
    })
}

render() {
    const state = this.state;
    return (
        <div className="app">
            
            {!this.state.showSearchPage ?
                <div className="list-books">
                    <ListBooks 
                        books={state.books} 
                        onUpdateBook={this.updateBook}
                        type="Currently Reading"
                    />
                    <div className="open-search">
                        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
                    </div>
                </div> 
                :
                <div className="search-books">
                    <SearchBooks/>
                </div>
            }

        </div>
    )
}

}

export default BooksApp
