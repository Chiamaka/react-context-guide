import React, { Component, createContext } from 'react';

const defaultState = {
  names: []
};

export const NamesContext = createContext(defaultState);

export default class NamesStore extends Component {
  state = defaultState;

  addName = name => {
    this.setState(prevState => ({
      names: [...prevState.names, name]
    }));
  };

  render() {
    return (
      <NamesContext.Provider
        value={{
          names: this.state.names,
          addName: this.addName
        }}
      >
        {this.props.children}
      </NamesContext.Provider>
    );
  }
}
