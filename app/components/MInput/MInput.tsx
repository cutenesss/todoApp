import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { View, TextInput, StyleSheet, ViewStyle } from 'react-native'

interface InputProps {
  testId?: string
  isSecured?: boolean
  containerStyle?: ViewStyle
  defaultText?: string
  placeholder?: string
  editable?: boolean
}

export const MInput = forwardRef(({ editable, testId, placeholder, isSecured, containerStyle, defaultText }: InputProps, ref: any) => {
  const [text, setText] = useState(defaultText || '')

  useImperativeHandle(
    ref,
    () => ({
      getText: () => {
        return text
      },
      resetText: () => {
        setText('')
      },
    }),
    [text]
  )

  return (
    <View testID={`MInput_view_${testId}`} ref={ref} style={containerStyle}>
      <TextInput
        testID={`MInput_input_${testId}`}
        secureTextEntry={isSecured || MInput.defaultProps?.isSecured}
        placeholder={placeholder || ''}
        style={styles.input}
        value={text}
        editable={editable}
        onChangeText={(value: string) => {
          setText(value)
        }}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 5,
    fontSize: 16,
    minHeight: 40,
    paddingHorizontal: 10,
  },
})

MInput.defaultProps = {
  isSecured: false,
}
