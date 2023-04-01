//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookCard from './components/BookCard'
import BookList from './components/BookList';
import HomePage from './components/HomePage';

function App() {
 

  return (
    <div className="App">
      <Routes>
        <Route path = "/" element={<HomePage/>}></Route>
        <Route path="/books" element= {<BookList/>}></Route>
        <Route path="/book-card" element={<BookCard/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
