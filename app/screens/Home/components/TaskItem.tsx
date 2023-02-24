import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ItemTaskProps } from '../../../models/TaskModels'

interface TaskItemInterface {
  item: ItemTaskProps
  onPress: (item: ItemTaskProps) => void
}

const TaskItem = (props: TaskItemInterface) => {
  const { item, onPress } = props
  return (
    <TouchableOpacity
      style={[styles.boxShadow, styles.itemContainer]}
      onPress={() => onPress(item)}
    >
      <Text style={styles.idTxt} numberOfLines={1}>
        Name: {item.name}
      </Text>
      <Text style={styles.nameTxt} numberOfLines={1}>
        Description: {item.description}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  idTxt: {
    fontSize: 15,
    color: '#000',
  },
  nameTxt: {
    fontSize: 13,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
})

export default React.memo(TaskItem)