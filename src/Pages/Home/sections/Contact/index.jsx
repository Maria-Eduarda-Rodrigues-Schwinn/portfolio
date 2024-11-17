import localization_icon from "../../../../assets/icons/localization.svg";
import telephone_icon from "../../../../assets/icons/telephone.svg";
import { ContactBox } from "../../../../components/ContactBox";
import email_icon from "../../../../assets/icons/email.svg";
import { Subtitle } from "../../../../components/Subtitle";
import { Content } from "./styles";

export function ContactSection() {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await axios.post("/.netlify/functions/feedback", {
    //             name,
    //             email,
    //             message,
    //         });
    //         console.log(response.data.message);
    //         alert("Feedback enviado com sucesso!");
    //         setName("");
    //         setEmail("");
    //         setMessage("");
    //     } catch (error) {
    //         console.error("Erro ao enviar feedback", error);
    //         console.error("Erro ao enviar feedback!");
    //     }
    // };

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
                {/* <FormArea>
          <h2>Comentário</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Digite seu nome</label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Digite seu email</label>
            <input
              id="email"
              type="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="message">Deixe seu comentário</label>
            <textarea
              rows="5"
              cols="25"
              id="message"
              type="textarea"
              placeholder="Sua mensagem"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit">Enviar mensagem</button>
          </form>
        </FormArea> */}
            </Content>
        </div>
    );
}
