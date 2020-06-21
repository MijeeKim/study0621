import React from 'react'
import Container from '.'
import { text } from '@storybook/addon-knobs'

export default {
  title: 'Container',
  components: Container,
}

export const BasicContainer = () => {
  return (
    <Container
      padding={text('padding', '')}
      centered={Boolean('centered', false)}
      maxWidth={text('maxWidth', '')}
    >
      Basic Container
    </Container>
  )
}

BasicContainer.story = {
  name: '기본 컨테이너',
}

export const BasicContainer2 = () => {
  return <Container>Basic Container</Container>
}

BasicContainer2.story = {
  name: '기본 컨테이너2',
}
