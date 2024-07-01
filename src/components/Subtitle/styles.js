import styled from "styled-components"

export const Container = styled.div`
  font-size: 18px;
  text-align: center;
  padding: 150px 0 50px;

  p {
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    color: ${({ theme }) => theme.COLORS.WHITE};
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -10px;
      width: 100%;
      height: 3px;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.COLORS.GRAY_100} 33%,
        ${({ theme }) => theme.COLORS.PURPLE_500} 33%,
        ${({ theme }) => theme.COLORS.PURPLE_500} 66%,
        ${({ theme }) => theme.COLORS.GRAY_100} 66%
      );
    }
  }
`
