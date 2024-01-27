import './App.css';

import React, { Component } from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';

export class App extends Component {
  render() {
    return (
      <>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<News key='general' country="in" category='general' pageSize={5} />} />
            <Route exact path='/business' element={<News key='business' country="in" category='business' pageSize={5} />} />
            <Route exact path='/entertainment' element={<News key='entertainment' country="in" category='entertainment' pageSize={5} />} />
            <Route exact path='/health' element={<News key='health' country="in" category='health' pageSize={5} />} />
            <Route exact path='/science' element={<News key='science' country="in" category='science' pageSize={5} />} />
            <Route exact path='/sports' element={<News key='sports' country="in" category='sports' pageSize={5} />} />
            <Route exact path='/technology' element={<News key='technology' country="in" category='technology' pageSize={5} />} />
          </Routes>
      </>
    )
  }
}

export default App

