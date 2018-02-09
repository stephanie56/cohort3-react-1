import React, { Component } from 'react';

import { Header } from './components/Header';
import { FriendList } from './components/FriendList';
import { Footer } from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <FriendList />
        <Footer />
      </div>
    );
  }
}

export default App;
