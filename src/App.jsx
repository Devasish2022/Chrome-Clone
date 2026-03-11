import React from 'react';
import Header from './components/Header';
import MainSearch from './components/MainSearch';
import Shortcuts from './components/Shortcuts';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <MainSearch />
        <Shortcuts />
      </main>
    </div>
  );
}

export default App;
