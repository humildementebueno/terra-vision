import LoadingSpinner from './LoadingSpinner';

export default function LoadingOverlay({ message = 'Cargando...' }: { message?: string }) {
  return (
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10 animate-fadeIn">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="text-white mt-4 text-sm animate-pulse">{message}</p>
      </div>
    </div>
  );
}
