import styled from "styled-components"

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.DARK_BLUE};
  height: 100%;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Main = styled.main`
  padding-top: 200px;
`

export const Footer = styled.footer`
margin-top: 50px;
  font-family: ${({ theme }) => theme.FONTS.OPENS_SANS};
  font-size: 15px;

  text-align: center;
  padding: 20px;
  width: 100%;

  backdrop-filter: blur(30px);
`