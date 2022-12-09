import axios from 'axios';
import './App.css';

function App() {
  axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&api_key${process.env.REACT_APP_MA_CLEF}`)

  return (
    <div className="App">
      <header className="App-header">
        {process.env.REACT_APP_MA_CLEF}
      </header>
    </div>
  );
}

export default App;