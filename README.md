## Simple App Using Context in React

I've been running away from using the Context API for a while now (don't ask, I have no idea why). So after a while of fighting with myself, I decided that over lunch, I was going to read open source code and try to figure out what was going on.

After one hour of reading and rummaging on the react docs, I built this app to give me an understanding of the context API and I'll be explaining my thought pattern here.

This is a simple name taking app — you have a text box on the left, you write a name, press enter and the name appears on the right hand side.

I came up with the simplest design ever because i'm lazy, sue me. I broke down the app into components and got to work.

{ Image of broken down app, image of app }

## Context Time

From the diagram, we have three components

- App (The general app container)
  - LeftPanel (Child of App, Sibling to RightPanel)
  - RightPanel (Child of App, Sibling to LeftPanel)

We want the RightPanel and the LeftPanel to communicate and the normal way is to "lift state". We put the state and the event handlers in the App component. This way would work but we are here for context.

Let's walk through how we would go about using context api

1. Create the NameStore component
   This would hold the state and the event handlers.

2. Import createContext from 'react'
   createContext is a function that takes in the default state and returns an object that contains the Provider and Consumer.

#### Provider and Consumer

The Provider broadcasts whatever value you give it and the Consumer consumes whatever values it gets. You can make any component a provider and allow any component consume the values that the provider is broadcasting (and the coolest thing is that whenever the state in the provider component changes, it is rebroadcasted and the consumers can consume the new change).
