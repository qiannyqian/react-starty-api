import React, { Component } from 'react';
import './App.css';

const apiEndpoint = 'https://api.randomuser.me/';

class App extends Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    console.log('Component mounted');
    const url = apiEndpoint;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({ person: data.results[0], loading: false });
  }
  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>No person found.</div>;
    }

    return (
      <div className="App">
        <div> {this.state.person.name.title}</div>
        <div> {this.state.person.name.first}</div>
        <div> {this.state.person.name.last}</div>
        <img src={this.state.person.picture.large} alt="Person" />
      </div>
    );
  }
}

export default App;
