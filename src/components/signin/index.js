import React, { useState, useEffect } from 'react'

import Form from './form'
import UserList from './user-list'
import Container from '../shared/container'

function Signin() {
  const [users, setUsers] = useState(['a', 'b', 'c'])

  useEffect(() => {
    // 마운트 직후 데이터를 불러옴(스테이트 배열이 빈 배열)
    setUsers(JSON.parse(localStorage.getItem('users')))
  }, [])

  useEffect(() => {
    // 첫 번째 useEffect 이후에 데이터를 새롭게 users 배열에 저장함
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const handleLoginUser = (userName) => {
    console.log(userName)
    setUsers([...users, userName])
  }

  return (
    <Container padding="0 20px" maxWidth="720" centered>
      <Form onLogin={handleLoginUser} />
      <UserList users={users} />
    </Container>
  )
}

export default Signin
