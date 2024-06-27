import styled from "styled-components"

export const Header = styled.header`
  position: fixed;
  width: 100%;
  padding: 15px 0;

  backdrop-filter: blur(30px);
  box-shadow: 0 0 30px ${({ theme }) => theme.COLORS.GRAY_100};
  z-index: 5;

  img {
    width: 150px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`

export const NavBar = styled.div`
  display: flex;
  gap: 20px;

  a {
    padding: 10px 5px;

    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    color: ${({ theme }) => theme.COLORS.WHITE};

    border-bottom: 2px solid transparent;
    border-radius: 0 0 10px 10px;
    transition: border-bottom 0.4s ease;

    &:hover {
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.PURPLE};
    }
  }
`
