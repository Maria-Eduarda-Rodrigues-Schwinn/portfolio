import styled from "styled-components"

export const Content = styled.div`
  display: flex;
  gap: 50px;

  div {
    flex: 1;
  }

  h2 {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_MONO};
    font-weight: 400;
    padding-left: 20px;
    border-left: 7px dotted ${({ theme }) => theme.COLORS.PURPLE};
    font-size: 19px;

    margin-bottom: 50px;
  }

  @media (max-width: 670px) {
    flex-direction: column;
  }
`

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;

  label {
    display: none;
  }

  input,
  textarea {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-size: 14px;
    width: 100%;
    padding: 15px 10px;
    border: none;
    border-bottom: 0.5px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-right: 0.5px solid ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.COLORS.DARK_GRAY};
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin: 25px 0;
    resize: vertical;
    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(16, 22, 36, 0.5);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PURPLE};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => theme.COLORS.PURPLE_500};
    }
  }

  button {
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-size: 14px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    padding: 15px;
    width: fit-content;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`
