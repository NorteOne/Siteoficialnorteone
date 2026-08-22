import {
  Workflow,
  Puzzle,
  MessageSquareText,
  Network,
  LayoutDashboard,
  Globe2,
} from "lucide-react";
import type { Solution } from "@/types";

export const solutions: Solution[] = [
  {
    slug: "automacao-de-processos",
    code: "01",
    name: "Automação de Processos",
    shortDescription:
      "Tarefas repetitivas, fluxos manuais e comunicação entre setores passam a acontecer sozinhos.",
    description:
      "Boa parte do tempo da sua equipe é consumido por tarefas repetitivas: preencher planilhas, repassar informações entre setores, gerar relatórios manualmente, lembrar prazos. A Norte One mapeia esses fluxos e constrói automações que fazem esse trabalho por você, com consistência.",
    problem:
      "Sua equipe repete manualmente tarefas que já poderiam acontecer sozinhas, e isso consome tempo, gera atrasos e abre espaço para erros.",
    benefits: [
      "Menos retrabalho e menos tarefas manuais repetitivas",
      "Mais velocidade na execução de processos do dia a dia",
      "Redução de erros humanos em atividades operacionais",
      "Processos padronizados entre pessoas e equipes diferentes",
    ],
    forWhom:
      "Empresas com rotinas administrativas repetitivas, fluxos entre setores e volume de tarefas manuais que já poderiam ser automatizadas.",
    icon: Workflow,
  },
  {
    slug: "solucoes-sob-medida",
    code: "02",
    name: "Soluções Sob Medida",
    shortDescription:
      "Quando um sistema pronto não acompanha a forma como a sua empresa realmente opera.",
    description:
      "Sistemas genéricos são construídos para atender a média do mercado — não a realidade específica da sua operação. Quando processos, regras de negócio ou particularidades da equipe não cabem em uma ferramenta pronta, desenvolvemos uma aplicação pensada especificamente para o seu contexto.",
    problem:
      "Um sistema pronto exige que sua empresa se adapte a ele, quando deveria ser o contrário: a tecnologia se adaptando à sua regra de negócio.",
    benefits: [
      "Solução desenhada para o seu processo, não o inverso",
      "Sem pagar por recursos genéricos que a empresa nunca usa",
      "Flexibilidade para evoluir a solução conforme a operação cresce",
      "Menos gambiarras e planilhas paralelas para 'compensar' o sistema",
    ],
    forWhom:
      "Empresas cuja operação tem particularidades que sistemas genéricos do mercado não conseguem atender adequadamente.",
    icon: Puzzle,
  },
  {
    slug: "atendimento-inteligente",
    code: "03",
    name: "Atendimento e Relacionamento Inteligente",
    shortDescription:
      "Atendimento mais rápido e organizado, com automação e inteligência aplicadas ao relacionamento comercial.",
    description:
      "Clientes esperando demais por uma resposta, mensagens perdidas, contatos sem classificação e agendamentos manuais custam oportunidades comerciais. Estruturamos soluções de atendimento com automação, canais como WhatsApp, classificação de contatos e fluxos comerciais organizados — incluindo, quando fizer sentido para o seu negócio, o Norte Chat.",
    problem:
      "Clientes esperam demais por uma resposta e contatos comerciais se perdem por falta de organização no atendimento.",
    benefits: [
      "Respostas mais rápidas para quem entra em contato",
      "Contatos organizados e classificados por prioridade e etapa",
      "Agendamentos e fluxos comerciais menos dependentes de tarefas manuais",
      "Histórico de relacionamento centralizado e acessível à equipe",
    ],
    forWhom:
      "Empresas com alto volume de contato via WhatsApp ou canais digitais e dificuldade em organizar e priorizar o atendimento.",
    icon: MessageSquareText,
  },
  {
    slug: "integracoes",
    code: "04",
    name: "Integrações e Conectividade",
    shortDescription:
      "Ferramentas e informações que hoje funcionam isoladas passam a conversar entre si.",
    description:
      "É comum que sistemas, planilhas, CRMs, agendas e ferramentas de gestão funcionem isolados, obrigando a equipe a repetir o mesmo lançamento em lugares diferentes. Conectamos essas plataformas para que a informação flua automaticamente entre elas, reduzindo retrabalho e inconsistências.",
    problem:
      "Sistemas que não conversam entre si obrigam sua equipe a lançar a mesma informação várias vezes, em lugares diferentes.",
    benefits: [
      "Informação atualizada em um único fluxo, sem retrabalho duplicado",
      "Menos inconsistência entre sistemas e planilhas paralelas",
      "Ferramentas que a empresa já usa passam a trabalhar juntas",
      "Base mais confiável para relatórios e decisões",
    ],
    forWhom:
      "Empresas que já utilizam diferentes sistemas, CRMs ou plataformas, mas sentem falta de comunicação entre eles.",
    icon: Network,
  },
  {
    slug: "gestao-operacional",
    code: "05",
    name: "Gestão e Visibilidade Operacional",
    shortDescription:
      "Painéis e portais que centralizam informação para facilitar o acompanhamento da operação.",
    description:
      "Tomar decisões sem visão clara da operação é um risco constante para empresas em crescimento. Desenvolvemos dashboards, portais e painéis administrativos que centralizam as informações que importam, facilitando o acompanhamento do negócio e a tomada de decisão.",
    problem:
      "Falta uma visão clara e centralizada da operação, e as decisões acabam sendo tomadas com base em informação fragmentada.",
    benefits: [
      "Informações centralizadas em um único painel de acompanhamento",
      "Mais clareza para decisões baseadas em dados reais da operação",
      "Acesso facilitado às informações certas para cada área",
      "Menos tempo gasto reunindo dados espalhados em planilhas",
    ],
    forWhom:
      "Empresas em crescimento que precisam de mais visibilidade e controle sobre indicadores e processos internos.",
    icon: LayoutDashboard,
  },
  {
    slug: "experiencias-digitais",
    code: "06",
    name: "Presença e Experiências Digitais",
    shortDescription:
      "Presença digital corporativa orientada aos objetivos comerciais da empresa.",
    description:
      "Um site institucional não deveria ser apenas um cartão de visitas online. Construímos presença digital corporativa — sites institucionais e experiências digitais — pensada para comunicar credibilidade, apresentar soluções com clareza e gerar oportunidades comerciais reais.",
    problem:
      "A presença digital atual não comunica a maturidade da empresa nem gera oportunidades comerciais reais.",
    benefits: [
      "Presença digital alinhada ao posicionamento da empresa",
      "Comunicação clara sobre soluções e diferenciais",
      "Estrutura pensada para gerar contatos comerciais qualificados",
      "Base sólida para crescimento de presença institucional",
    ],
    forWhom:
      "Empresas que precisam de uma presença digital institucional condizente com o estágio e a ambição do negócio.",
    icon: Globe2,
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((solution) => solution.slug === slug);
}
