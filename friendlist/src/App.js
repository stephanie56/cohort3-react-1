import React, { Component } from 'react';

import { Header } from './components/Header';
import { FriendList } from './components/FriendList';
import { Footer } from './components/Footer';

import { friendData } from './data/friends';

import './stylesheets/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FriendList friendData={friendData} />
        <Footer />
      </div>
    );
  }
}

export default App;
