import React, { Component } from 'react';
import Routes from './routes'

import api from './services/api'

import './styles.css'

import Header from './components/Header';
import MainPage from './Pages/main/index';

const App =() => (
  <div className='App'>
    <Header/>
    <Routes/>
  </div>
);

export default App;
