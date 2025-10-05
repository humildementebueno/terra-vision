import { useApp } from '../context/AppContext';
import GlobeIcon from './icons/GlobeIcon';
import LoadingOverlay from './LoadingOverlay';

export default function MapView() {
  const { selectedRegion, isLoadingRegion } = useApp();

  return (
    <div className="flex-1 bg-gray-800 rounded-3xl overflow-hidden relative border-2 border-gray-600 transition-all duration-300 min-h-[300px] lg:min-h-0">
      {isLoadingRegion && <LoadingOverlay message="Cargando imagen satelital..." />}

      {selectedRegion ? (
        <>
          {/* Satellite Image */}
          <img
            src={selectedRegion.imageUrl}
            alt={`${selectedRegion.name}, ${selectedRegion.country}`}
            className="absolute inset-0 w-full h-full object-cover animate-fadeIn"
          />

          {/* Overlay with region info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 animate-slideUp">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{selectedRegion.name}</h3>
            <p className="text-cyan-400 text-xs sm:text-sm">{selectedRegion.country}</p>
            <p className="text-gray-300 text-xs mt-2">
              {selectedRegion.coordinates.lat.toFixed(4)}°, {selectedRegion.coordinates.lng.toFixed(4)}°
            </p>
          </div>
        </>
      ) : (
        /* Empty State */
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <div className="mb-4 sm:mb-6">
              <GlobeIcon className="w-20 h-20 sm:w-32 sm:h-32 mx-auto text-gray-500" />
            </div>
            <p className="text-base sm:text-lg font-semibold text-gray-300 mb-2">Vista de Mapa Satelital</p>
            <p className="text-xs sm:text-sm text-gray-400">Selecciona una región para visualizar datos</p>
          </div>
        </div>
      )}
    </div>
  );
}
