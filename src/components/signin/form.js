import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Input from '../shared/input'
import Container from '../shared/container'
import Button from '../shared/button'
import Text from '../shared/text'

function Form({ onLogin }) {
  const [formValues, setFormValues] = useState({
    name: '',
    password: '',
  })
  const [isError, setIsError] = useState(false)

  const handleInput = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleClearForm = () => {
    setIsError(false)
    setFormValues({ name: '', password: '' })
  }
  const handleSubmit = () => {
    // console.log(formValues)
    const { name, password } = formValues

    // if (!name || !password) {
    //   setIsError(true)
    //   return
    // }
    // setIsError(false)

    // setIsError(!name || !password)
    // onLogin(name)

    const isError = !name || !password

    if (isError) {
      // login 실패
      setIsError(true)
    } else {
      // login 성공
      onLogin(name)
      handleClearForm()
    }
  }

  return (
    <Container>
      <Container>
        <Text margin="10px 0" block>
          이름
        </Text>
        <Input name="name" onChange={handleInput} value={formValues.name} />
      </Container>

      <Container>
        <Text margin="10px 0" block>
          비밀번호
        </Text>
        <Input
          name="password"
          onChange={handleInput}
          value={formValues.password}
        />
      </Container>

      {isError ? (
        <Text color="red" margin="10px 0" block>
          입력된 정보를 확인해주세요
        </Text>
      ) : null}

      <Button full margin="20px 0 0" padding="15px" onClick={handleSubmit}>
        로그인
      </Button>
    </Container>
  )
}

Form.propTypes = {
  onLogin: PropTypes.func,
}

export default Form
