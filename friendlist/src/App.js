import React, { Component } from 'react';

import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';

import { friendData } from './data/friends';

import './stylesheets/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      friendFilter: '',
      bestFriendFilter: '',
      allFriends: friendData,
      bestFriends: friendData.filter(friend => friend.isBestFriend),
      filteredFriends: null,
      filteredBestFriends: null
    };
  }

  componentWillMount(){
    this.setState({
      filteredFriends: this.state.allFriends,
      filteredBestFriends: this.state.bestFriends
    });
  }

  updateSearchTerm = (e, label) => {
    this.setState({
      [label]: e.target.value,
    });
  }

  submitSearchTerm = () => {
    const data = label === 'friendFilter' ? friendData : this.state.bestFriends;
    const filteredData =  this.state[label].length > 0 ? data.filter(({first, last}) => first === this.state[label] || last === this.state[label]) : data;
    this.setState({
      [label]: filteredData
    });
  }

  render() {
    return (
      <div className="App">
        <Header title="FriendList" />
        <SearchBar
          className="SearchBar"
          updateSearchTerm={this.updateSearchTerm}
          submitSearchTerm={this.submitSearchTerm}
        />
        <Dashboard
          filteredFriends={this.state.filteredFriends}
          filteredBestFriends={this.state.filteredBestFriends}
          bestFriends={this.state.bestFriends}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
