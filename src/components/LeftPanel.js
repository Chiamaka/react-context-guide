import React, { Component } from 'react';

class LeftPanel extends Component {
  render() {
    return (
      <div className="left-panel">
        <input type="text" id="text" placeholder="Enter Name" className="input-box" />
      </div>
    );
  }
}

export default LeftPanel;
