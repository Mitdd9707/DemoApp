import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {AuthStack} from './hooks';
import Loader from '@atoms/Loader/Loader';
import Home from '@screens/Home/Home';
import Config from 'react-native-config';
import Login from '@screens/Login/Login';

interface NavigatorProps {
  theme?: Theme;
}

const Navigator: React.FC<NavigatorProps> = ({theme}) => {
  const [isReady, setIsReady] = useState(true);

  useEffect(() => {
    setIsReady(false);
  }, []);

  const authNavigator = (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          header: () => null,
        }}
      />
      <AuthStack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: Config.APP_NAME,
          headerTitleAlign: 'center',
          headerTitleStyle: {color: '#000'},
          headerBackTitleStyle: {color: '#000'},
        }}
      />
    </AuthStack.Navigator>
  );

  if (isReady) {
    return <Loader />;
  }

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle={'default'} translucent={false} />
      {authNavigator}
    </NavigationContainer>
  );
};

export default Navigator;
