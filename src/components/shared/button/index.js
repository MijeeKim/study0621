import styled from 'styled-components'
import COLORS from '../color'

/**
 * borderRadius, margin, padding, fontSize, color, disable, full
 */

export default styled.button`
  border: none;
  color: ${COLORS.white};
  border-radius: 2px;

  ${({ full }) => full && `width: 100%;`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ fontSize }) => `font-size: ${fontSize || 15}px;`}
  ${({ disable }) => disable && `background: ${COLORS.gray};`}
  ${({ color }) => `background: ${COLORS[color] || COLORS.blue};`}
`
