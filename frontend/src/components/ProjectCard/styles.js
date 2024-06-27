import styled from "styled-components"

export const Container = styled.div`
  .access {
    padding: 10px 0;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;

    a:first-child img {
      width: 40px;
      height: 40px;
    }

    img {
      width: 30px;
      height: 30px;
    }
  }
`

export const Wrapper = styled.div`
  width: 400px;
  height: 300px;
  overflow: hidden;
  position: relative;
`

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  border-radius: 5px 5px 20px 20px;

  .poster {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    border-radius: inherit;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease, filter 0.3s ease;
      border-radius: inherit;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 80%;
      backdrop-filter: blur(10px);
      opacity: 0;
      transition: opacity 0.5s ease;
    }
  }

  .details {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    display: flex;
    background: rgba(16, 22, 36, 0.7);
    color: ${({ theme }) => theme.COLORS.WHITE};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    border-radius: 0 0 20px 20px;

    h1 {
      margin: 0;
      font-size: 24px;
      font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    }

    p {
      margin: 20px 10px;
      font-family: ${({ theme }) => theme.FONTS.OPEN_SANS};
      text-align: center;
      line-height: 1.5;
    }

    ul {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;

      margin-top: 20px;

      img {
        width: 25px;
        height: 25px;
      }
    }
  }

  &:hover {
    .poster::after {
      opacity: 1;
    }

    .details {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
