import { useApp } from '../context/AppContext';
import type { RegionData } from '../types';
import LoadingSpinner from './LoadingSpinner';

const getStatusColor = (status: RegionData['status']) => {
  switch (status) {
    case 'normal':
      return 'bg-green-500';
    case 'warning':
      return 'bg-yellow-500';
    case 'critical':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export default function DataPanel() {
  const { selectedRegion, selectedCategory, isLoadingData } = useApp();

  const getCurrentData = (): RegionData | null => {
    if (!selectedRegion || !selectedCategory) return null;
    return selectedRegion.data[selectedCategory] || null;
  };

  const currentData = getCurrentData();

  return (
    <div className="w-72 bg-cyan-600 rounded-3xl p-5 transition-all duration-300">
      <h2 className="text-lg font-bold text-white mb-4">Datos</h2>

      <div className="bg-cyan-500/30 rounded-2xl p-5 min-h-[500px] relative">
        {isLoadingData && (
          <div className="absolute inset-0 bg-cyan-600/50 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
            <div className="text-center">
              <LoadingSpinner size="md" />
              <p className="text-white text-xs mt-3 animate-pulse">Obteniendo datos...</p>
            </div>
          </div>
        )}

        {currentData ? (
          <div className="space-y-4 animate-fadeIn">
            {/* Status Indicator */}
            <div className="flex items-center gap-2 mb-4">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(currentData.status)}`}></div>
              <span className="text-white text-sm font-medium capitalize">{currentData.status}</span>
            </div>

            {/* Title and Value */}
            <div>
              <h3 className="text-white font-semibold text-base mb-2">{currentData.title}</h3>
              <p className="text-white text-2xl font-bold">{currentData.value}</p>
            </div>

            {/* Description */}
            <p className="text-white/90 text-sm">{currentData.description}</p>

            {/* Metrics */}
            <div className="space-y-3 pt-4 border-t border-white/20">
              {currentData.metrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white/80 text-xs">{metric.label}</span>
                  <span className="text-white font-semibold text-sm">{metric.value}</span>
                </div>
              ))}
            </div>

            {/* Last Update */}
            <div className="pt-4 border-t border-white/20">
              <p className="text-white/60 text-xs">
                Última actualización: {new Date(currentData.lastUpdate).toLocaleDateString('es-ES')}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <p className="text-white text-sm font-medium mb-2">
                Sin datos disponibles
              </p>
              <p className="text-white/80 text-xs">
                {!selectedRegion
                  ? 'Selecciona una región en el mapa'
                  : 'Selecciona una categoría para ver datos'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
