import React from 'react';
import { Header } from './Header.jsx';
import { SideNav } from './Nav/SideNav.jsx';
import { Board } from './Board/Board.jsx';

function App() {

  return (
    <div className='container'>
      <Header />
      <SideNav />
      <Board />
 
    </div>
  );
}

export default App;
