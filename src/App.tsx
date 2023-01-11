import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/navbar';
import CriarProjetos from './pages/CriarProjetos';
import Home from './pages/Home';
import ListaProjeto from './pages/ListaProjeto';
import Projetos from './pages/Projetos';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/criarprojetos' element={<CriarProjetos />}/>
        <Route path='/listaprojeto' element={<ListaProjeto />}/>
        <Route path='/projetos' element={<Projetos />}/>
      </Routes>
    </Router>

  );
}

export default App;
