import React from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold
} from '@expo-google-fonts/inter'

import ToDoScreen from './src/screens/ToDo'
import { TaskProvider } from './src/hooks/useTask'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <TaskProvider>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <ToDoScreen />
    </TaskProvider>
  )
}
