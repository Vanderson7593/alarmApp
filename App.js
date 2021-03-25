import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'

import { COLORS, FONTS } from './constants/theme';
import store from "./redux/store";
import { Provider } from 'react-redux';
import NewAlarm from './screens/NewAlarm';
import AlarmDetails from './screens/AlarmDetails';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: 'transparent',
    background: '#fff'

  }
}

const Stack = createStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName='Home'
        >
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="NewAlarm"
            component={NewAlarm}
          />
          <Stack.Screen
            name="AlarmDetails"
            component={AlarmDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
