import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css'

function App() {
  const [data, setData] = useState<{name: string}[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/players')
      .then(response => setData(response.data));
  }, []);

  interface Player{
    name: string;

  }

  return (
    <>

    <div>
      <h1>MTG RANK</h1>
      <button>Novo Draft</button>
      <p>Selecione os players abaixo:</p>

      <div>
      {data.map(player => (
        <p>{player.name}</p>
      ))}
    </div>

    </div>
      
    
    </>

  );
}

export default App;