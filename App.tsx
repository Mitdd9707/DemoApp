/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigator from '@navigation/Navigator';
import {GestureHandlerRootContainer} from './App.styles';
import {Provider as PaperProvider} from 'react-native-paper';
import config from './src/config';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootContainer>
      <PaperProvider theme={config.Theme}>
        <Navigator />
      </PaperProvider>
    </GestureHandlerRootContainer>
  );
}

export default App;
