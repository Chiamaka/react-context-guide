import React, { Component } from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftPanel />
        <RightPanel />
        <Footer />
      </div>
    );
  }
}

export default App;
