/* istanbul ignore file */
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREEN_ROUTER_APP } from '../constant'
import HomeScreen from '../screens/Home'
import ViewTaskScreen from '../screens/ViewTask'

// I'm stucking with this file since i found an issue with current @react-navigation/native-stack: https://github.com/facebook/react-native/pull/35678
// so i ignore this file
const RootStack = createNativeStackNavigator()

const { HOME, VIEW_TASK } = SCREEN_ROUTER_APP

const mainScreen = [
  {
    name: HOME,
    component: HomeScreen,
  },
  {
    name: VIEW_TASK,
    component: ViewTaskScreen,
  },
]

interface mainItem {
  name: string
  component: React.ComponentType<any>
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {mainScreen.map((mainItem: mainItem) => {
          return (
            <RootStack.Screen
              name={mainItem.name}
              component={mainItem.component}
              key={mainItem.name}
            />
          )
        })}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
