import operational_systems_icon from "../../../../assets/icons/operational-systems.png";
import dev_tools_icon from "../../../../assets/icons/dev-tools.png";
import frameworks_icon from "../../../../assets/icons/frameworks.png";
import database_icon from "../../../../assets/icons/database.png";
import frontend_icon from "../../../../assets/icons/frontend.png";
import { ServiceCard } from "../../../../components/ServiceCard";
import backend_icon from "../../../../assets/icons/backend.png";
import extras_icon from "../../../../assets/icons/extras.png";
import { Subtitle } from "../../../../components/Subtitle";
import aws_icon from "../../../../assets/icons/aws.png";
import { Cards } from "./styles";

export function ServicesSection() {
    return (
        <>
            <Subtitle content="Serviços" />
            <Cards>
                <ServiceCard
                    imgIcon={frontend_icon}
                    title="Desenvolvimento Front-end"
                    listSkills={[
                        "HTML/CSS",
                        "Javascript (Programação funcional)",
                        "TypeScript",
                        "React",
                    ]}
                />
                <ServiceCard
                    imgIcon={backend_icon}
                    title="Desenvolvimento Back-end"
                    listSkills={[
                        "Node.js",
                        "Java (Orientação a Objetos) e Spring",
                        "Python",
                    ]}
                />
                <ServiceCard
                    imgIcon={frameworks_icon}
                    title="Frameworks"
                    listSkills={[
                        "Express.js (para Node.js)",
                        "Spring Boot (para Java)",
                        "Flask (para Python)",
                    ]}
                />
                <ServiceCard
                    imgIcon={database_icon}
                    title="Banco de Dados"
                    listSkills={[
                        "MySQL",
                        "PostgreSQL",
                        "SQLite",
                        "MongoDB",
                        "DynamoDB",
                    ]}
                />
                <ServiceCard
                    imgIcon={aws_icon}
                    title="Serviços da AWS"
                    listSkills={[
                        "Amazon S3",
                        "Amazon EC2",
                        "Amazon RDS",
                        "Amazon SNS",
                        "Amazon SQS",
                    ]}
                />
                <ServiceCard
                    imgIcon={dev_tools_icon}
                    title="Metodologias e Ferramentas de Desenvolvimento"
                    listSkills={[
                        "Git / GitHub / GitLab",
                        "Docker",
                        "Desenvolvimento Ágil (Scrum, Kanban) no Jira",
                    ]}
                />
                <ServiceCard
                    imgIcon={operational_systems_icon}
                    title="Sistemas Operacionais"
                    listSkills={[
                        "Linux Ubuntu (avançado)",
                        "Windows (intermediário)",
                    ]}
                />
                <ServiceCard
                    imgIcon={extras_icon}
                    title="Outras competências"
                    listSkills={["Testes (JUnit, Jest)"]}
                />
            </Cards>
        </>
    );
}
