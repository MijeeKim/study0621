import React from 'react'
import PropTypes from 'prop-types'

import Container from '../shared/container'
import Text from '../shared/text'
import { FILTERS } from './constants'

function Footer({ count, filter, onChangeFilter }) {
  return (
    <Container>
      <Text>items count: {count}</Text>
      <ul>
        {FILTERS.map((type, idx) => (
          <li key={idx} onClick={() => onChangeFilter(type)}>
            <Text bold={type === filter}>{type}</Text>
          </li>
        ))}
      </ul>
    </Container>
  )
}

Footer.propTypes = {
  onChangeFilter: PropTypes.func,
  count: PropTypes.number,
  filter: PropTypes.string,
}

export default Footer
