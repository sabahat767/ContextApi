import logo from './logo.svg';
import './App.css';
import ThemeContextProvider from './Context/ThemeContextProvider';
import BookList from './Components/BookList';

function App() {
  return (
   <ThemeContextProvider>
     <BookList/>
   </ThemeContextProvider>
  );
}

export default App;
