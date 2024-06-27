import styled from "styled-components"

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_BLUE};
  height: 100%;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Main = styled.main`
  padding-top: 200px;
`
