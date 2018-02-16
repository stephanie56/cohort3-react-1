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

  submitSearchTerm = (value) => {
    this.setState({
      term: value
    });

    console.log(this.state.term);
  }


  render() {
    return (
      <div className="App">
        <Header
          submitSearchTerm={this.submitSearchTerm}
        />
        <Dashboard
          searchFieldText={this.state.term}
          data={this.state.data} />
        <Footer />
      </div>
    );
  }
}

export default App;
