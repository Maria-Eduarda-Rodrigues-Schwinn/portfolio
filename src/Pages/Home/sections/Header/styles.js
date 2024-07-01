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
  .menu {
    display: flex;
    gap: 20px;
  }

  label img {
    width: 30px;
    height: 30px;
  }

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

  label,
  input {
    display: none;
  }

  @media (max-width: 620px) {
    label {
      display: flex;
    }

    input:checked + label + .menu {
      display: flex;
      align-items: center;
      backdrop-filter: blur(30px);
    }

    .menu {
      display: none;
      flex-direction: column;
      gap: 50px;
      padding: 50px 20px;
      background-color: ${({ theme }) => theme.COLORS.PURPLE_500_OPACITY};

      border-radius: 0 0 20px 20px;
      position: fixed;
      top: 104px;
      right: 15px;
      z-index: 10;
      height: fit-content;
      width: 200px;
      box-shadow: -3px 0 11px 13px rgba(0, 0, 0, 0.3);
    }
  }
`
