import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/header/Header';
import Hero from './Components/hero/Hero';
import Adiblar from './Components/main/card/Adiblar/Adiblar';
import Main from './Components/main/Main';
import obj from './Components/main/object/objects'
import Nazm from './Components/Nazm/Nazm';

function App() {
  const [newObj, setnewObj] = useState([...obj]);
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Routes>
        <Route path='nazm' element={<Nazm />} />
        <Route path='Adiblar/:id' element={<Adiblar newObj={newObj} />} />
      </Routes>
    </>
  );
}

export default App;
