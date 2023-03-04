import React, { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { NAME_SORT_ORDER, PRIORITY_LEVEL, PRIORITY_SORT_ORDER, SCREEN_ROUTER_APP } from '../../constant'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAppDispatch, useAppSelector } from '../../store'
import { ItemTaskProps } from '../../models/TaskModels'
import { TaskItem } from './components/TaskItem'
import { FloatingButton } from '../../components'
import { RootStackParamList } from '../../models/NavigationType'
import { ViewOverallNumber } from './components/ViewOverallNumber'
import { handleSortListTask } from '../../utils'

export type HomeScreenProps = {
  navigation: NativeStackScreenProps<RootStackParamList, 'HOME'>['navigation']
}

interface itemProps {
  id: string
  title: string
  onPress: () => void
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { listTask, completedTask } = useAppSelector(state => state.task)
  const dispatch = useAppDispatch()

  const [list, setList] = useState(listTask)
  const [priorityOrder, setPriorityOrder] = useState(PRIORITY_SORT_ORDER.DECREASE)
  const [nameOrder, setNameOrder] = useState(NAME_SORT_ORDER.A_Z)

  React.useEffect(() => {
    if (listTask.length > 0) {
      setList(handleSortListTask(listTask, priorityOrder, nameOrder))
    } else {
      setList([])
    }
  }, [listTask.length, priorityOrder, nameOrder])


  const onPressItem = (item: ItemTaskProps) => {
    navigation.navigate(SCREEN_ROUTER_APP.VIEW_TASK, { item })
  }

  const renderTaskItem = ({ item }: { item: ItemTaskProps }) => (
    <TaskItem item={item} onPress={onPressItem} />
  )

  const onPress = () => {
    navigation.navigate(SCREEN_ROUTER_APP.VIEW_TASK, {})
  }

  const onChangeSortName = (value: NAME_SORT_ORDER) => {
    /* istanbul ignore next */
    setNameOrder(value)
  }

  const onChangeSortPriority = (value: PRIORITY_SORT_ORDER) => {
    /* istanbul ignore next */
    setPriorityOrder(value)
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <ViewOverallNumber
            totalTask={listTask.length}
            completedTask={completedTask}
            onChangeSortName={onChangeSortName}
            onChangeSortPriority={onChangeSortPriority}
          />
        }
        style={styles.container}
        contentContainerStyle={styles.contentStyle}
        data={list}
        extraData={list}
        keyExtractor={(itemTask) => itemTask.id.toString()}
        renderItem={renderTaskItem}
      />
      <FloatingButton onPress={onPress} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentStyle: {
    paddingBottom: 10,
  },
})
