import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: 444px) {
    flex-direction: column;
  }
`

export const Section = styled.div`
  flex: 1;
`

export const SectionHeader = styled.div`
  margin-bottom: 30px;

  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 40px;
  }

  h3 {
    font-size: 22px;
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-weight: normal;
  }
`

export const Cards = styled.div`
  display: flex;
  flex-direction: column-reverse;
`