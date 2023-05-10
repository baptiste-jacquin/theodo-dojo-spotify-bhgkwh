import logo from './assets/logo.svg';
import './App.css';

import { useState } from 'react';
import { fetchTracks } from './lib/fetchTracks';
import { useQuery } from '@tanstack/react-query';

const App = () => {
  const [trackIndex, setTrackIndex] = useState(0);

  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };

  const { data: tracks } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });

  const AlbumCover = ({ track }) => {
    const src = track?.album.images[0].url;
    return <img src={src} style={{ width: 400, height: 400 }} />;
  };

  console.log(tracks?.length);
  console.log(tracks?.[0]?.track.name);

  const selectedTrack = tracks?.[trackIndex]?.track;
  const trackUrls = selectedTrack?.preview_url;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome on this blind test</h1>
      </header>
      <div className="App-images">
        <p>Il va falloir modifier le code pour faire un vrai blind test !</p>
      </div>
      <div className="App-buttons"></div>
      <audio src={trackUrls} autoPlay controls />
      <button onClick={goToNextTrack}>Next track</button>
      <div className="App-images">
        <p> On a récupéré {tracks?.length} de tes fichiers </p>
      </div>
      <AlbumCover track={selectedTrack} />
    </div>
  );
};


export default App;
