import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './bookShelf'

class SearchBooks extends Component{
	handleChange = (e)=>{
		const value = e.target.value;
		if (this.props.onSearchBook) { this.props.onSearchBook(value) }
	}

	render(){
		let search = (this.props.search) ? this.props.search && this.props.search.error ? [] : this.props.search : [];
		return(
			<div>
				<div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
					
						<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" onChange={this.handleChange}/>

					</div>
				</div>

				<div className="search-books-results">
					{//<ol className="books-grid"></ol>
					}
					<BookShelf
						type={false}
						onUpdateBook={this.props.onUpdateBook}
						books={search}
	            	/>
				</div>
			</div>
		)
	}
}

export default SearchBooks