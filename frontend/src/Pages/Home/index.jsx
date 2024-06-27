import { LimitedWidthWrapper } from "../../components/LimitedWidth"
import { ProjectsSection } from "./sections/Projects"
import { ServicesSection } from "./sections/Services"
import { ContactSection } from "./sections/Contact"
import { CareerSection } from "./sections/Career"
import { HeaderSection } from "./sections/Header"
import { AboutSection } from "./sections/About"
import { InfoSection } from "./sections/Info"
import { Container, Main } from "./styles"

export function Home() {
  return (
    <Container>
      <HeaderSection />
      <LimitedWidthWrapper>
        <Main>
          <InfoSection />
          <AboutSection />
          <ServicesSection />
          <CareerSection />
          <ProjectsSection />
          <ContactSection />
        </Main>
      </LimitedWidthWrapper>
    </Container>
  )
}
