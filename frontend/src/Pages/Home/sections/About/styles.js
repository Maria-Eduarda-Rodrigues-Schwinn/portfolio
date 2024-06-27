import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme.COLORS.GRAY};

  div {
    max-width: 950px;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    font-weight: 500;
    margin-bottom: 10px;
  }

  h4 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_SLAB};
    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-weight: normal;
    margin-bottom: 30px;
  }

  img {
    max-width: 400px;
    border-radius: 0px 100px;
  }

  p {
    text-align: justify;
    line-height: 1.5;
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    margin: 20px 0;
  }

  .highlighted,
  .highlighted-red,
  .highlighted-blue {
    font-weight: bold;
  }

  .highlighted {
    color: ${({ theme }) => theme.COLORS.STRONG_YELLOW};
  }

  .highlighted-red {
    color: ${({ theme }) => theme.COLORS.LIGHT_RED};
  }

  .highlighted-blue {
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  }
`

export const Table = styled.table`
  &,
  a {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  font-family: ${({ theme }) => theme.FONTS.OPEN_SANS};

  td {
    padding: 10px 0;
  }

  a {
    border-bottom: 1px dashed transparent;
    transition: border-bottom 0.2s ease;

    &:hover {
      padding: 3px 0;
      border-bottom: 1px dashed ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`
