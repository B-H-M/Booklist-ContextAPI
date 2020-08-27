import React from 'react';
import BookContextProvider from './Context/BookContext';



function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <h1>Read Books</h1>
      </BookContextProvider>
      
    </div>
  );
}

export default App;
