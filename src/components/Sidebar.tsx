import { useState } from 'react';

export default function Sidebar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const categories = [
    "Atmósfera",
    "Vegetación",
    "Actividad volcánica",
    "Incendios",
    "Agua",
    "Temperatura",
  ];

  return (
    <aside className="flex flex-col gap-2 w-28">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`
            rounded-full py-2 px-3
            text-xs font-medium
            text-center
            border-2
            transition-all duration-200
            ${activeIndex === index
              ? 'bg-cyan-400 text-black border-cyan-400'
              : 'bg-transparent text-cyan-400 border-cyan-400 hover:bg-cyan-400/10'
            }
          `}
        >
          {category}
        </button>
      ))}
    </aside>
  );
}
