import { Box } from "./styles"

export function ContactBox({ link, icon, title, description }) {
  return (
    <Box>
      <a href={link}>
        <img src={icon} alt={`Ícone de ${title}`} />
      </a>
      <div>
        <h3>{title}</h3>
        <a href={link}>{description}</a>
      </div>
    </Box>
  )
}
