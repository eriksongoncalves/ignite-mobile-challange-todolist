import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontFamily: theme.fonts.inter.bold,
    fontSize: 14,
    color: theme.colors.white
  },
  textBlue: {
    color: theme.colors.blue
  },
  textPurple: {
    color: theme.colors.purple
  },
  counterContainer: {
    backgroundColor: theme.colors['gray-400'],
    width: 25,
    height: 19,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  counterText: {
    fontSize: 12,
    fontFamily: theme.fonts.inter.regular
  }
})
