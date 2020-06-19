import React, { useRef } from 'react';
import './App.css';
import Routes from './routes';
import { useEffect } from 'react';
import url from './assets/audio/song.mp3';
function App() {
  const audioRef = useRef();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
      audioRef.current.muted = false;
      setTimeout(() => {
        audioRef.current.play();
      }, 2000);
    }
  }, [audioRef]);

  document.body.addEventListener('mousemove', function () {
    audioRef.current.play();
  });
  return (
    <div className='App'>
      <audio src={url} ref={audioRef} muted></audio>
      <Routes />
    </div>
  );
}

export default App;
