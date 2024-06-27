import { LimitedWidthWrapper } from "../../../../components/LimitedWidth"
import logo from "../../../../assets/logo.png"
import { Header, Wrapper, NavBar } from "./styles"

export function HeaderSection() {
  return (
    <Header>
      <LimitedWidthWrapper>
        <Wrapper>
          <a href="/">
            <img
              src={logo}
              alt="Logo com ícone de lâmpada roxa com nome de Maria Eduarda Schwinn"
            />
          </a>
          <NavBar>
            <a href="/">Início</a>
            <a href="#summary">Carreira</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </NavBar>
        </Wrapper>
      </LimitedWidthWrapper>
    </Header>
  )
}
