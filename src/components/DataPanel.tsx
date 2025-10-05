import { useApp } from '../context/AppContext';
import type { RegionData } from '../types';
import LoadingSpinner from './LoadingSpinner';
import InstrumentBadge from './InstrumentBadge';

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

const getTrendIcon = (trend?: RegionData['trend']) => {
  switch (trend) {
    case 'increasing':
      return '📈';
    case 'decreasing':
      return '📉';
    case 'stable':
      return '➡️';
    default:
      return null;
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
    <div className="w-full lg:w-72 bg-cyan-600 rounded-3xl p-4 sm:p-5 transition-all duration-300 min-h-[400px] lg:min-h-0">
      <h2 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Datos</h2>

      <div className="bg-cyan-500/30 rounded-2xl p-4 sm:p-5 min-h-[350px] sm:min-h-[400px] lg:min-h-[500px] relative">
        {isLoadingData && (
          <div className="absolute inset-0 bg-cyan-600/50 backdrop-blur-sm rounded-2xl flex items-center justify-center z-10">
            <div className="text-center">
              <LoadingSpinner size="md" />
              <p className="text-white text-xs mt-3 animate-pulse">Obteniendo datos...</p>
            </div>
          </div>
        )}

        {currentData ? (
          <div className="space-y-3 sm:space-y-4 animate-fadeIn">
            {/* Instrument Badge */}
            {currentData.instrument && (
              <div className="flex items-center justify-between gap-2">
                <InstrumentBadge instrument={currentData.instrument} />
                {currentData.trend && (
                  <span className="text-lg" title={`Tendencia: ${currentData.trend}`}>
                    {getTrendIcon(currentData.trend)}
                  </span>
                )}
              </div>
            )}

            {/* Status Indicator */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(currentData.status)}`}></div>
              <span className="text-white text-xs sm:text-sm font-medium capitalize">{currentData.status}</span>
            </div>

            {/* Title and Value */}
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-2">{currentData.title}</h3>
              <p className="text-white text-xl sm:text-2xl font-bold">{currentData.value}</p>
            </div>

            {/* Narrative Section - New Educational Content */}
            {currentData.narrative && (
              <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-lg p-3 sm:p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-cyan-300 text-xs sm:text-sm font-semibold">📖 Explicación</span>
                </div>
                <p className="text-white/95 text-xs sm:text-sm leading-relaxed">
                  {currentData.narrative}
                </p>
              </div>
            )}

            {/* Description */}
            <p className="text-white/90 text-xs sm:text-sm italic">{currentData.description}</p>

            {/* Metrics */}
            <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-white/20">
              <h4 className="text-white/70 text-xs font-semibold mb-2">Datos de soporte</h4>
              {currentData.metrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white/80 text-xs">{metric.label}</span>
                  <span className="text-white font-semibold text-xs sm:text-sm">{metric.value}</span>
                </div>
              ))}
            </div>

            {/* Last Update */}
            <div className="pt-3 sm:pt-4 border-t border-white/20">
              <p className="text-white/60 text-xs">
                📡 Fuente: Terra/NASA • Actualizado: {new Date(currentData.lastUpdate).toLocaleDateString('es-ES')}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center px-4">
              <p className="text-white text-xs sm:text-sm font-medium mb-2">
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
