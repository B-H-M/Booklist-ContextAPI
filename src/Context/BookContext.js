import React, { createContext, useState } from 'react';
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [ books, setBooks ] = useState([
        {title: "Do not fight in there War", author: "Dele Farotimi", id: 1},
        {title: "The Black Man", author: "Wole Soyinka", id: 2},
        {title: "The Subtle Act of Not Giving a Fuck", author: "BHM", id: 3},
    ]);

    const addBook = ( title, author ) => {
        setBooks([...books, { title, author, id: uuid() } ])
    }

    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id))
    }
    return ( 
        <BookContextProvider.provider value={{ books, addBook, removeBook }}>
            { props.children }
        </BookContextProvider.provider>

     );
}

export default BookContextProvider;