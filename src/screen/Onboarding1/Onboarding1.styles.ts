import { StyleSheet } from 'react-native'
import { theme } from '../../layout/theme'
import { createStyle } from '../../tools/createStyle'

export const styles = createStyle(theme, {
  container: {
    backgroundColor: theme.color.purple,
    height: '100%',
    width: '100%'
  },
})

export const Container  = styled.