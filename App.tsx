import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import All from './screens/All';
import Business from './screens/Business';
import { Icon } from 'react-native-elements'
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="All" component={All}
          options={{
            tabBarIcon: (props:any) => (
              <Icon type='feather' name='home' color={props.color} />
            ),
          }} />

        <Tab.Screen name="Business" component={Business}
          options={{
            tabBarIcon: (props:any) => (
              <Icon type='feather' name='dollar-sign' color={props.color} />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}