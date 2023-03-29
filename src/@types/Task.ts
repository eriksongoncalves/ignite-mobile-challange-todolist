export enum TaskStatus {
  CREATED,
  DONE
}

export type Task = {
  id: string
  description: string
  status: TaskStatus
}
