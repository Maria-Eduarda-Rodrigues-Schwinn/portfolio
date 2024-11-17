import { LimitedWidthWrapper } from "../../components/LimitedWidth";
import { ProjectsSection } from "./sections/Projects";
import { ServicesSection } from "./sections/Services";
import { ContactSection } from "./sections/Contact";
import { Container, Main, Footer } from "./styles";
import { CareerSection } from "./sections/Career";
import { HeaderSection } from "./sections/Header";
import { AboutSection } from "./sections/About";
import { InfoSection } from "./sections/Info";

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
                    {/* SOFT/HARD SKILLS? ideias em: https://www.youtube.com/watch?v=d8MReiqqElE min=9:20*/}
                    {/* certificados do LinkedIn?*/}
                </Main>
                <Footer>
                    <p>
                        &copy; {new Date().getFullYear()} Portfólio de Maria
                        Eduarda Rodrigues Schwinn
                    </p>
                </Footer>
            </LimitedWidthWrapper>
        </Container>
    );
}
