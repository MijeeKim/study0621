import React from 'react'
import { Link } from 'react-router-dom' // a태그

import styled from 'styled-components'

import Container from './shared/container'
import Text from './shared/text'

const Styledlink = styled(Link)`
  display: flex;
  width: fit-content;
  text-decoration: none;
  margin: 10px 20px;
  padding: 10px 20px;
  border: 2px solid lightgray;
  border-radius: 4px;
`

const PATH = [
  {
    path: '/',
    label: 'HOME',
  },
  {
    path: '/todo',
    label: 'TODO',
  },
  {
    path: '/signin',
    label: 'SIGNIN',
  },
  {
    path: '/error',
    label: 'error',
  },
]

function GlobalNavbar() {
  return (
    <Container>
      {PATH.map(({ path, label }, index) => (
        <Styledlink key={index} to={path}>
          <Text>{label}</Text>
        </Styledlink>
      ))}
    </Container>
  )
}

export default GlobalNavbar
