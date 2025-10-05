import { useState, useRef, useEffect } from 'react';
import SearchIcon from './icons/SearchIcon';
import { useSearch } from '../hooks/useSearch';
import { useApp } from '../context/AppContext';

export default function Header() {
  const { searchQuery, setSearchQuery, filteredRegions } = useSearch();
  const { selectRegion } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsOpen(true);
  };

  const handleSelectRegion = (region: typeof filteredRegions[0]) => {
    selectRegion(region);
    setSearchQuery(region.name + ', ' + region.country);
    setIsOpen(false);
  };

  return (
    <header className="bg-blue-600 px-4 sm:px-6 py-3">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
        <h1 className="text-xl sm:text-2xl font-bold text-white text-center sm:text-left">
          TERRA-VISION
        </h1>

        <div className="flex-1 max-w-3xl relative" ref={dropdownRef}>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar país o región..."
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={() => searchQuery && setIsOpen(true)}
              className="w-full bg-transparent border-2 border-cyan-400 rounded-full px-4 py-1.5 pl-10 text-white placeholder-gray-300 focus:outline-none focus:border-cyan-300 transition-colors text-sm sm:text-base"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
          </div>

          {/* Dropdown */}
          {isOpen && filteredRegions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-cyan-400/30 rounded-lg shadow-xl overflow-hidden z-50 animate-slideDown max-h-64 sm:max-h-96 overflow-y-auto">
              {filteredRegions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => handleSelectRegion(region)}
                  className="w-full px-4 py-3 text-left hover:bg-cyan-400/10 transition-colors border-b border-gray-700 last:border-b-0"
                >
                  <div className="text-white font-medium text-sm sm:text-base">{region.name}</div>
                  <div className="text-gray-400 text-xs sm:text-sm">{region.country}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
