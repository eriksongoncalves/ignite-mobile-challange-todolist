import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 56,
    height: 56,
    marginBottom: 16
  },
  text: {
    fontFamily: theme.fonts.inter.regular,
    fontSize: 14,
    color: theme.colors['gray-300'],
    lineHeight: 20
  },
  textBold: {
    fontFamily: theme.fonts.inter.bold
  }
})
