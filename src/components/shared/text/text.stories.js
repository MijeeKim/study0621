import React from 'react'
import Text from '.'
import { text } from '@storybook/addon-knobs'

export default {
  title: 'Text',
  components: Text,
}

export const BasicText = () => {
  return <Text margin={text('margin', '')}>Basic Text</Text>
}

BasicText.story = {
  name: '기본 텍스트',
}
