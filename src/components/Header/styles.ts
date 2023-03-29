import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors['gray-700'],
    width: '100%',
    height: 193,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  logo: {
    width: 110,
    height: 32
  }
})
