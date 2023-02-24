import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'

interface FloatingButtonProps {
  onPress: () => void
  customStyle?: ViewStyle
  colorText?: string
}

const FloatingButton = (props: FloatingButtonProps) => {
  const { onPress, colorText, customStyle } = props
  return (
    <TouchableOpacity
      onPress={() => onPress && onPress()}
      style={[styles.buttonView, customStyle]}
    >
      <Text style={[styles.text, { color: colorText || '#fff' }]}>+</Text>
    </TouchableOpacity>
  )
}

export default FloatingButton

const styles = StyleSheet.create({
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    position: 'absolute',
    bottom: 30,
    right: 30,
    zIndex: 1,
    backgroundColor: 'blue',
    borderRadius: 40,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
})
