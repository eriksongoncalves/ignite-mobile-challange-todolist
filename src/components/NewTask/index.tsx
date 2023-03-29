import { useCallback, useState } from 'react'
import { View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { styles } from './styles'
import Input from '../Input'
import Button from '../Button'
import { useTask } from '../../hooks/useTask'

export default function NewTask() {
  const { onCreateTask } = useTask()
  const [taskDescription, setTaskDescription] = useState('')

  const handleAddTask = useCallback(() => {
    onCreateTask(taskDescription)
    setTaskDescription('')
  }, [onCreateTask, taskDescription])

  return (
    <View style={styles.container}>
      <Input
        value={taskDescription}
        onChangeText={text => setTaskDescription(text)}
        placeholder="Adicione uma nova tarefa"
      />

      <View style={styles.buttonWrapper}>
        <Button onPress={handleAddTask}>
          <AntDesign name="pluscircleo" size={16} color="white" />
        </Button>
      </View>
    </View>
  )
}
