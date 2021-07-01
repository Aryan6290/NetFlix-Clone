import React from 'react';
import {StatusBar} from 'react-native';
import Router from './src/Router';

const App = () => {
  return (
    <>
      <StatusBar animated backgroundColor="#ffffff00" translucent={true} />
      <Router />
    </>
  );
};

export default App;
