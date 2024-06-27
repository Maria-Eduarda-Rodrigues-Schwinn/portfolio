import { LimitedWidthWrapper } from "../../components/LimitedWidth"
import { ServicesSection } from "./sections/Services"
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
        </Main>
      </LimitedWidthWrapper>
    </Container>
  )
}
