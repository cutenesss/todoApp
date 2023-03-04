import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import { ViewOverallNumber } from '.';
import { testItemSlice } from '../../../../redux/Task/taskSlice.test';

describe("<ViewOverallNumber />", () => {
    const mockOnPressSortName = jest.fn();
    const mockOnPressSortPriority = jest.fn();
    const defaultProps = {
        totalTask: 1,
        completedTask: 1,
        onChangeSortName: mockOnPressSortName,
        onChangeSortPriority: mockOnPressSortPriority
    }

    test('renders correctly when task is not completed', () => {
        const tree = renderer.create(
            <ViewOverallNumber {...defaultProps}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('onPress works correctly', () => {
        const tree = render(<ViewOverallNumber {...defaultProps}/>);
        const itemSortName2 = tree.getByTestId('listSortName_2');
        expect(itemSortName2).toBeTruthy();
        fireEvent.press(itemSortName2);
        expect(mockOnPressSortName).toBeCalledTimes(1);
        const itemListPriorityLevel2 = tree.getByTestId('listPriorityLevel_2');
        expect(itemListPriorityLevel2).toBeTruthy();
        fireEvent.press(itemListPriorityLevel2);
        expect(mockOnPressSortPriority).toBeCalledTimes(1);
    });
});