import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RadioButtonGroup from '../../../../components/RadioButton/RadioButtonGroup'

interface ViewOverallNumberInterface {
    totalTask: number
    completedTask: number
  }

export const ViewOverallNumber = ({totalTask, completedTask}: ViewOverallNumberInterface) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`Total tasks: ${totalTask}`}</Text>
      <Text style={styles.text}>{`Completed tasks: ${completedTask}`}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
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
})