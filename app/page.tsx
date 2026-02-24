export default function PortfolioHome() {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Your other portfolio content can go here, layered on top using z-index */}
      
      <iframe 
        src="/neural_network.html" 
        title="Quantum Neural Network Background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 'none',
          zIndex: 0 // Puts it in the background
        }}
      />
    </div>
  );
}