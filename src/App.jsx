import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import Scene from '@/components/Scene';

const App = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <section className="layout">
      <main className="content">
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 100,
            position: [-4, 3, 6]
          }}
        >
          <Scene />
        </Canvas>
      </main>
      <header className="header glass">
        <h1 className="title">3D Visor</h1>
      </header>
      <div className="toolbar glass">
        <button className="toolbar-item glass" onClick={handleOpenSidebar} onTouchEnd={handleOpenSidebar}>SB</button>
      </div>
      <aside className={['sidebar', 'glass', openSidebar && 'active'].join(' ')}></aside>
    </section>
  );
}

export default App;