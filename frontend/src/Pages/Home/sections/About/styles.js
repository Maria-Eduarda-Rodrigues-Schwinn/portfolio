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
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-weight: 500;
    margin-bottom: 10px;
  }

  h4 {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
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

  @media (max-width: 825px) {
    flex-direction: column;

    img {
      max-width: 200px;
      border-radius: 50%;
    }

    h2,
    h4 {
      text-align: center;
    }

    div {
      max-width: 600px;
    }
  }

  @media (max-width: 320px) and (min-width: 444px) {
    h2 {
      font-size: 22px;
    }

    tbody tr td:first-child {
      font-weight: 600;
    }
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

  @media (max-width: 320px) and (min-width: 444px) {
    display: block;

    tbody tr {
      display: block;
      margin-bottom: 10px;
    }

    tbody td {
      display: block;
      margin-bottom: 5px;
    }

    tbody a {
      display: block;
      margin-top: 5px; /* Espaço entre os links */
    }
  }

  @media (max-width: 420px) {
    font-size: 14px;
  }
`
