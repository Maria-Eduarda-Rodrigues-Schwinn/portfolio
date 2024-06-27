import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_MONO};

  p {
    font-size: 25px;

    &:first-of-type {
      color: ${({ theme }) => theme.COLORS.PURPLE};
      margin-bottom: 30px;
    }

    &:last-of-type {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      margin-top: 20px;
    }
  }

  h1 {
    font-size: 60px;
    font-weight: 500;
  }

  img {
    filter: drop-shadow(1px 1px 10px ${({ theme }) => theme.COLORS.PURPLE});
  }
`
