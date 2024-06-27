import recriando_formularios_preview from "../assets/previewProjects/recriando-formulários.png"
import biscoito_da_sorte_preview from "../assets/previewProjects/biscoito-da-sorte.png"
import agencia_viagens_preview from "../assets/previewProjects/agencia-viagens.png"
import shorts_summary_preview from "../assets/previewProjects/shorts-summary.png"
import coffee_shop_preview from "../assets/previewProjects/coffee-shop.png"
import focus_timer_preview from "../assets/previewProjects/focus-timer.png"
import hospedagem_preview from "../assets/previewProjects/hospedagem.png"
import dev_links_preview from "../assets/previewProjects/dev-links.jpeg"
import nlw_setup_preview from "../assets/previewProjects/nlw-setup.jpeg"
import hospital_preview from "../assets/previewProjects/hospital.png"
import pousada_preview from "../assets/previewProjects/pousada.png"
import git_fav_preview from "../assets/previewProjects/git-fav.png"
import github_icon from "../assets/icons/github-transparent.png"
import javascript_icon from "../assets/icons/javascript.png"
import figma_icon from "../assets/icons/figma.png"
import css_3_icon from "../assets/icons/css-3.png"
import html_icon from "../assets/icons/html.png"
import git_icon from "../assets/icons/git.png"
import api_icon from "../assets/icons/api.png"

const projectsList = [
  {
    img: nlw_setup_preview,
    title: "NLW Setup",
    description: "Habits é um app para ajudar a rastrear os hábitos.",
    listTechnologiesIcon: [
      html_icon,
      css_3_icon,
      javascript_icon,
      git_icon,
      github_icon,
      figma_icon,
    ],
    repoLink: "https://github.com/Maria-Eduarda-Rodrigues-Schwinn/nlw-setup",
    siteLink: "https://maria-eduarda-rodrigues-schwinn.github.io/nlw-setup/",
  },
  {
    img: recriando_formularios_preview,
    title: "Formulário de Agendamento",
    description: "Formulário de exemplo para agendar e organizar mentorias.",
    listTechnologiesIcon: [
      html_icon,
      css_3_icon,
      git_icon,
      github_icon,
      figma_icon,
    ],
    repoLink:
      "https://github.com/Maria-Eduarda-Rodrigues-Schwinn/criando-formularios",
    siteLink:
      "https://maria-eduarda-rodrigues-schwinn.github.io/criando-formularios/",
  },
  {
    img: biscoito_da_sorte_preview,
    title: "Biscoito da Sorte",
    description:
      "Web site desenvolvida através da interação com o usuário, que abre mensagem motivacional ao clicar sobre o biscoito.",
    listTechnologiesIcon: [
      html_icon,
      css_3_icon,
      javascript_icon,
      git_icon,
      github_icon,
      figma_icon,
    ],
    repoLink:
      "https://github.com/Maria-Eduarda-Rodrigues-Schwinn/biscoito-da-sorte",
    siteLink:
      "https://maria-eduarda-rodrigues-schwinn.github.io/biscoito-da-sorte/",
  },
  {
    img: coffee_shop_preview,
    title: "Manhattan - Coffee House",
    description: "Web site desenvolvida para uma cafeteria.",
    listTechnologiesIcon: [
      html_icon,
      css_3_icon,
      git_icon,
      github_icon,
      figma_icon,
    ],
    repoLink:
      "https://github.com/Maria-Eduarda-Rodrigues-Schwinn/Manhattan_Coffee_House",
    siteLink:
      "https://maria-eduarda-rodrigues-schwinn.github.io/Manhattan_Coffee_House/",
  },
  {
    img: hospedagem_preview,
    title: "AlfaTech",
    description: "Web site desenvolvida para um hotel.",
    listTechnologiesIcon: [
      html_icon,
      css_3_icon,
      git_icon,
      github_icon,
      figma_icon,
    ],
    repoLink:
      "https://github.com/Maria-Eduarda-Rodrigues-Schwinn/Web-Site-Hospedagem",
    siteLink:
      "https://maria-eduarda-rodrigues-schwinn.github.io/Web-Site-Hospedagem/",
  },
  {
    img: pousada_preview,
    title: "Pousada Secreta",
    description: "Web site desenvolvida para uma pousada.",
    listTechnologiesIcon: [
      html_icon,
      css_3_icon,
      git_icon,
      github_icon,
      figma_icon,
    ],
    repoLink: "https://github.com/Maria-Eduarda-Rodrigues-Schwinn/Site-Pousada",
    siteLink: "https://maria-eduarda-rodrigues-schwinn.github.io/Site-Pousada/",
  },
  {
    img: hospital_preview,
    title: "CM Life",
    description: "Web site desenvolvida para um hospital/clínica.",
    listTechnologiesIcon: [
      html_icon,
      css_3_icon,
      git_icon,
      github_icon,
      figma_icon,
    ],
    repoLink: "https://github.com/Maria-Eduarda-Rodrigues-Schwinn/CM-Life",
    siteLink: "https://maria-eduarda-rodrigues-schwinn.github.io/CM-Life/",
  },
  {
    img: agencia_viagens_preview,
    title: "Agência de Viagens",
    description: "Web site desenvolvida para uma agência de viagens.",
    listTechnologiesIcon: [
      html_icon,
      css_3_icon,
      git_icon,
      github_icon,
      figma_icon,
    ],
    repoLink:
      "https://github.com/Maria-Eduarda-Rodrigues-Schwinn/Site-AgenciaViagens",
    siteLink:
      "https://maria-eduarda-rodrigues-schwinn.github.io/Site-AgenciaViagens/",
  },
  {
    img: shorts_summary_preview,
    title: "Shorts Summary",
    description:
      "Web site desenvolvida utilizando IA(Inteligência Artificial) para resumir um vídeo shorts do YouTube.",
    listTechnologiesIcon: [
      html_icon,
      css_3_icon,
      git_icon,
      github_icon,
      figma_icon,
    ],
    repoLink: "https://github.com/Maria-Eduarda-Rodrigues-Schwinn/NLW-IA",
  },
  {
    img: git_fav_preview,
    title: "Git Fav",
    description:
      "Web site desenvolvida utilizando API do GitHub para adicionar ou remover usuários favoritos.",
    listTechnologiesIcon: [
      html_icon,
      css_3_icon,
      javascript_icon,
      git_icon,
      github_icon,
      figma_icon,
      api_icon,
    ],
    repoLink: "https://github.com/Maria-Eduarda-Rodrigues-Schwinn/GitFav",
    siteLink: "https://maria-eduarda-rodrigues-schwinn.github.io/GitFav/",
  },
  {
    img: focus_timer_preview,
    title: "Focus Timer",
    description:
      "Web site desenvolvida baseada em um temporizador que emite sons.",
    listTechnologiesIcon: [
      html_icon,
      css_3_icon,
      git_icon,
      github_icon,
      figma_icon,
    ],
    repoLink:
      "https://github.com/Maria-Eduarda-Rodrigues-Schwinn/FocusTimer2.0",
    siteLink:
      "https://maria-eduarda-rodrigues-schwinn.github.io/FocusTimer2.0/",
  },
  {
    img: dev_links_preview,
    title: "Dev Links",
    description:
      "Web site desenvolvida que agrega links para usar como cartão de visitas online.",
    listTechnologiesIcon: [
      html_icon,
      css_3_icon,
      git_icon,
      github_icon,
      figma_icon,
    ],
    repoLink: "https://github.com/Maria-Eduarda-Rodrigues-Schwinn/DevLinks",
    siteLink: "https://maria-eduarda-rodrigues-schwinn.github.io/DevLinks/",
  },
]

export const projects = [...projectsList].reverse()
