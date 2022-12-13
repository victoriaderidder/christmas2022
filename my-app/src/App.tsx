import React from 'react';
import './App.css';
import Title from './components/Title'
import Travel from './components/TheJourney';
import $ from "jquery";

function hideMe(toHide: string, toShow: string) {
  $('.' + toHide).hide();
  $('.' + toShow).show();
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='content'>
          <div className='title' onClick={() => hideMe('title', 'journey')}>
            <u><Title title='>Lizzy.' /></u>
          </div>
          <div className='journey' hidden>
            <Travel />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
