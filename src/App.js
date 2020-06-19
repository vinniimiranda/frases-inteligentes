import React, { useState } from 'react';
import './App.css';
import Routes from './routes';
import url from './assets/audio/song.mp3';

function App() {
  const [audio] = useState(new Audio(url));

  audio.play();
  audio.volume = 0.05;
  audio.loop = 1;

  return (
    <div className='App'>
      <Routes />
    </div>
  );
}

export default App;
