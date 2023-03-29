import { useMemo } from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'
import { useTask } from '../../hooks/useTask'
import { TaskStatus } from '../../@types/Task'

export default function TaskInfo() {
  const { tasks } = useTask()

  const summary = useMemo(
    () => ({
      created: tasks.filter(task => task.status === TaskStatus.CREATED).length,
      done: tasks.filter(task => task.status === TaskStatus.DONE).length
    }),
    [tasks]
  )

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={[styles.text, styles.textBlue]}>Criadas</Text>
        <View style={styles.counterContainer}>
          <Text style={[styles.text, styles.counterText]}>
            {summary.created}
          </Text>
        </View>
      </View>
      <View style={styles.statusContainer}>
        <Text style={[styles.text, styles.textPurple]}>Concluídas</Text>
        <View style={styles.counterContainer}>
          <Text style={[styles.text, styles.counterText]}>{summary.done}</Text>
        </View>
      </View>
    </View>
  )
}
