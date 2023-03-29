import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors['gray-400'],
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    minHeight: 64
  },
  text: {
    fontFamily: theme.fonts.inter.regular,
    fontSize: 14,
    color: theme.colors.white,
    flex: 1,
    lineHeight: 20
  },
  textDone: {
    textDecorationLine: 'line-through',
    color: theme.colors['gray-300']
  },
  checkbox: {
    width: 17,
    height: 17,
    borderRadius: 8,
    marginRight: 8
  },
  trashButton: {
    marginHorizontal: 4
  }
})
