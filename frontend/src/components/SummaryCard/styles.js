import styled from "styled-components";

export const Card = styled.div`
  font-family: ${({ theme }) => theme.FONTS.ROBOTO_MONO};

  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 20px 0;

  h5 {
    color: ${({ theme }) => theme.COLORS.PURPLE};
    font-size: 20px;
  }

  p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  h6 {
    font-size: 12px;
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    line-height: 1.5;
  }
`