import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.blueDark,
    borderRadius: 8,
    width: 52,
    height: 52,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
