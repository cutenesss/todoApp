import React from 'react'
import { View, ViewStyle, StyleSheet, Text } from 'react-native';
import RadioGroup, { RadioButtonProps } from 'react-native-radio-buttons-group';

interface RadioButtonGroupProps {
    onPress: (value: any) => void
    customStyle?: ViewStyle
    initList?: Array<RadioButtonProps>
    title: string
    initValue?: any
    disabled?: boolean
}

export const RadioButtonGroup = ({ initList, onPress, customStyle, title, initValue, disabled }: RadioButtonGroupProps) => {
    const [listPriority, setListPriority] = React.useState<Array<RadioButtonProps>>([])

    const onPressRadioButton = (radioButtonsArray: Array<RadioButtonProps>) => {
        onPress?.(radioButtonsArray.find(e => e.selected)?.value as any)
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

const styles = StyleSheet.create({
    radio: {
        alignItems: 'flex-start'
    },
    headerText: {
        marginTop: 16,
        marginBottom: 4
    }
})