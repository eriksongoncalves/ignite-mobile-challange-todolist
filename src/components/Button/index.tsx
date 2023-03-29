import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './styles'

type ButtonProps = { children: React.ReactNode } & TouchableOpacityProps

export default function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      {children}
    </TouchableOpacity>
  )
}
