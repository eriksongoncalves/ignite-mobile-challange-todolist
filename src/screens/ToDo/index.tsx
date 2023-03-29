import { View } from 'react-native'

import { styles } from './styles'
import Header from '../../components/Header'
import NewTask from '../../components/NewTask'
import TaskInfo from '../../components/TaskInfo'
import ToDoList from '../../components/ToDoList'
import Empty from '../../components/Empty'
import { useTask } from '../../hooks/useTask'

export default function ToDoScreen() {
  const { tasks, hasTasks } = useTask()

  return (
    <View style={styles.container}>
      <Header />

      <View style={[styles.content, !hasTasks && styles.contentEmpty]}>
        <NewTask />

        <View style={styles.taskInfoContainer}>
          <TaskInfo />
        </View>

        {hasTasks && (
          <View style={styles.toDoListContainer}>
            <ToDoList items={tasks} />
          </View>
        )}
      </View>

      {!hasTasks && (
        <View style={styles.emptyContainer}>
          <Empty />
        </View>
      )}
    </View>
  )
}
