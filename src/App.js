import React, { Component } from 'react';

import Profile from './screens/Profile';
import Settings from './screens/Settings';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer'

const store = createStore(reducer)

export default class App extends Component {
  state = {
    profile: true
  }
  render() {
    const { profile } = this.state;
    return (
      <Provider store={store}>
        <div>
          {
            profile ?
              <Profile />
              :
              <Settings />
          }
        </div>
      </Provider>
    )
  }
}
