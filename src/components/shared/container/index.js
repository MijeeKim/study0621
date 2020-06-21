import styled from 'styled-components'

/**
 * margin, padding, maxWidth, width, centered
 *
 * <Container padding="20px" margin="20px" width="100px">
 */

//function styled(div)와 같은 함수 문법
export default styled.div`
    box-sizing: border-box;

    ${({ margin }) => margin && `margin: ${margin};`}
    ${({ padding }) => padding && `padding: ${padding};`}
    ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}px;`}
    ${({ centered }) => centered && `margin: 0 auto;`}
    ${({ width }) => width && `width: ${width};`}
`
