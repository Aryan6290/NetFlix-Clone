import React from 'react';
import {StatusBar} from 'react-native';
import Router from './src/Router';

const App = () => {
  return (
    <>
      <StatusBar animated backgroundColor="#ffffff00" translucent />
      <Router />
    </>
  );
};

export default App;
