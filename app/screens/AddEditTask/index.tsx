import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useCallback, useRef } from 'react'
import { Text, StyleSheet, TouchableOpacity, View, Alert } from 'react-native'
import { addTask } from '../../redux/Task/taskSlice'
import { useAppDispatch } from '../../store'
import MInput from '../../components/MInput/MInput'
import { RootStackParamList } from '../../models/NavigationType'

type AddEditTaskScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ADD_EDIT_TASK_SCREEN'
>

const AddEditTaskScreen = ({ navigation, route }: AddEditTaskScreenProps) => {
  const { itemTask } = route.params
  const dispatch = useAppDispatch()
  const nameRef = useRef<any>()
  const descripeRef = useRef<any>()
  console.log('asddasda', itemTask)
  const resetText = useCallback(() => {
    nameRef.current.resetText()
    descripeRef.current.resetText()
  }, [])

  const addTaskItem = () => {
    dispatch(
      addTask({
        name: nameRef.current.getText(),
        description: descripeRef.current.getText(),
      })
    )
    resetText()
    Alert.alert('Add success')
  }

  return (
    <View style={styles.container}>
      <MInput
        containerStyle={{ marginTop: 15 }}
        ref={nameRef}
        placeHolder="Name"
      />
      <MInput
        containerStyle={{ marginTop: 15 }}
        ref={descripeRef}
        placeHolder="Descripte"
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
})
