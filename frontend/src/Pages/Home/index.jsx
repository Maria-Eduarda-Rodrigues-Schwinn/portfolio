import { LimitedWidthWrapper } from "../../components/LimitedWidth"
import { HeaderSection } from "./sections/Header"
import { InfoSection } from "./sections/Info"
import { Container, Main } from "./styles"

export function Home() {
  return (
    <Container>
      <HeaderSection />
      <LimitedWidthWrapper>
        <Main>
          <InfoSection />
        </Main>
      </LimitedWidthWrapper>
    </Container>
  )
}
