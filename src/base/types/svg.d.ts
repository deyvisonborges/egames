declare module '*.svg' {
  import { SvgProps } from 'react-native-svg'
  const content: React<SvgProps>
  export default content
}
