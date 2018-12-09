import React, { Component } from 'react';
import { NamesContext } from './NamesStore';

class LeftPanel extends Component {
  state = { name: '' };

  handleChange = ({ target }) => {
    this.setState({ name: target.value });
  };

  resetName = () => this.setState({ name: '' });

  render() {
    return (
      <NamesContext.Consumer>
        {({ addName }) => (
          <form
            className="left-panel"
            onSubmit={event => {
              addName(this.state.name);
              event.preventDefault();
              this.resetName();
            }}
          >
            <input
              type="text"
              id="text"
              placeholder="Enter Name"
              className="input-box"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </form>
        )}
      </NamesContext.Consumer>
    );
  }
}

export default LeftPanel;
