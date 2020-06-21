import React from 'react'
import styled from 'styled-components'

import Container from '../shared/container'
import { useBoxContext } from './context'

const Box = styled.div`
  ${({ width }) => width && `width: ${width}px;`}
  ${({ height }) => height && `height: ${height}px;`}
  ${({ color }) => color && `background-color: ${color};`}
`

function Print() {
  const {
    boxInfo: { width, height, color },
  } = useBoxContext()

  return (
    <Container>
      <Box width={width} height={height} color={color} />
    </Container>
  )
}

export default Print
