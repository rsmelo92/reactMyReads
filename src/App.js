import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import ListBooks from './listBooks'
import SearchBooks from './searchBooks'
import { Link } from 'react-router-dom'


class BooksApp extends React.Component {
state = {
    books:[],
    search:[]
}

getAllBooks(){
    BooksAPI.getAll().then((books)=>{
        this.setState({books: books});
    })
}

searchBooks=(query)=>{
    const books = this.state.books ? this.state.books : [];
    BooksAPI.search(query).then((search)=>{
        let newSearch = search ? search.map(item=>{
            if (item && item.id && books) {
                books.forEach(book=>{
                    if(book.id === item.id){ item.shelf = book.shelf }
                });
            }
            return item;
        }) : [];
        this.setState({search: newSearch});
        this.getAllBooks();
    }) 
}

componentDidMount(){
    this.getAllBooks();
}

updateBook=(book, shelf)=>{
    BooksAPI.update(book, shelf).then((books)=>{
        this.getAllBooks();
    })
}

render() {
    const state = this.state;
    return (
        <div className="app">
             <Route exact path="/" render={() => (
            
                <div className="list-books">
                    <ListBooks 
                        books={state.books} 
                        onUpdateBook={this.updateBook}
                        type="Currently Reading"
                    />
                    <div className="open-search">
                        <Link to="/search">Add a Book</Link>
                    </div>
                </div> 
            
            )} />
            

            <Route path="/search" render={({history})=>(

                <div className="search-books">
                    <SearchBooks 
                        search={state.search} 
                        onUpdateBook={this.updateBook}
                        onSearchBook={this.searchBooks}
                    />
                </div>
            
            )} />  

        </div>
    )
}

}

export default BooksApp
