import avatar from "../../../../assets/avatarProfile.png"
import { Container } from "./styles"

export function InfoSection() {
  return (
    <Container>
      <div>
        <p>Olá, eu sou</p>
        <h1>Maria Eduarda</h1>
        <h1>Schwinn</h1>
        <p>Desenvolvedora de Software</p>
      </div>
      <img src={avatar} alt="Avatar de Maria Eduarda usando moletom" />
    </Container>
  )
}
