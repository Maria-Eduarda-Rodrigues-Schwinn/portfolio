import { LimitedWidthWrapper } from "../../../../components/LimitedWidth"
import hamburger_icon from "../../../../assets/icons/hamburger.svg"
import { Header, Wrapper, NavBar } from "./styles"
import logo from "../../../../assets/logo.png"
import { useState } from "react"

export function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

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
            <input
              type="checkbox"
              id="menu-control"
              checked={menuOpen}
              onChange={toggleMenu}
            />
            <label htmlFor="menu-control">
              <img
                src={hamburger_icon}
                alt="Ícone de hambúrguer clicável para abrir menu"
              />
            </label>
            <div className="menu">
              <a href="/" onClick={closeMenu}>
                Início
              </a>
              <a href="#summary" onClick={closeMenu}>
                Carreira
              </a>
              <a href="#projects" onClick={closeMenu}>
                Projetos
              </a>
              <a href="#contact" onClick={closeMenu}>
                Contato
              </a>
            </div>
          </NavBar>
        </Wrapper>
      </LimitedWidthWrapper>
    </Header>
  )
}
