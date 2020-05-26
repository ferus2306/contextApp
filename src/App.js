import React from 'react';
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">

    {/* Now items inside ThemeContextProvider are passed as props in other parts of components */}
    
    <ThemeContextProvider>
      <AuthContextProvider>
        <Navbar/>
        <BookList />
        <ThemeToggle />
      </AuthContextProvider>
    </ThemeContextProvider>
    
    </div>
  );
}

export default App;
