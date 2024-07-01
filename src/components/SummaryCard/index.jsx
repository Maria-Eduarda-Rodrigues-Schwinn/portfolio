import { Card } from "./styles"

export function SummaryCard({ title, time, local, description }) {
  return (
    <Card>
      <h5>{title}</h5>
      <p>{time}</p>
      <h6>{local}</h6>
      <p>{description}</p>
    </Card>
  )
}
