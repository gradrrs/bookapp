import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import axios from 'axios';
import CardList from './components/CardList';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://openlibrary.org/search.json', {
          params: { q: 'book', limit: 8}
        });
        console.log('response.data:', response.data);
        console.log('docs:', response.data.docs);
        setBooks(response.data.docs || []); 
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <Navigation isLogin={true} />
      <CardList books={books} text={'ТОП 8 КНИГ'} />
    </>
  );
}

export default App;