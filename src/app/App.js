import React, { useContext, useEffect } from 'react';
import shopContext from '../context/shop-context'
import '../css/App.css';
import Navbar from './Navbar';
import MainContainer from './MainContainer';

function App() {
  const context = useContext(shopContext)

  useEffect( () => {
    let token = localStorage.getItem('token')
    if (token) {
      context.authenticatingToken(token)
    }
  }, [])

  return (
    <div className="App">
      <Navbar />
      <MainContainer />
    </div>
  );
}

export default App;
