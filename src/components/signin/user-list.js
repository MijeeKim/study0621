import React from 'react'
import PropTypes from 'prop-types'

import Container from '../shared/container'
import Text from '../shared/text'

function UserList({ users }) {
  return (
    <Container margin="50px 0 0 0">
      <Text fontSize={24} bold block margin="0 0 20px 0">
        로그인된 유저
      </Text>

      {users.map((user, index) => (
        <Text key={index} block>
          {user}
        </Text>
      ))}
    </Container>
  )
}

UserList.propTypes = {
  users: PropTypes.array,
}

export default UserList
