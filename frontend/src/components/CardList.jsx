import Card from './Card';

export default function CardList({ books, text}) {
  return (
    <>
    <h1 className="p-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center">
  {text}
</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 max-w-7xl mx-auto p-10">
      {books.map((book) => (
        <Card
          key={book.key}
          title={book.title}
          author={book.author_name}
          cover={book.cover_i}
        />
      ))}
    </div>
    </>
  );
  
}