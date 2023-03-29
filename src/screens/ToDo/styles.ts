import { StyleSheet } from 'react-native'
import { theme } from '../../theme'

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.colors['gray-600']
  },
  content: {
    paddingHorizontal: 24,
    flexGrow: 1
  },
  contentEmpty: {
    flexGrow: 0
  },
  taskInfoContainer: {
    marginTop: 33
  },
  toDoListContainer: {
    marginTop: 20,
    paddingBottom: 20,
    flexGrow: 1
  },
  emptyContainer: {
    marginTop: 68
  }
})
