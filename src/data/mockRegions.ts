import { Region } from '../types';

export const mockRegions: Region[] = [
  {
    id: 'amazonas-brasil',
    name: 'Amazonas',
    country: 'Brasil',
    imageUrl: '/maps/fake/default-map.jpg',
    coordinates: { lat: -3.4653, lng: -62.2159 },
    data: {
      vegetation: {
        title: 'Índice de Vegetación NDVI',
        value: '0.72',
        status: 'warning',
        description: 'Deforestación detectada en los últimos 30 días',
        lastUpdate: '2025-10-04',
        metrics: [
          { label: 'Área deforestada', value: '1,250 km²' },
          { label: 'Cobertura vegetal', value: '82%' },
          { label: 'Cambio mensual', value: '-3.2%' },
        ],
      },
      fires: {
        title: 'Detección de Incendios',
        value: '47 focos',
        status: 'critical',
        description: 'Alta actividad de incendios forestales',
        lastUpdate: '2025-10-04',
        metrics: [
          { label: 'Focos activos', value: '47' },
          { label: 'Área afectada', value: '3,800 ha' },
          { label: 'Nivel de riesgo', value: 'Alto' },
        ],
      },
      atmosphere: {
        title: 'Calidad del Aire',
        value: 'Moderada',
        status: 'warning',
        description: 'Humo de incendios afectando la calidad del aire',
        lastUpdate: '2025-10-04',
        metrics: [
          { label: 'PM2.5', value: '45 µg/m³' },
          { label: 'CO₂', value: '420 ppm' },
          { label: 'Visibilidad', value: '8 km' },
        ],
      },
    },
  },
  {
    id: 'puerto-alegre-brasil',
    name: 'Puerto Alegre',
    country: 'Brasil',
    imageUrl: '/maps/fake/default-map.jpg',
    coordinates: { lat: -30.0346, lng: -51.2177 },
    data: {
      water: {
        title: 'Nivel de Inundación',
        value: 'Crítico',
        status: 'critical',
        description: 'Inundaciones severas en áreas urbanas',
        lastUpdate: '2025-10-04',
        metrics: [
          { label: 'Nivel del río', value: '5.2 m' },
          { label: 'Área inundada', value: '280 km²' },
          { label: 'Población afectada', value: '~150,000' },
        ],
      },
      atmosphere: {
        title: 'Humedad Relativa',
        value: '95%',
        status: 'normal',
        description: 'Alta humedad por precipitaciones',
        lastUpdate: '2025-10-04',
        metrics: [
          { label: 'Humedad', value: '95%' },
          { label: 'Precipitación 24h', value: '180 mm' },
          { label: 'Temperatura', value: '18°C' },
        ],
      },
    },
  },
  {
    id: 'cotopaxi-ecuador',
    name: 'Volcán Cotopaxi',
    country: 'Ecuador',
    imageUrl: '/maps/fake/default-map.jpg',
    coordinates: { lat: -0.6812, lng: -78.4372 },
    data: {
      volcanic: {
        title: 'Actividad Volcánica',
        value: 'Moderada',
        status: 'warning',
        description: 'Aumento de actividad sísmica detectada',
        lastUpdate: '2025-10-04',
        metrics: [
          { label: 'Sismos/día', value: '23' },
          { label: 'Emisión SO₂', value: '850 ton/día' },
          { label: 'Nivel de alerta', value: 'Amarillo' },
        ],
      },
      temperature: {
        title: 'Temperatura Superficial',
        value: '12°C',
        status: 'normal',
        description: 'Temperatura normal para la altitud',
        lastUpdate: '2025-10-04',
        metrics: [
          { label: 'Temp. superficie', value: '12°C' },
          { label: 'Temp. cráter', value: '45°C' },
          { label: 'Anomalía térmica', value: '+2°C' },
        ],
      },
    },
  },
  {
    id: 'patagonia-argentina',
    name: 'Patagonia',
    country: 'Argentina',
    imageUrl: '/maps/fake/default-map.jpg',
    coordinates: { lat: -41.8102, lng: -68.9063 },
    data: {
      temperature: {
        title: 'Anomalía de Temperatura',
        value: '+3.5°C',
        status: 'warning',
        description: 'Temperatura superior al promedio histórico',
        lastUpdate: '2025-10-04',
        metrics: [
          { label: 'Temp. actual', value: '15°C' },
          { label: 'Promedio histórico', value: '11.5°C' },
          { label: 'Anomalía', value: '+3.5°C' },
        ],
      },
      vegetation: {
        title: 'Cobertura de Hielo',
        value: '-8%',
        status: 'warning',
        description: 'Retroceso glaciar acelerado',
        lastUpdate: '2025-10-04',
        metrics: [
          { label: 'Área glaciar', value: '16,800 km²' },
          { label: 'Pérdida anual', value: '-8%' },
          { label: 'Tasa de retroceso', value: '15 m/año' },
        ],
      },
    },
  },
  {
    id: 'ciudad-mexico',
    name: 'Ciudad de México',
    country: 'México',
    imageUrl: '/maps/fake/default-map.jpg',
    coordinates: { lat: 19.4326, lng: -99.1332 },
    data: {
      atmosphere: {
        title: 'Calidad del Aire',
        value: 'Mala',
        status: 'critical',
        description: 'Altos niveles de contaminación atmosférica',
        lastUpdate: '2025-10-04',
        metrics: [
          { label: 'PM10', value: '156 µg/m³' },
          { label: 'Ozono', value: '0.095 ppm' },
          { label: 'AQI', value: '165' },
        ],
      },
      temperature: {
        title: 'Isla de Calor Urbano',
        value: '+6°C',
        status: 'warning',
        description: 'Temperatura urbana significativamente mayor',
        lastUpdate: '2025-10-04',
        metrics: [
          { label: 'Temp. urbana', value: '26°C' },
          { label: 'Temp. rural', value: '20°C' },
          { label: 'Diferencia', value: '+6°C' },
        ],
      },
    },
  },
  {
    id: 'biobio-chile',
    name: 'Región del Bío-Bío',
    country: 'Chile',
    imageUrl: '/maps/fake/default-map.jpg',
    coordinates: { lat: -37.4689, lng: -72.3527 },
    data: {
      fires: {
        title: 'Incendios Forestales',
        value: '12 focos',
        status: 'warning',
        description: 'Múltiples incendios forestales activos',
        lastUpdate: '2025-10-04',
        metrics: [
          { label: 'Focos activos', value: '12' },
          { label: 'Hectáreas quemadas', value: '8,500 ha' },
          { label: 'Velocidad viento', value: '35 km/h' },
        ],
      },
      vegetation: {
        title: 'Índice de Vegetación',
        value: '0.65',
        status: 'normal',
        description: 'Cobertura forestal en estado normal',
        lastUpdate: '2025-10-04',
        metrics: [
          { label: 'NDVI', value: '0.65' },
          { label: 'Área forestal', value: '12,400 km²' },
          { label: 'Cambio anual', value: '-1.2%' },
        ],
      },
    },
  },
];
