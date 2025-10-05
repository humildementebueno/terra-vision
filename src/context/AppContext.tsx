import { createContext, useContext, useState, ReactNode } from 'react';
import { Region, Category } from '../types';

interface AppContextType {
  selectedRegion: Region | null;
  selectedCategory: Category | null;
  isLoadingRegion: boolean;
  isLoadingData: boolean;
  selectRegion: (region: Region | null) => void;
  selectCategory: (category: Category | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isLoadingRegion, setIsLoadingRegion] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);

  const selectRegion = (region: Region | null) => {
    setIsLoadingRegion(true);

    // Simulate API call delay
    setTimeout(() => {
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

      setIsLoadingRegion(false);
    }, 800);
  };

  const selectCategory = (category: Category | null) => {
    if (category !== selectedCategory) {
      setIsLoadingData(true);

      // Simulate data fetching delay
      setTimeout(() => {
        setSelectedCategory(category);
        setIsLoadingData(false);
      }, 500);
    }
  };

  return (
    <AppContext.Provider
      value={{
        selectedRegion,
        selectedCategory,
        isLoadingRegion,
        isLoadingData,
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
