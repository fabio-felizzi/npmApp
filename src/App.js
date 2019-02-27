import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://crossorigin.me/https://registry.npmjs.org/')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          {data}
        </header>
      </div>
    );
  }
}

export default App;
