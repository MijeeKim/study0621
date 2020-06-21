import React, { useState } from 'react' // react hook
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Container = styled.div`
  padding: 20px;
`
//상속 자식을 만드는 법
const ExtendContainer = styled(Container)``

//인자에 해체할당자로 props를 줄 수 있다.
function Title({ title }) {
  return <div>{title}</div>
}

//props가 어떤 속성을 가져야 하는지 propTypes로 지정
Title.propTypes = {
  title: PropTypes.string.isRequired,
}

function Header() {
  const [title, setTitle] = useState('기본 상태값')
  // 해체할당자: 두 개의 인자 currentState, setState

  return (
    <ExtendContainer>
      <Container>
        <input
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <Title title={title} />
      </Container>
    </ExtendContainer>
  ) // html내 Javascript 환경으로 바꾸는 괄호 {}
}

export default Header
