import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RadioButtonGroup } from '../../../../components'
import { NAME_SORT_ORDER, PRIORITY_SORT_ORDER } from '../../../../constant'

const listSortName = [
  {
    id: '1',
    label: NAME_SORT_ORDER.A_Z,
    value: NAME_SORT_ORDER.A_Z,
    selected: true
  },
  {
    id: '2',
    label: NAME_SORT_ORDER.Z_A,
    value: NAME_SORT_ORDER.Z_A,
    selected: false
  },
]
const listPriorityLevel = [
  {
    id: '1',
    label: PRIORITY_SORT_ORDER.DECREASE,
    value: PRIORITY_SORT_ORDER.DECREASE,
    selected: true
  },
  {
    id: '2',
    label: PRIORITY_SORT_ORDER.INCREASE,
    value: PRIORITY_SORT_ORDER.INCREASE,
    selected: false
  }
]

interface ViewOverallNumberInterface {
  totalTask: number
  completedTask: number
  onChangeSortName: (value: NAME_SORT_ORDER) => void
  onChangeSortPriority: (value: PRIORITY_SORT_ORDER) => void
}

export const ViewOverallNumber = ({
  totalTask,
  completedTask,
  onChangeSortName,
  onChangeSortPriority
}: ViewOverallNumberInterface) => {
  const onPressSortName = (value: NAME_SORT_ORDER) => {
    onChangeSortName(value)
  }

  const onPressSortPriority = (value: PRIORITY_SORT_ORDER) => {
    onChangeSortPriority(value)
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{`Total tasks: ${totalTask}`}</Text>
        <Text style={styles.text}>{`Completed tasks: ${completedTask}`}</Text>
      </View>
      <View style={styles.container}>
        <RadioButtonGroup
          title='Sort by priority'
          initList={listPriorityLevel}
          onPress={onPressSortPriority}
          customStyle={styles.radioGroup}
        />
        <RadioButtonGroup
          title='Sort by name'
          initList={listSortName}
          onPress={onPressSortName}
          customStyle={styles.radioGroup}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 10
  },
  text: {
    fontSize: 19,
    color: '#000',
  },
  radioGroup: {
    width: "50%",
  }
})