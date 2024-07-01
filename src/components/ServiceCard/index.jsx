import { Box, Title, List } from "./styles"

export function ServiceCard({ imgIcon, title, listSkills }) {
  return (
    <Box>
      <img src={imgIcon} alt={`Ícone de ${title}`} />
      <Title>{title}</Title>
      <List>
        {listSkills.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </List>
    </Box>
  )
}
