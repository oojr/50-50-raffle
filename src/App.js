import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleAppBar from './components/SimpleAppBar';
import SimpleTable from './components/SimpleTable';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleAppBar />
        <SimpleTable />
      </div>
    );
  }
}

export default App;
