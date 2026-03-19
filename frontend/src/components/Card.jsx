import FavButton from './FavButton';

export default function Card({ title, author, cover }) {
  const coverUrl = cover ? `https://covers.openlibrary.org/b/id/${cover}-M.jpg` : null;

  return (
    <div className="bg-amber-50 p-10 pb-35 max-w-70">
      <div className="relative h-75 bg-amber-400 rounded-lg shadow-md transition-transform hover:scale-[1.02]">
        {coverUrl && (
          <img
            src={coverUrl}
            alt={title}
            className="w-full h-full object-fill rounded-lg"
          />
        )}
        <div className="absolute right-2 top-2 z-10">
          <FavButton />
        </div>
        <div className="flex h-full items-center justify-center">
          <span className="text-white font-medium"></span>
        </div>
      </div>
      <div className="mt-2">
        <div className="font-bold">{title}</div>
        <div className="text-sm text-gray-600">{author?.join(', ')}</div>
      </div>
    </div>
  );
}