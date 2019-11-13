import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import RandomPicture from './components/RandomPicture';

function App(props) {
  return (
    <div className="App">
      <RandomPicture />
    </div>
  );
}

export default connect(state => state, {})(App);
