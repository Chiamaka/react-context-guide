import React, { Component } from 'react';

const NameWithRightHandEmoji = props => (
  <span role="img" aria-label="Africa" className="name">
    👉🏽 {props.children}
  </span>
);
class RightPanel extends Component {
  render() {
    return (
      <div className="right-panel">
        <h2 className="name-title">Names</h2>
        <NameWithRightHandEmoji>Chiamaka</NameWithRightHandEmoji>
        <NameWithRightHandEmoji>Jane</NameWithRightHandEmoji>
        <NameWithRightHandEmoji>Fred</NameWithRightHandEmoji>
      </div>
    );
  }
}

export default RightPanel;
