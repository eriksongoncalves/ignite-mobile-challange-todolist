import {
  useState,
  useCallback,
  useContext,
  createContext,
  useMemo
} from 'react'

import { Task, TaskStatus } from '../../@types/Task'
import { TaskContextProps, TaskProviderProps } from './types'

const TaskContext = createContext({} as TaskContextProps)

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([])

  const hasTasks = useMemo(() => tasks.length > 0, [tasks])

  const countTasks = useMemo(() => tasks.length, [tasks])

  const onCreateTask = useCallback((taskDescription: string) => {
    setTasks(prev => [
      ...prev,
      {
        id: String(Date.now()),
        description: taskDescription,
        status: TaskStatus.CREATED
      }
    ])
  }, [])

  const onRemoveTask = useCallback(
    (taskId: string) => {
      const tasksFiltered = tasks.filter(tasks => tasks.id !== taskId)
      setTasks(tasksFiltered)
    },
    [tasks]
  )

  const onChangeStatusTask = useCallback(
    (taskId: string, newStatus: TaskStatus) => {
      const taskIndex = tasks.findIndex(task => task.id === taskId)
      const tasksUpdated = [...tasks]
      tasksUpdated[taskIndex].status = newStatus

      setTasks(tasksUpdated)
    },
    [tasks]
  )

  return (
    <TaskContext.Provider
      value={{
        tasks,
        hasTasks,
        countTasks,
        onCreateTask,
        onRemoveTask,
        onChangeStatusTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

const useTask = () => {
  const context = useContext(TaskContext)

  return context
}

export { useTask, TaskProvider }
