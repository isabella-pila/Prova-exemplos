import { TouchableOpacityProps, TouchableOpacity, Text } from 'react-native'
import { styles } from './styles'
interface IBInterface extends TouchableOpacityProps {
  title: string
  type: 'primary' | 'secondary' | 'third'
}
export function ButtonInterface({ title, type, ...rest }: IBInterface) {
  return (
    <TouchableOpacity style={
      type == "primary" ? styles.buttonPrimary :
        type == "secondary" ? styles.buttonSecondary :
          styles.buttonThird
    }
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}
