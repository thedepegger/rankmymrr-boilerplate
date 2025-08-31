import './App.css';

function App() {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    return false;
  };

  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
    return false;
  };

  return (
    <div className="App" onContextMenu={handleContextMenu}>
      <div className="logo-container">
        <img 
          src="/logo.png" 
          alt="rankmymrr Logo" 
          className="logo"
          loading="eager"
          decoding="async"
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
          onMouseDown={(e) => e.preventDefault()}
          draggable={false}
        />
      </div>
    </div>
  );
}

export default App;
