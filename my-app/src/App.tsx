import React from 'react';
import './App.css';
import Travel from './components/TheJourney';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='content'>
          <div className='journey'>
            <Travel />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
