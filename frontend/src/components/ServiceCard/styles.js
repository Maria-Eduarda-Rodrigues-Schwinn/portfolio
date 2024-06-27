import styled from "styled-components"

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  color: ${({ theme }) => theme.COLORS.GRAY};
  background-color: ${({ theme }) => theme.COLORS.DARK_GRAY};
  border-radius: 10px;
  padding: 30px;

  width: 325px;

  transition: transform 0.3s ease;

  img {
    width: 100px;
    margin: 0 auto;
  }

  &:hover {
    transform: scale(1.02);
    color: ${({ theme }) => theme.COLORS.PURPLE};
  }
`

export const Title = styled.h1`
  font-weight: 500;
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_MONO};
  font-size: 17px;

  text-align: center;

  margin: 20px 0;
`

export const List = styled.ul`
  list-style: none;
  line-height: 2;
  font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
  font-size: 14px;
  font-weight: 400;
`
