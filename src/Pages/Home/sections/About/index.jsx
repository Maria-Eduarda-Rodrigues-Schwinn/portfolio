import profileImg from "../../../../assets/profileImg.jpeg"
import { Subtitle } from "../../../../components/Subtitle"
import { Content, Table } from "./styles"

export function AboutSection() {
  return (
    <>
      <Subtitle content="Sobre mim" />
      <Content>
        <img src={profileImg} alt="Foto de Maria Eduarda sorrindo" />
        <div>
          <h2>Olá! Eu sou Maria Eduarda</h2>
          <h4>Desenvolvedora de Software</h4>
          <p>
            Tenho 19 anos e faço estágio em Programação na CWI Software.
          </p>
          <p>
            Atualmente, estou fazendo Curso Técnico em Desenvolvimento de
            Sistemas no SENAC-RS.
          </p>
          <p>
            Sou apaixonada por <span className="highlighted">códigos</span>,{" "}
            <span className="highlighted-red">cores</span> e{" "}
            <span className="highlighted-blue">lógica</span>. Estou animada para
            transformar essa paixão em projetos reais &#128640;.
          </p>
          <Table>
            <tbody>
              <tr>
                <td>Nascimento</td>
                <td>: Maio 20, 2005</td>
              </tr>
              {/* <tr>
                <td>Celular</td>
                <td>
                  : <a href="tel:+5551980622891">+55 (51) 98062-2891</a>
                </td>
              </tr> */}
              <tr>
                <td>Email</td>
                <td>
                  :{" "}
                  <a href="mailto:maria.eduarda.schwinn@gmail.com">
                    maria.eduarda.schwinn@gmail.com
                  </a>
                </td>
              </tr>
              <tr>
                <td>De</td>
                <td>: interior, Santa Cruz do Sul - RS</td>
              </tr>
              <tr>
                <td>Língua nativa</td>
                <td>: Português, Brasil</td>
              </tr>
              <tr>
                <td>Línguas adquiridas</td>
                <td>
                  : Alemão(nativo) | Inglês, EUA | Espanhol | Italiano | Francês
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Content>
    </>
  )
}
