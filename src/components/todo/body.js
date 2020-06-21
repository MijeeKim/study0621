import React from 'react'
import PropTypes from 'prop-types'

import Container from '../shared/container'
import Text from '../shared/text'

function Body({ todos, onDeleteTodo, onUpdatStatus }) {
  return (
    <Container>
      {todos.map((todo, index) => {
        const { id, title, isDone } = todo

        return (
          <Container key={index}>
            <input
              type="checkbox"
              checked={isDone}
              onChange={() => onUpdatStatus(todo)}
            />
            <Text>{title}</Text>
            <button onClick={() => onDeleteTodo(id)}>삭제</button>
          </Container>
        )
      })}
    </Container>
  )
}

Body.propTypes = {
  todos: PropTypes.array,
  onDeleteTodo: PropTypes.func,
  onUpdatStatus: PropTypes.func,
}

export default Body
