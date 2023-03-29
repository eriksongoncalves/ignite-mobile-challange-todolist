import { Image, View } from 'react-native'

import { styles } from './styles'
import Logo from '../../assets/logo.png'

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  )
}
