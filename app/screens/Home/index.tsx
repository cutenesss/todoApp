import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { SCREEN_ROUTER_APP } from '../../constant'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useAppSelector } from '../../store'
import { ItemTaskProps } from '../../models/TaskModels'
import TaskItem from './components/TaskItem'
import FloatingButton from '../../components/FloatingButton/FloatingButton'
import { RootStackParamList } from '../../models/NavigationType'

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'HOME'>

interface itemProps {
  id: string
  title: string
  onPress: () => void
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const { listTask } = useAppSelector(state => state.task)

  const onPressItem = (item: ItemTaskProps) => {
    navigation.navigate(SCREEN_ROUTER_APP.ADD_EDIT_TASK_SCREEN, { item })
  }

  const renderTaskItem = ({ item }: { item: ItemTaskProps }) => (
    <TaskItem item={item} onPress={onPressItem} />
  )

  const onPress = () => {
    navigation.navigate(SCREEN_ROUTER_APP.ADD_EDIT_TASK_SCREEN, {})
  }

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        contentContainerStyle={styles.contentStyle}
        data={listTask}
        keyExtractor={(_, index) => index.toString()}
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
