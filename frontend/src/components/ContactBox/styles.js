import styled from "styled-components"

export const Box = styled.div`
  font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 25px 0;

  a {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  img {
    width: 45px;
    height: 45px;
  }

  h3 {
    font-weight: 600;
    font-size: 17px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  @media (max-width: 790px) and (min-width: 670px) {
    flex-direction: column;
    text-align: center;
  }

  @media (max-width: 320px) and (min-width: 444px) {
    h3 {
      font-size: 15px;
    }

    a {
      font-size: 12px;
    }
  }
`
