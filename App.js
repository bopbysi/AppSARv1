import React from 'react';
import { Provider } from 'react-redux'
import Store from './Store/ConfigureStore'


import Navigation from './Navigation/Navigation'
import Nav from './Navigation/Nav'

export default class App extends React.Component {
  render(){  
    return (
      <Provider store={Store}>
        <Nav/>
      </Provider>
    );
  } 
}

