import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { SCREEN_ROUTER_APP } from '../constant'
import AddEditTaskScreen from '../screens/AddEditTask'
import HomeScreen from '../screens/Home'

const RootStack = createNativeStackNavigator()

const { HOME, ADD_EDIT_TASK_SCREEN } = SCREEN_ROUTER_APP

const mainScreen = [
  {
    name: HOME,
    component: HomeScreen,
  },
  {
    name: ADD_EDIT_TASK_SCREEN,
    component: AddEditTaskScreen,
  },
]

interface mainItem {
  name: string
  component: React.ComponentType<any>
}

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={() => ({
          // headerShown: false,
        })}
      >
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
