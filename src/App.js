import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import ListBooks from './listBooks'
import SearchBooks from './searchBooks'
import { Link } from 'react-router-dom'


class BooksApp extends React.Component {
state = {
    books:[]
}

getAllBooks(){
    BooksAPI.getAll().then((books)=>{
        console.log("books", books)
        this.setState({books: books});
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
                    <SearchBooks/>
                </div>
            
            )} />  

        </div>
    )
}

}

export default BooksApp
