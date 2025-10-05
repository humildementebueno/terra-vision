export type Category = 'atmosphere' | 'vegetation' | 'volcanic' | 'fires' | 'water' | 'temperature';

export type AlertStatus = 'normal' | 'warning' | 'critical';

export interface Metric {
  label: string;
  value: string;
}

export interface RegionData {
  title: string;
  value: string;
  status: AlertStatus;
  description: string;
  lastUpdate: string;
  metrics: Metric[];
}

export interface Region {
  id: string;
  name: string;
  country: string;
  imageUrl: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  data: {
    atmosphere?: RegionData;
    vegetation?: RegionData;
    volcanic?: RegionData;
    fires?: RegionData;
    water?: RegionData;
    temperature?: RegionData;
  };
}

export interface AppState {
  selectedRegion: Region | null;
  selectedCategory: Category | null;
  searchQuery: string;
}
