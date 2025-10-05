import SearchIcon from './icons/SearchIcon';

export default function Header() {
  return (
    <header className="bg-blue-600 px-6 py-3">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-bold text-white">
          NARRATERRA
        </h1>

        <div className="flex-1 max-w-3xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar país o región..."
              className="w-full bg-transparent border-2 border-cyan-400 rounded-full px-4 py-1.5 pl-10 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-300 transition-colors"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
