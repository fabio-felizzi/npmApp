import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      packageInfo: null,
      packageDeps: null,
      packageDevDeps: null,
    };
  }

  componentDidMount() {
    fetch('http://localhost:1111/express')
      .then(response => response.json())
      .then(response => {
        const { dependencies, devDependencies } = response.body;
        console.log(dependencies, devDependencies)
        Object.keys(dependencies).map(deps => {
          console.log('DEPS', deps)
          fetch(`http://localhost:1111/${deps}`)
            .then(resp => resp.json())
            .then(resp => {
              this.setState({packageDeps: resp});
            })
        });
        Object.keys(devDependencies).map(devDeps => {
          fetch(`http://localhost:1111/${devDeps}`)
            .then(resp => resp.json())
            .then(resp => {
              this.setState({packageDevDeps: resp});
            })
        });
        this.setState({packageInfo: response});
      });
  }

  render() {
    const { packageInfo } = this.state;
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <div>
            
          </div>
        </header>
      </div>
    );
  }
}

export default App;
