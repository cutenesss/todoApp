import React, { useCallback, useRef } from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { addTask, deleteTask, completeTask } from '../../redux'
import { useAppDispatch } from '../../store'
import { MInput } from '../../components'
import { RootStackParamList } from '../../models/NavigationType'
import { PRIORITY_LEVEL } from '../../constant';
import RadioButtonGroup from '../../components/RadioButton/RadioButtonGroup'
import { onAlert } from '../../utils/alertFunction/alertFunction'

export type ViewTaskScreenProps = {
    navigation: NativeStackScreenProps<RootStackParamList, 'HOME'>['navigation'],
    route?: NativeStackScreenProps<RootStackParamList, 'VIEW_TASK'>['route']
}

const ViewTaskScreen = ({ navigation, route }: ViewTaskScreenProps) => {
    const itemTask = route?.params?.item
    const dispatch = useAppDispatch()
    const nameRef = useRef<any>()
    const descriptionRef = useRef<any>()
    const priorityRef = useRef<PRIORITY_LEVEL | ''>('')
    const listPriorityLevel = [
        {
            id: '1',
            label: PRIORITY_LEVEL.HIGH,
            value: PRIORITY_LEVEL.HIGH,
            selected: false
        },
        {
            id: '2',
            label: PRIORITY_LEVEL.NORMAL,
            value: PRIORITY_LEVEL.NORMAL,
            selected: false

        },
        {
            id: '3',
            label: PRIORITY_LEVEL.LOW,
            value: PRIORITY_LEVEL.LOW,
            selected: false
        }
    ]

    // these function has been tested inside the component
    const resetText = useCallback(() => {
        /* istanbul ignore next */
        nameRef.current.resetText()
        /* istanbul ignore next */
        descriptionRef.current.resetText()
        priorityRef.current = ''
    }, [])

    const handleItem = () => {
        if (itemTask) {
            dispatch(
                deleteTask({ idItem: itemTask?.id })
            )
            onAlert({
                title: "Delete success",
                okFunction: () => navigation.goBack()
            })
        } else {
            if (nameRef.current.getText() === '') {
                onAlert({ title: "Enter task's name" })
            } else {
                dispatch(
                    addTask({
                        id: Date.now(),
                        name: nameRef.current.getText(),
                        description: descriptionRef.current.getText(),
                        priorityLevel: priorityRef.current === '' ? PRIORITY_LEVEL.NORMAL : priorityRef.current,
                        isCompleted: false
                    })
                )
                /* istanbul ignore next */
                resetText()
                onAlert({
                    title: 'Add success',
                    okFunction: () => navigation.goBack()
                })
            }
        }
    }

    const handleCompleteItem = () => {
        if (itemTask?.id) {
            dispatch(
                completeTask({ idItem: itemTask?.id })
            )
            onAlert({
                title: "Completed task",
                okFunction: () => navigation.goBack()
            })
        }
    }

    const onPressRadioButton = (value: PRIORITY_LEVEL) => {
        priorityRef.current = value
    }

    return (
        <View style={styles.container}>
            <MInput
                testId="Name"
                placeholder="Name"
                containerStyle={styles.input}
                ref={nameRef}
                defaultText={itemTask?.name ?? ''}
                editable={itemTask?.name ? false : true}
            />
            <MInput
                testId="Description"
                placeholder="Description"
                containerStyle={styles.input}
                ref={descriptionRef}
                defaultText={itemTask?.description ?? ''}
                editable={itemTask?.description ? false : true}
            />
            <RadioButtonGroup
                title='Priority'
                initList={listPriorityLevel}
                onPress={onPressRadioButton}
                initValue={itemTask?.priorityLevel}
                disabled={itemTask?.id ? true : false}
            />
            {
                itemTask && (
                    <TouchableOpacity onPress={handleCompleteItem} style={styles.button}>
                        <Text style={styles.buttonText}>Complete</Text>
                    </TouchableOpacity>
                )
            }
            <TouchableOpacity onPress={handleItem} style={styles.button}>
                <Text style={styles.buttonText}>{itemTask ? 'Delete' : 'Add'}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ViewTaskScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 14,
    },
    button: {
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        width: '100%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    input: { marginTop: 15 },
})
