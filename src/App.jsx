import React from 'react';
import PintarItem from './Componentes/PintarItem';
import Todos from './Componentes/Todos';
import Navbar from './Componentes/Navbar';
import './App.css';

function App() {
  return (
    <div>
        <Navbar/>
        <Todos/>
        <PintarItem/>
    </div>
  )
}

export default App
