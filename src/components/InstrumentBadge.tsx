import type { TerraInstrument } from '../types';

interface InstrumentBadgeProps {
  instrument: TerraInstrument;
}

const instrumentInfo: Record<TerraInstrument, { icon: string; color: string; fullName: string }> = {
  MODIS: {
    icon: '📡',
    color: 'bg-blue-500/20 border-blue-400 text-blue-300',
    fullName: 'Moderate Resolution Imaging Spectroradiometer'
  },
  ASTER: {
    icon: '🛰️',
    color: 'bg-purple-500/20 border-purple-400 text-purple-300',
    fullName: 'Advanced Spaceborne Thermal Emission and Reflection Radiometer'
  },
  CERES: {
    icon: '☀️',
    color: 'bg-yellow-500/20 border-yellow-400 text-yellow-300',
    fullName: 'Clouds and Earth\'s Radiant Energy System'
  },
  MISR: {
    icon: '🌫️',
    color: 'bg-gray-500/20 border-gray-400 text-gray-300',
    fullName: 'Multi-angle Imaging SpectroRadiometer'
  },
  MOPITT: {
    icon: '💨',
    color: 'bg-green-500/20 border-green-400 text-green-300',
    fullName: 'Measurements of Pollution in the Troposphere'
  }
};

export default function InstrumentBadge({ instrument }: InstrumentBadgeProps) {
  const info = instrumentInfo[instrument];

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${info.color} text-xs font-medium`}
      title={info.fullName}
    >
      <span>{info.icon}</span>
      <span>{instrument}</span>
      <span className="text-white/60">Terra</span>
    </div>
  );
}
