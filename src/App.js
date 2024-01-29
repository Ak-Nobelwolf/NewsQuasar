import './App.css';

import React, { Component } from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import News from './components/News';

export class App extends Component {
  pageSize = 6;
  render() {
    return (
      <>
        <Navbar />
          <Routes>
            <Route exact path='/' element={<News key='general' country="in" category='general' pageSize={this.pageSize} />} />
            <Route exact path='/business' element={<News key='business' country="in" category='business' pageSize={this.pageSize} />} />
            <Route exact path='/entertainment' element={<News key='entertainment' country="in" category='entertainment' pageSize={this.pageSize} />} />
            <Route exact path='/health' element={<News key='health' country="in" category='health' pageSize={this.pageSize} />} />
            <Route exact path='/science' element={<News key='science' country="in" category='science' pageSize={this.pageSize} />} />
            <Route exact path='/sports' element={<News key='sports' country="in" category='sports' pageSize={this.pageSize} />} />
            <Route exact path='/technology' element={<News key='technology' country="in" category='technology' pageSize={this.pageSize} />} />
          </Routes>
      </>
    )
  }
}

export default App

