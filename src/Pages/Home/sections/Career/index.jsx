import { Content, Section, SectionHeader, Cards } from "./styles"
import education_icon from "../../../../assets/icons/education.png"
import { SummaryCard } from "../../../../components/SummaryCard"
import job_icon from "../../../../assets/icons/job.png"
import { Subtitle } from "../../../../components/Subtitle"

export function CareerSection() {
  return (
    <div id="summary">
      <Subtitle content="Carreira" />
      <Content>
        <Section>
          <SectionHeader>
            <img src={education_icon} alt="Ícone de chapéu de formatura" />
            <h3>Educação</h3>
          </SectionHeader>
          <Cards>
            <SummaryCard
              title="Estudante"
              time="2010 - 2023"
              local="Escola Municipal de Ensino Fundamental Dom Pedro ||, Escola Municipal de Ensino Fundamental Cardeal Leme, Colégio Estadual Monte Alverne"
              description="Ensino fundamental e médio obrigatório"
            />
            <SummaryCard
              title="Estudante Técnico"
              time="2024 - ..."
              local="Senac RS"
              description="Curso Técnico em Desenvolvimento de Sistemas"
            />
          </Cards>
        </Section>
        <Section>
          <SectionHeader>
            <img src={job_icon} alt="Ícone de bolsa" />
            <h3>Experiência Profissional</h3>{" "}
          </SectionHeader>
          <Cards>
            <SummaryCard
              title="Jovem Aprendiz"
              time="2020 - 2020"
              local="Souza Cruz LTDA"
              description="Mecânico de manutenção de máquinas em geral"
            />
            <SummaryCard
              title="Jovem Aprendiz"
              time="2021 - 2021"
              local="Comércio de Combustíveis Nevoeiro LTDA"
              description="Técnico Agrícola"
            />
          </Cards>
        </Section>
      </Content>
    </div>
  )
}
