import React from 'react'
import { View, ViewStyle, StyleSheet, Text } from 'react-native';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';
import { PRIORITY_LEVEL } from '../../constant';

interface RadioButtonGroupProps {
    onPress: (value: PRIORITY_LEVEL) => void
    customStyle?: ViewStyle
    initList?: Array<any>
    title: string
    initValue?: PRIORITY_LEVEL
    disabled?: boolean
}


var radio_props = [
    { label: 'param1', value: 0 },
    { label: 'param2', value: 1 }
];

const RadioButtonGroup = ({ initList, onPress, customStyle, title, initValue, disabled }: RadioButtonGroupProps) => {
    const [listPriority, setListPriority] = React.useState<Array<RadioButtonProps>>([])

    const onPressRadioButton = (radioButtonsArray: Array<RadioButtonProps>) => {
        onPress?.(radioButtonsArray.find(e => e.selected)?.value as PRIORITY_LEVEL ?? PRIORITY_LEVEL.NORMAL)
        setListPriority(radioButtonsArray)
    }

    React.useEffect(() => {
        if (initList) {
            let newList
            if (disabled) {
                newList = initList.map(item => ({
                    ...item,
                    disabled: true
                }))
            } else {
                newList = initList
            }
            if (initValue) {
                const selectedValueIndex = newList.findIndex(item => item.value === initValue)
                newList[selectedValueIndex].selected = true
            }
            setListPriority(newList)
        }
    }, [initList, initValue])

    return (
        <View style={customStyle}>
            <Text style={styles.headerText}>{title}</Text>
            <RadioGroup
                radioButtons={listPriority}
                onPress={onPressRadioButton}
                containerStyle={styles.radio}
            />
        </View>
    )
}

export default RadioButtonGroup
const styles = StyleSheet.create({
    radio: {
        alignItems: 'flex-start'
    },
    headerText: {
        marginTop: 16,
        marginBottom: 4
    }
})