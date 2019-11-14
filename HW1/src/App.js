import React from 'react';
import './css/main.css';
import './css/header.css';
import './css/footer.css';
import Header from './components/Header';
import MainContainer from './components/main/MainContainer';
import Footer from './components/Footer';



function App() {
  return (
    <div className="wrapper">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
