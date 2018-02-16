import React, { Component } from 'react';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';

import { data } from './data/friends';

import './stylesheets/App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      term: '',
      data
    };
  }

  updateSearchTerm = (e) => {
    this.setState({
      term: e.target.value,
      data: this.state.data.filter(this.matchSearch)
    });
  }

  matchSearch = (friend) => {
    for(let key in friend){
      return friend[key] === this.state.term;
    }
  }


  render() {
    return (
      <div className="App">
        <Header
          searchFieldText={this.state.term}
          updateSearchTerm={this.updateSearchTerm}
        />
        <Dashboard data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
