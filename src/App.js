import { Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      {/* <Routes>
        <Router path="about" element={<About />} />
      </Routes> */}
    </>
  );
}

export default App;
