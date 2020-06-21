import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Container from '../shared/container'

function Header({ onAddTodo }) {
  const [title, setTitle] = useState('')

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleEnter = (e) => {
    if (title !== '' && e.key === 'Enter') {
      onAddTodo(title)
      setTitle('')
    }
  }

  return (
    <Container>
      <h1>To-do List</h1>
      <input
        placeholder="오늘 할일을 적어주세요."
        value={title}
        onChange={handleTitle}
        onKeyPress={handleEnter}
      />
    </Container>
  )
}

Header.propTypes = {
  onAddTodo: PropTypes.func,
}

export default Header
