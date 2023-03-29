import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  input: {
    backgroundColor: theme.colors['gray-500'],
    color: theme.colors.white,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors['gray-500'],
    height: 54,
    padding: 16,
    fontFamily: theme.fonts.inter.regular,
    fontSize: 16,
    flex: 1
  },
  inputFocus: {
    borderColor: theme.colors.purpleDark
  }
})
