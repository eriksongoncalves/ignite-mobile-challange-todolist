import { useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { styles } from './styles'
import { theme } from '../../theme'

type InputProps = Omit<
  TextInputProps,
  'onFocus' | 'onBlur' | 'style' | 'placeholderTextColor'
>

export default function Input({ ...rest }: InputProps) {
  const [hasFocus, setHasFocus] = useState(false)

  return (
    <TextInput
      placeholderTextColor={theme.colors['gray-300']}
      style={[styles.input, hasFocus && styles.inputFocus]}
      onFocus={() => setHasFocus(true)}
      onBlur={() => setHasFocus(false)}
      {...rest}
    />
  )
}
