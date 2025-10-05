import { createContext, useContext, useState, ReactNode } from 'react';
import { Region, Category } from '../types';

interface AppContextType {
  selectedRegion: Region | null;
  selectedCategory: Category | null;
  selectRegion: (region: Region | null) => void;
  selectCategory: (category: Category | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const selectRegion = (region: Region | null) => {
    setSelectedRegion(region);
    // Auto-select first available category when region is selected
    if (region) {
      const availableCategories = Object.keys(region.data) as Category[];
      if (availableCategories.length > 0) {
        setSelectedCategory(availableCategories[0]);
      }
    } else {
      setSelectedCategory(null);
    }
  };

  const selectCategory = (category: Category | null) => {
    setSelectedCategory(category);
  };

  return (
    <AppContext.Provider
      value={{
        selectedRegion,
        selectedCategory,
        selectRegion,
        selectCategory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
