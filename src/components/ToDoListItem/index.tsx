import { useCallback, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox'
import { FontAwesome } from '@expo/vector-icons'

import { styles } from './styles'
import { Task, TaskStatus } from '../../@types/Task'
import { theme } from '../../theme'
import { useTask } from '../../hooks/useTask'

type ToDoListItemProps = {
  task: Task
}

export default function ToDoListItem({ task }: ToDoListItemProps) {
  const { onRemoveTask, onChangeStatusTask } = useTask()
  const [isChecked, setChecked] = useState(false)

  const handleRemoveTask = useCallback(() => {
    onRemoveTask(task.id)
  }, [onRemoveTask, task.id])

  const handleToggleCheckbox = useCallback(
    (isChecked: boolean) => {
      const newStatus = isChecked ? TaskStatus.DONE : TaskStatus.CREATED
      onChangeStatusTask(task.id, newStatus)
      setChecked(isChecked)
    },
    [onChangeStatusTask, task.id]
  )

  return (
    <View style={styles.container}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={handleToggleCheckbox}
        color={isChecked ? theme.colors.purpleDark : theme.colors.blueDark}
      />

      <Text
        style={[
          styles.text,
          task.status === TaskStatus.DONE && styles.textDone
        ]}
      >
        {task.description}
      </Text>

      <TouchableOpacity onPress={handleRemoveTask} style={styles.trashButton}>
        <FontAwesome
          name="trash-o"
          size={24}
          color={theme.colors['gray-300']}
        />
      </TouchableOpacity>
    </View>
  )
}
