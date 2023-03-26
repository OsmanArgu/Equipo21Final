import React from 'react';
import Tablas from './Components/Materias';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MateriaApp from './Components/Materias';



function App() {
  return (
    <div>
      <Header></Header>
      <h1>Bienvenido a SITEC perros</h1>
      <MateriaApp />
      <Footer></Footer>
    </div>
  );
}

export default App;

