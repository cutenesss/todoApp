import * as React from 'react'
import { Provider } from 'react-redux'
import {setupStore} from './app/store'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './app/navigation/AppNavigator';

const App = () => {
  return (
    <Provider store={setupStore()}>
      <SafeAreaProvider>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App;
