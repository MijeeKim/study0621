import React from 'react'

import Container from '../shared/container'
import { useBoxContext } from './context'

function Form() {
  const { boxInfo, setBoxInfo } = useBoxContext()

  const handleBoxInfo = (e) => {
    setBoxInfo({ ...boxInfo, [e.target.name]: e.target.value })
  }

  return (
    <Container>
      <label>width</label>
      <input name="width" onChange={handleBoxInfo} />
      <label>height</label>
      <input name="height" onChange={handleBoxInfo} />
      <label>color</label>
      <input name="color" onChange={handleBoxInfo} />
    </Container>
  )
}

export default Form
