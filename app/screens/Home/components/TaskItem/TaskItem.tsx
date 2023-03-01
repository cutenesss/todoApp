import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { ItemTaskProps } from '../../../../models/TaskModels'

interface TaskItemInterface {
  item: ItemTaskProps
  onPress: (item: ItemTaskProps) => void
}

const ItemTaskMemo = ({ item, onPress }: TaskItemInterface) => {
  return (
    <TouchableOpacity
      testID={`TaskItem_${item.id}`}
      style={[styles.boxShadow, styles.itemContainer]}
      onPress={() => onPress(item)}
    >
      <Text style={styles.nameText} numberOfLines={1}>
        {`Name: ${item.name} - ${item.isCompleted ? 'Completed' : 'Not complete'}`}
      </Text>
      <Text style={styles.descriptionText} numberOfLines={1}>
        Description: {item.description}
      </Text>
      <Text style={styles.descriptionText} numberOfLines={1}>
        Priority level: {item.priorityLevel}
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
  nameText: {
    fontSize: 15,
    color: '#000',
  },
  descriptionText: {
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

export const TaskItem = React.memo(ItemTaskMemo);