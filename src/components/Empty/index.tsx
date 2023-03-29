import { View, Text, Image } from 'react-native'

import { styles } from './styles'
import ClipboardIcon from '../../assets/clipboard.png'

export default function Empty() {
  return (
    <View style={styles.container}>
      <Image source={ClipboardIcon} style={styles.icon} />
      <Text style={[styles.text, styles.textBold]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}
