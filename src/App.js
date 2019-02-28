import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      packageInfo: null,
      packageDeps: [],
      packageDevDeps: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:1111/express')
      .then(response => response.json())
      .then(response => {
        const { dependencies, devDependencies } = response.body;
        Object.keys(dependencies).map(deps => {
          fetch(`http://localhost:1111/${deps}`)
            .then(resp => resp.json())
            .then(resp => {
              this.state.packageDeps.push(resp)
            })
        });
        Object.keys(devDependencies).map(devDeps => {
          fetch(`http://localhost:1111/${devDeps}`)
            .then(resp => resp.json())
            .then(resp => {
              this.state.packageDevDeps.push(resp)
            })
        });
        this.setState({packageInfo: response});
      });
  }

  renderDeps() {
    const { packageDeps, packageDevDeps } = this.state;
    console.log(packageDeps);
    
    const dependencies = packageDeps.map(dep => <li>{dep[0].body.name}</li>);

    return dependencies;
  }

  render() {
    const { packageInfo } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <ul>
              
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
