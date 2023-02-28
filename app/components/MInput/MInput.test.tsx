import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { render,fireEvent } from '@testing-library/react-native';
import { MInput } from '.';

const TEST_ID_MINPUT = 'INPUT_1'
const VIEW_TEST_ID_MINPUT = 'MInput_view_INPUT_1'
const INPUT_TEST_ID_MINPUT = 'MInput_input_INPUT_1'

describe("<MInput />", () => {
    const defaultProps ={
        testId: TEST_ID_MINPUT,
        isSecured: false,
        defaultText: 'defaultText',
        placeholder: 'placeholder',
        containerStyle: {
            borderColor: 'red'
        }
    }

    it('renders correctly', () => {
        const ref = React.createRef();
        const tree = renderer.create(<MInput ref={ref} {...defaultProps} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('getText works correctly', () => {
        const ref = React.createRef<any>();
        render(<MInput ref={ref} {...defaultProps} />).toJSON();
        expect(ref.current.getText()).toBe(defaultProps.defaultText);
    });

    it('resetText works correctly', () => {
        const ref = React.createRef<any>();
        render(<MInput ref={ref} {...defaultProps} />).toJSON();
        expect(ref.current.getText()).toBe(defaultProps.defaultText);
        act(() => ref.current.resetText());
        expect(ref.current.getText()).toBe('');
    });

    it('props works correctly', () => {
        const ref = React.createRef();
        const input = render(<MInput ref={ref} {...defaultProps} />);
        expect(input.getByTestId(VIEW_TEST_ID_MINPUT).props.style.borderColor).toBe(defaultProps.containerStyle.borderColor)
        expect(input.getByTestId(INPUT_TEST_ID_MINPUT).props.value).toBe(defaultProps.defaultText)
        expect(input.getByTestId(INPUT_TEST_ID_MINPUT).props.placeholder).toBe(defaultProps.placeholder)
        expect(input.getByTestId(INPUT_TEST_ID_MINPUT).props.secureTextEntry).toBe(defaultProps.isSecured)
    });

    it('undefined defaultText works correctly', () => {
        const ref = React.createRef();
        const input = render(<MInput ref={ref} {...defaultProps} defaultText={undefined} />);
        expect(input.getByTestId(INPUT_TEST_ID_MINPUT).props.value).toBe('')
    });

    it('undefined placeholder works correctly', () => {
        const ref = React.createRef();
        const input = render(<MInput ref={ref} {...defaultProps} placeholder={undefined} />);
        expect(input.getByTestId(INPUT_TEST_ID_MINPUT).props.placeholder).toBe('')
    });

    it('setText works correctly', () => {
        const ref = React.createRef();
        const {getByTestId} = render(<MInput ref={ref} {...defaultProps} />);
        const input = getByTestId(INPUT_TEST_ID_MINPUT);
        expect(getByTestId(INPUT_TEST_ID_MINPUT).props.value).toBe(defaultProps.defaultText)
        fireEvent.changeText(input, '123');
        expect(getByTestId(INPUT_TEST_ID_MINPUT).props.value).toBe('123')
    });

    it('undefined containerStyle works correctly', () => {
        const ref = React.createRef();
        const input = render(<MInput ref={ref} {...defaultProps} defaultText={undefined} />);
        expect(input.getByTestId(VIEW_TEST_ID_MINPUT).props.style.marginTop).toBe(undefined)
    });
});