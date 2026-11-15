export default function AirQualityCard({ aqiData }) {
  // If data is still loading or null, show a safe loading message instead of crashing
  if (!aqiData) {
    return (
      <div style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h3 style={{ margin: '0 0 6px 0', fontSize: '15px', color: '#0284c7' }}>Air Quality Index</h3>
        <p style={{ margin: 0, fontSize: '13px', color: '#9ca3af' }}>Loading environmental data...</p>
      </div>
    );
  }

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '16px',
      padding: '20px',
      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)'
    }}>
      <h3 style={{ margin: '0 0 12px 0', fontSize: '15px', color: '#0284c7' }}>🌍 Air Quality Index</h3>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '13px' }}>
        <div>
          <span style={{ color: '#9ca3af', display: 'block', fontSize: '11px' }}>US AQI</span>
          <strong style={{ fontSize: '15px' }}>{aqiData.usAqi ?? 'N/A'}</strong>
        </div>
        <div>
          <span style={{ color: '#9ca3af', display: 'block', fontSize: '11px' }}>PM2.5</span>
          <strong style={{ fontSize: '15px' }}>{aqiData.pm25 ?? 'N/A'} µg/m³</strong>
        </div>
        <div>
          <span style={{ color: '#9ca3af', display: 'block', fontSize: '11px' }}>PM10</span>
          <strong style={{ fontSize: '15px' }}>{aqiData.pm10 ?? 'N/A'} µg/m³</strong>
        </div>
        <div>
          <span style={{ color: '#9ca3af', display: 'block', fontSize: '11px' }}>NO2</span>
          <strong style={{ fontSize: '15px' }}>{aqiData.no2 ?? 'N/A'}</strong>
        </div>
      </div>
    </div>
  );
}