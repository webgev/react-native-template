import React from 'react'
import { ActivityIndicator, Pressable, PressableProps, TextStyle, ViewStyle } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Box, Span } from '~/components/Primitives'

interface ButtonProps extends Omit<PressableProps, 'children'> {
  title?: string
  style?: ViewStyle
  pressedStyle?: ViewStyle
  containerStyle?: ViewStyle
  pressableStyle?: ViewStyle
  textStyle?: TextStyle
  loading?: boolean
  onPress?: () => void
}

export const Button = ({
  title,
  style,
  pressedStyle,
  containerStyle,
  pressableStyle,
  textStyle,
  loading,
  onPress,
}: ButtonProps) => {
  const { buttonStyle: styles } = useTheme()

  return (
    <Box style={[styles.container, containerStyle]}>
      <Pressable style={[pressableStyle]} onPress={onPress}>
        {({ pressed }) => (
          <Box style={[styles.button, style, pressed && styles.pressed, pressedStyle]}>
            <Span style={[styles.text, textStyle, loading && styles.hide]}>{title}</Span>
            {loading && <ActivityIndicator style={styles.indicator} />}
          </Box>
        )}
      </Pressable>
    </Box>
  )
}
