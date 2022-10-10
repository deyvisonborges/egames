import {
  ColorValue,
  ImageStyle,
  StyleSheet,
  TextStyle,
  ViewStyle
} from 'react-native'
import { theme as Theme } from '../../common/layout/theme'

interface ViewThemeStyle extends ViewStyle {
  backgroundColor?: ColorValue | keyof typeof Theme.colors | undefined
  borderBottomColor?: ColorValue | keyof typeof Theme.colors | undefined
  borderColor?: ColorValue | keyof typeof Theme.colors | undefined
  borderEndColor?: ColorValue | keyof typeof Theme.colors | undefined
  borderLeftColor?: ColorValue | keyof typeof Theme.colors | undefined
  borderRightColor?: ColorValue | keyof typeof Theme.colors | undefined
  borderStartColor?: ColorValue | keyof typeof Theme.colors | undefined
  borderTopColor?: ColorValue | keyof typeof Theme.colors | undefined
}

type NamedStyles<T = any> = {
  [P in keyof T]: ViewThemeStyle | TextStyle | ImageStyle
}

export function createStyle<T>(styles: NamedStyles<T>) {
  return StyleSheet.create(styles)
}
