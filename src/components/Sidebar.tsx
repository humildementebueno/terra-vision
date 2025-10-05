import { useApp } from '../context/AppContext';
import type { Category } from '../types';

const categories: { label: string; value: Category }[] = [
  { label: "Atmósfera", value: "atmosphere" },
  { label: "Vegetación", value: "vegetation" },
  { label: "Actividad volcánica", value: "volcanic" },
  { label: "Incendios", value: "fires" },
  { label: "Agua", value: "water" },
  { label: "Temperatura", value: "temperature" },
];

export default function Sidebar() {
  const { selectedCategory, selectCategory } = useApp();

  const handleCategoryClick = (category: Category) => {
    selectCategory(selectedCategory === category ? null : category);
  };

  return (
    <aside className="flex flex-row md:flex-col gap-2 w-full md:w-28 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => handleCategoryClick(category.value)}
          className={`
            rounded-full py-2 px-3
            text-xs font-medium
            text-center
            border-2
            transition-all duration-200
            whitespace-nowrap
            flex-shrink-0 md:flex-shrink
            ${selectedCategory === category.value
              ? 'bg-cyan-400 text-black border-cyan-400'
              : 'bg-transparent text-cyan-400 border-cyan-400 hover:bg-cyan-400/10'
            }
          `}
        >
          {category.label}
        </button>
      ))}
    </aside>
  );
}
