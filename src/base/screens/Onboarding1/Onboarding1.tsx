import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { styles } from './Onboarding1.styles'
import { SVGS_PATHS } from '../../../common/helpers/paths'

export function Onboarding1() {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={require('../../../common/assets/svgs/gradient/ellipse_001.svg')}
        style={{
          position: 'absolute'
        }}
      />
      <Text
        style={{
          color: 'white',
          fontSize: 24
        }}
      >
        Ola mundo 2
      </Text>
    </View>
  )
}
