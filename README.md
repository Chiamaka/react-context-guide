## Simple App Using Context in React

I've been running away from using the Context API for a while now (don't ask, I have no idea why). So after a while of fighting with myself, I decided that over lunch, I was going to read open source code and try to figure out what was going on.

After one hour of reading and rummaging on the react docs, I built this app to give me an understanding of the context API and I'll be explaining my thought pattern here.

This is a simple name taking app — you have a text box on the left, you write a name, press enter and the name appears on the right.

I came up with the simplest design ever because i'm lazy, sue me. I broke down the app into components and got to work.

<img width="746" alt="app breakdown" src="https://user-images.githubusercontent.com/2737103/50175811-b517f500-02f5-11e9-8e06-397619df18dc.png">


## Context Time

#### Note: This guide is best read with the source code.

### Run code

- run `git clone https://github.com/Chiamaka/react-context-guide.git`
- cd into project
- `npm start` to start up the project

From the diagram, we have three components

- App (The general app container)
  - LeftPanel (Child of App, Sibling to RightPanel)
  - RightPanel (Child of App, Sibling to LeftPanel)

We want the RightPanel and the LeftPanel to communicate and the normal way is to "lift state". We put the state and the event handlers in the `App` component. This way would work but we are here for the context API so we won't go this route.

Let's walk through how we would go about using the context API

### 1. Create a NameStore component

This would hold the state and the event handlers.

### 2. Import createContext from 'react'

`createContext` is a function that takes in the default state and returns an object that contains the Provider and Consumer.
We create context by doing something like this;

```javascript
import { createContext } from 'react';

const defaultState = {
  names: []
};

export const NamesContext = createContext(defaultState);
```

#### Provider and Consumer

The Provider broadcasts whatever value you give it and the Consumer consumes whatever values it gets. You can make any component a provider and allow any component consume the values that the provider is broadcasting (and the coolest thing is that whenever the state in the provider component changes, it is rebroadcasted and the consumers can consume the new changes).

### 3. Return the Provider gotten from createContext

In the `NamesStore` component, we created the context and since this is the "store", it would act as the provider for other components; so we return the `Provider` coupled with the values we would like the `Left` and `Right Panel` components to consume. The values we would like to "provide" is the state and the event handler to change that state.

This is how the render function should look like:

```javascript
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
```

### 4. Wrap the `LeftPanel` and `RightPanel` Components with the `NamesStore` Component

Because the `LeftPanel` and `RightPanel` components need to consume data from the `NamesStore`, they need to be wrapped around by the `NamesStore` component. So in the `App` component, our render function should look like this:

```javascript
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
```

### 5. Import the `NamesContext` into the `LeftPanel` and `RightPanel` component

Remember, the `LeftPanel` is where the textbox lives and `RightPanel` is where the names are shown. In the `LeftPanel`, we would want to use the `NamesContext.Consumer` component and get the event handler that is supposed to update the `names` state in `NamesStore` component.

The render function in the `LeftPanel` component should look something like this:

```javascript
render() {
  return (
    <NamesContext.Consumer>
      {({ addName }) => (
        <form
          className="left-panel"
          onSubmit={event => {
            addName(this.state.name); // event handler to update names array in NamesStore component
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
```

Likewise for the `RightPanel` – since this is where we would display the names, we would need to consume the `names` array in here.

```javascript
  <NamesContext.Consumer>
    {({ names }) => // names array from NamesStore component
      names.map(name => <div key={name}>{name}</div>)
    }
  </NamesContext.Consumer>
}
```

_The `Consumer` component requires a function as a child_
