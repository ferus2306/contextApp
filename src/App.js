import React from 'react';
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">

    {/* Now items inside ThemeContextProvider are passed as props in other parts of components */}
    <ThemeContextProvider>
      <Navbar/>
      <BookList />
    </ThemeContextProvider>
    </div>
  );
}

export default App;
