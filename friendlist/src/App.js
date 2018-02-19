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

  applyFilter = (term, data) => {
    return term.length > 0 ?
    data.filter(({first, last}) => first === term || last === term) : data;
  }

  updateSearchTerm = (e, label) => {
    this.setState({
      [label]: e.target.value,
    });
  }

  submitSearchTerm = (label) => {
    const filteredData = label === 'filteredFriends' ?
    this.applyFilter(this.state.friendFilter, this.state.allFriends) : this.applyFilter(this.state.bestFriendFilter, this.state.bestFriends); 
    this.setState({
      [label]: filteredData
    });
  }

  render() {
    const { filteredFriends, filteredBestFriends, bestFriends } = this.state;
    return (
      <div className="App">
        <Header title="FriendList" />
        <SearchBar
          className="SearchBar"
          updateSearchTerm={this.updateSearchTerm}
          submitSearchTerm={this.submitSearchTerm}
        />
        <Dashboard
          filteredFriends={filteredFriends}
          filteredBestFriends={filteredBestFriends}
          bestFriends={bestFriends}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
