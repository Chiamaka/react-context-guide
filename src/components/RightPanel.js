import React, { Component } from 'react';
import { NamesContext } from './NamesStore';

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
        <NamesContext.Consumer>
          {({ names }) =>
            names.map(name => <NameWithRightHandEmoji key={name}>{name}</NameWithRightHandEmoji>)
          }
        </NamesContext.Consumer>
      </div>
    );
  }
}

export default RightPanel;
