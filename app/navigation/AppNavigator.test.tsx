import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render, screen, fireEvent } from '@testing-library/react-native';
import AppNavigator from './AppNavigator';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// this test is stuck: https://github.com/facebook/react-native/pull/35678
describe('Testing react navigation', () => {
    // test('page contains the header and 10 items', async () => {
    //     const component = (
    //         <NavigationContainer>
    //             <AppNavigator />
    //         </NavigationContainer>
    //     );

    //     render(component);

    //     const header = await screen.findByText('HOME');

    //     expect(header).toBeTruthy();
    // });

    // test('clicking on one item takes you to the details screen', async () => {
    //     const component = (
    //         <NavigationContainer>
    //             <AppNavigator />
    //         </NavigationContainer>
    //     );

    //     render(component);
    //     const toClick = await screen.findByText('+');

    //     fireEvent(toClick, 'press');
    //     const newHeader = await screen.findByText('ADD_EDIT_TASK_SCREEN');

    //     expect(newHeader).toBeTruthy();
    // });
});