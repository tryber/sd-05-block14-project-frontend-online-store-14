import React from 'react';
import './App.css';
import * as api from './services/api';
import Searchbar from './components/Searchbar';

function App() {
  return (
    <div className="App-header">
      <h1>API Mercado Livre</h1>
      {console.log(api.getCategories())}
      <Searchbar />
    </div>
  );
}

export default App;
