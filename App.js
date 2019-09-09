/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  StatusBar
} from 'react-native';
import Analytics from './Analytics'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
      <Analytics />
    </Fragment>
  );
};



export default App;
