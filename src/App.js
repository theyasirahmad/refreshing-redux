import React, { Component } from 'react';

import Profile from './screens/Profile';
import Settings from './screens/Settings';


export default class App extends Component {
  state = {
    profile: true
  }
  render() {
    const { profile } = this.state;
    return (
      <div>

        {
          profile ?
            <Profile />
            :
            <Settings />
        }
      </div>
    )
  }
}
