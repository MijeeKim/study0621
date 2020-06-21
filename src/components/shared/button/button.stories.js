import React from 'react'
import Button from '.'
import { select } from '@storybook/addon-knobs'

export default {
  title: 'Button',
  components: Button,
}

export const BasicButton = () => {
  return (
    <Button
      margin={text('margin', '')}
      full={Boolean('full', false)}
      color={select(
        'color',
        ['white', 'blue', 'gray', 'red', 'mint', 'black'],
        'blue',
      )}
    >
      제출
    </Button>
  )
}

BasicButton.story = {
  name: '기본 버튼',
}
