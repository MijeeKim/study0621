import React from 'react'
import Input from '.'
import { text } from '@storybook/addon-knobs'

export default {
  title: 'Input',
  components: Input,
}

export const BasicInput = () => {
  return <Input margin={text('margin', '')} />
}

BasicInput.story = {
  name: '기본 텍스트',
}
