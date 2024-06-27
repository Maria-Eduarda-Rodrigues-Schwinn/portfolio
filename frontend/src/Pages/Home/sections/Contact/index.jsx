import localization_icon from "../../../../assets/icons/localization.svg"
import telephone_icon from "../../../../assets/icons/telephone.svg"
import { ContactBox } from "../../../../components/ContactBox"
import email_icon from "../../../../assets/icons/email.svg"
import { Subtitle } from "../../../../components/Subtitle"
import { Content, FormArea } from "./styles"

export function ContactSection() {
  return (
    <div id="contact">
      <Subtitle content="Contato" />
      <Content>
        <div>
          <h2>Contatar</h2>
          <ContactBox
            link="mailto:maria.eduarda.schwinn@gmail.com"
            icon={email_icon}
            title="Email"
            description="maria.eduarda.schwinn@gmail.com"
          />
          <ContactBox
            link="tel:+5551980622891"
            icon={telephone_icon}
            title="Telefone"
            description="+55 (51) 98062-2891"
          />
          <ContactBox
            icon={localization_icon}
            title="Endereço"
            description="São Martinho, Santa Cruz do Sul - RS, Brasil"
          />
        </div>
        <FormArea>
          <h2>Comentário</h2>
          <label htmlFor="name">Digite seu nome</label>
          <input id="name" type="text" placeholder="Seu nome" />
          <label htmlFor="email">Digite seu email</label>
          <input id="email" type="email" placeholder="Seu email" />
          <label htmlFor="message">Deixe seu comentário</label>
          <textarea
            rows="5"
            cols="25"
            id="message"
            type="textarea"
            placeholder="Sua mensagem"
          />
          <button type="submit">Enviar mensagem</button>
        </FormArea>
      </Content>
    </div>
  )
}
