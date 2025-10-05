export default function DataPanel() {
  return (
    <div className="w-72 bg-cyan-600 rounded-3xl p-5">
      <h2 className="text-lg font-bold text-white mb-4">Datos</h2>

      <div className="bg-cyan-500/30 rounded-2xl p-6 min-h-[500px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-sm font-medium mb-2">
            Sin datos disponibles
          </p>
          <p className="text-white/80 text-xs">
            Selecciona una región en el mapa para ver información detallada
          </p>
        </div>
      </div>
    </div>
  );
}
