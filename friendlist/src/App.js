import React, { Component } from 'react';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';

import { lists } from './data/friends';

import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Dashboard lists={lists} />
        <Footer />
      </div>
    );
  }
}

export default App;
