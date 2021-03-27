import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components';

import { PagePaths } from '../constants/route-paths';
import { Home } from '../pages';

const { homePath } = PagePaths;

const Stack = createStackNavigator();

export default function Routes() {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.purpleColors.purpleStatusBar}
      />
      <Stack.Navigator initialRouteName={homePath}>
        <Stack.Screen name={homePath} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
