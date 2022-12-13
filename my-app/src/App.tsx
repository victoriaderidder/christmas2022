import React from 'react';
import './App.css';
import Library from './components/Library'
import Travel from './components/TheJourney';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Library title='Hello!' />
          <Travel />
        </p>
      </header>
    </div>
  );
}

export default App;
