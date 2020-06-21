import React from 'react'

import Container from '../shared/container'

import Form from './form'
import Print from './print'
import { BoxContextProvider } from './context'

function BoxMarker() {
  return (
    <BoxContextProvider>
      <Container>
        <Form />
        <Print />
      </Container>
    </BoxContextProvider>
  )
}

export default BoxMarker
