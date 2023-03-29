import { FlatList } from 'react-native'

import { Task } from '../../@types/Task'
import ToDoListItem from '../ToDoListItem'

type ToDoListProps = {
  items: Task[]
}

export default function ToDoList({ items }: ToDoListProps) {
  return (
    <FlatList
      data={items}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ToDoListItem task={item} />}
      bounces={false}
    />
  )
}
