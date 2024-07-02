import { LimitedWidthWrapper } from "../../../../components/LimitedWidth"
import hamburger_icon from "../../../../assets/icons/hamburger.svg"
import { useState, useEffect, useRef } from "react"
import { Header, Wrapper, NavBar } from "./styles"
import logo from "../../../../assets/logo.png"

export function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu()
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuOpen])

  return (
    <Header>
      <LimitedWidthWrapper>
        <Wrapper>
          <a href="/porfolio">
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
            <div className="menu" ref={menuRef}>
              <a href="/porfolio" onClick={closeMenu}>
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
