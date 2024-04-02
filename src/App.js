import React from 'react';
import Board from './components/Board';

export default function App() {

  return (
    <div className='app'>
      <div className='title'>
        <h1>TIC-TAC-TOE APP</h1>
      </div>
      <Board />
    </div>
  );
}
