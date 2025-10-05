import GlobeIcon from './icons/GlobeIcon';

export default function MapView() {
  return (
    <div className="flex-1 bg-gray-800 rounded-3xl overflow-hidden relative border-2 border-gray-600">
      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="mb-6">
            <GlobeIcon className="w-32 h-32 mx-auto text-gray-500" />
          </div>
          <p className="text-lg font-semibold text-gray-300 mb-2">Vista de Mapa Satelital</p>
          <p className="text-sm text-gray-400">Selecciona una región para visualizar datos</p>
        </div>
      </div>
    </div>
  );
}
