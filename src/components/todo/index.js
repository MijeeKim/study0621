import React, { useState, useEffect } from 'react'

import Container from '../shared/container'
import Text from '../shared/text'

import Header from './header'
import Body from './body'
import Footer from './footer'
import { fetchTodos, deleteTodo, postTodo, updateTodo } from './service'
import { FILTERS } from './constants'

function Todo() {
  const [todos, setTodos] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])
  const [filter, setFilter] = useState(FILTERS[0])

  useEffect(() => {
    handleRefreshTodos()
  }, [])

  useEffect(() => {
    /**
     * ALL -> 전체 리스트 노출
     * TODO -> isDone 이 false 인 리스트 노출
     * DONE -> isDone 이 true
     */
    switch (filter) {
      case FILTERS[0]: {
        return setFilteredTodos([...todos])
      }
      case FILTERS[1]: {
        return setFilteredTodos(todos.filter((todo) => !todo.isDone))
      }
      case FILTERS[2]: {
        return setFilteredTodos(todos.filter((todo) => todo.isDone))
      }
    }
  }, [filter, todos])

  const handleAddTodo = async (title) => {
    const todo = {
      title,
      isDone: false,
    }

    const isAdded = await postTodo(todo)

    if (isAdded) {
      window.alert('추가 성공')
      handleRefreshTodos()
    } else {
      window.alert('추가 실패')
    }
  }

  const handleRefreshTodos = async () => {
    setTodos(await fetchTodos())
  }

  const handleDeleteTodo = async (id) => {
    const isDeleted = await deleteTodo(id)

    if (isDeleted) {
      window.alert('삭제완료')
      handleRefreshTodos()
    } else {
      window.alert('삭제실패')
    }
  }

  const handleUpdateStatus = async (todo) => {
    const isUpdated = await updateTodo({ ...todo, isDone: !todo.isDone })

    if (isUpdated) {
      window.alert('업데이트 성공')
      handleRefreshTodos()
    } else {
      window.alert('업데이트 실패')
    }
  }

  return (
    <Container padding="0 20px" maxWidth="720" centered>
      <Header onAddTodo={handleAddTodo} />
      <Body
        todos={filteredTodos}
        onDeleteTodo={handleDeleteTodo}
        onUpdatStatus={handleUpdateStatus}
      />
      <Footer
        count={filteredTodos.length}
        filter={filter}
        onChangeFilter={setFilter}
      />
    </Container>
  )
}

export default Todo
