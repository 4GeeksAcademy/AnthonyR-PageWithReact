import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import Navbar from './components/navbar';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <div className='container'>
      <Jumbotron />
      <Cards />
      <Cards />
    </div>
  </React.StrictMode>,
)
