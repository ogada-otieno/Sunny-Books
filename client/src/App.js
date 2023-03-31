//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookCard from './components/BookCard'
import BookList from './components/BookList';

function App() {
 

  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<BookList/>}></Route>
        <Route path="/books" element={<BookCard/>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
