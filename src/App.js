import { useState } from 'react';
import './App.css';
import { ReactComponent as Cake } from './cake.svg';
import confetti from 'canvas-confetti';
import kermit from './kermit1.gif';

function App() {
  const [screen, setScreen] = useState('home');
  const [showText, setShowText] = useState(false);

  const Ribbon = () => (
    <div className="ribbon-assembly">
      <div className="ribbon-knot"></div>
      <div className="ribbon-loops"></div>
    </div>
  );

  const Rose = () => (
    <div className="rose-wrapper">
      <div className="rose-inner-animator">
        <div className="sparkles">
          <div/><div/><div/><div/><div/><div/><div/><div/><div/>
        </div>
        <div className="rose-leaves">
          <div/>
          <div/>
        </div>
        <div className="stem-leaf"/>
        <div className="thorns">
          <div/><div/><div/><div/>
        </div>
        <div className="rose-petals">
          <div/><div/><div/><div/><div/><div/><div/>
        </div>
      </div>
    </div>
  );

  const handleStart = () => {
    setScreen('loading');
    setTimeout(() => {
      setScreen('main');
      setTimeout(() => {
        confetti({
          particleCount: 180,
          spread: 80,
          origin: { x: 0.05, y: 0.7 },
          angle: 55,
          scalar: window.innerWidth > 768 ? 1.8 : 1,
        });
        confetti({
          particleCount: 180,
          spread: 80,
          origin: { x: 0.95, y: 0.7 },
          angle: 125,
          scalar: window.innerWidth > 768 ? 1.8 : 1,
        });

        const end = Date.now() + 7500;
        const frame = () => {
          confetti({
            particleCount: 3,
            angle: 270,
            spread: 120,
            origin: { x: Math.random(), y: -0.2 },
            gravity: 0.6,
            drift: 0.5,
            scalar: window.innerWidth > 768 ? 1.4 : 1,
            ticks: 300,
          });
          if (Date.now() < end) requestAnimationFrame(frame);
        };
        frame();
      }, 100);
    }, 8000);
    setTimeout(() => {
      setShowText(true);
    }, 8000 + 100 + 2000); 
  };

  const daConfetii = () => {
    confetti({
      particleCount: 500,
      spread: 100,
      origin: { x: 0.2, y: -0.4 },
      angle: -90,
      scalar: window.innerWidth > 768 ? 2 : 1.5,
    });
  }

  if (screen === 'loading') {
    return (
      <div className="App">
        <img src={kermit} alt="Loading..." className="loading-gif" />
        <div className="loading-container">
          <div className="loading-bar">
            <div className="loading-fill"></div>
          </div>
          <p className="loading-text">Se pregatesc chestii...</p>
        </div>
        <p className="bottom-text">Cea mai de automatist chestie pe care o sa o vezi azi!! =))</p>
      </div>
    );
  }

  if (screen === 'main') {
    return (
      <div className="App">
        <canvas id="confetti-canvas"></canvas>
        
        <div className="roses-top">
          <Rose />
          <Rose />
          <Rose />
          <Ribbon />
        </div>

        <h2 className={`cake-text ${showText ? 'visible' : ''}`} onClick={daConfetii}>Happy Birthday!!! 🥳🫶🏻</h2>
        
        <div className="main-content">
          <Cake className="cake" />
        </div>
        <p className="bottom-text">Apasa pe text!!!</p>
      </div>
    );
  }

  return (
    <div className="App">
      <h1 onClick={handleStart}>Apasa pentru a incepe!!!</h1>
    </div>
  );
}

export default App;