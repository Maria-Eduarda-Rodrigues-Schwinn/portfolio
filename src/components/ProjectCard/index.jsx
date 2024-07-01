import github_icon from "../../assets/icons/github.png"
import global_icon from "../../assets/icons/global.png"
import { Container, Wrapper, Card } from "./styles"

export function ProjectCard({
  img,
  title,
  description,
  listTechnologiesIcon,
  repoLink,
  siteLink,
}) {
  return (
    <Container>
      <Wrapper>
        <Card>
          <div className="poster">
            <img src={img} alt={`Imagem do projeto ${title}`} />
          </div>
          <div className="details">
            <h1>{title}</h1>
            <p>{description}</p>
            <ul>
              {listTechnologiesIcon.map((icon) => (
                <img key={icon} src={icon} alt="Ícone da tecnologia" />
              ))}
            </ul>
          </div>
        </Card>
      </Wrapper>
      {(repoLink || siteLink) && (
        <div className="access">
          {repoLink && (
            <a href={repoLink} target="_blank">
              <img src={github_icon} alt="ícone do github" />
            </a>
          )}
          {siteLink && (
            <a href={siteLink} target="_blank">
              <img src={global_icon} alt="ícone do globo" />
            </a>
          )}
        </div>
      )}
    </Container>
  )
}
