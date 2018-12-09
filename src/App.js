import React, { Component } from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';
import NamesStore from './components/NamesStore';
class App extends Component {
  render() {
    return (
      <div className="App">
        <NamesStore>
          <LeftPanel />
          <RightPanel />
        </NamesStore>
        <Footer />
      </div>
    );
  }
}

export default App;
