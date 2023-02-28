import React, { useCallback, useRef } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Alert } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { addTask } from '../../redux'
import { useAppDispatch } from '../../store'
import { MInput } from '../../components'
import { RootStackParamList } from '../../models/NavigationType'

export type AddEditTaskScreenProps = {
  route?: NativeStackScreenProps<RootStackParamList, 'ADD_EDIT_TASK_SCREEN'>['route']
}

const AddEditTaskScreen = ({ route }: AddEditTaskScreenProps) => {
  const itemTask = route?.params?.item
  const dispatch = useAppDispatch()
  const nameRef = useRef<any>()
  const descriptionRef = useRef<any>()

  // these function has been tested inside the component
  const resetText = useCallback(() => {
    /* istanbul ignore next */
    nameRef.current.resetText()
    /* istanbul ignore next */
    descriptionRef.current.resetText()
  }, [])

  const addTaskItem = () => {
    if (nameRef.current.getText() === '') {
      Alert.alert("Enter task's name")
    } else {
      dispatch(
        addTask({
          id: Date.now(),
          name: nameRef.current.getText(),
          description: descriptionRef.current.getText(),
        })
      )
      /* istanbul ignore next */
      resetText()
      Alert.alert('Add success')
    }
  }

  return (
    <View style={styles.container}>
      <MInput
        testId="Name"
        placeholder="Name"
        containerStyle={styles.input}
        ref={nameRef}
        defaultText={itemTask?.name ?? ''}
      />
      <MInput
        testId="Description"
        placeholder="Description"
        containerStyle={styles.input}
        ref={descriptionRef}
        defaultText={itemTask?.description ?? ''}
      />
      <TouchableOpacity onPress={addTaskItem} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddEditTaskScreen

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
