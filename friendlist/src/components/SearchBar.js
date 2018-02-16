import React, { Component } from 'react';

export class SearchBar extends Component {
  constructor(){
    super();
    this.state = {
      term: ''
    }
  }

  updateSearchTerm = (e) => {
    this.setState({
      term: e.target.value,
    });
  }

  render(){
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.submitSearchTerm(this.state.term);
        }} className="SearchBar">
        <input
          type="text"
          onChange={this.updateSearchTerm}
        />
        <input
          type="submit"
          value="Search"
        />
    </form>
    );
  }
}
