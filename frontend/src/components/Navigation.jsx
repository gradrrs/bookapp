export default function Navigation({ isLogin }) {
  return (
    <nav className="bg-blue-600 flex justify-between h-12 items-center px-4 text-white">
      <div className="flex-1">
        <ul className="flex items-center gap-6">
          <li className="cursor-pointer hover:opacity-80">Главная</li>
          <li className="cursor-pointer hover:opacity-80">Каталог</li>
          <li className="cursor-pointer hover:opacity-80">Избранное</li>
        </ul>
      </div>

      <div className="flex justify-center">
        <input
          type="text"
          className="text-slate-800 bg-amber-50 rounded-md px-3 py-1 outline-none focus:ring-2 ring-amber-200 transition-all w-64"
          placeholder="Поиск..."
        />
      </div>

      <div className="flex-1 flex justify-end">
        {isLogin ? (
          <ul className="flex items-center">
            <li className="cursor-pointer">Профиль</li>
          </ul>
        ) : (
          <ul className="flex items-center gap-4">
            <li className="cursor-pointer">Вход</li>
            <li className="bg-white text-blue-600 px-3 py-1 rounded-md font-medium cursor-pointer">
              Регистрация
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}