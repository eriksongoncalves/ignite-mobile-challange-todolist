import { Task, TaskStatus } from '../../@types/Task'

export type TaskContextProps = {
  tasks: Task[]
  hasTasks: boolean
  countTasks: number
  onCreateTask(taskDescription: string): void
  onRemoveTask(taskId: string): void
  onChangeStatusTask(taskId: string, newStatus: TaskStatus): void
}

export type TaskProviderProps = {
  children: React.ReactNode
}
