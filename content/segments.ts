import type { Segment } from "@/types";

export const segments: Segment[] = [
  {
    name: "Saúde e clínicas",
    description:
      "Agendamentos, prontuários, comunicação com pacientes e rotinas administrativas que exigem organização e confidencialidade.",
    tier: "core",
  },
  {
    name: "Serviços",
    description:
      "Empresas prestadoras de serviço com processos comerciais, operacionais e de atendimento que crescem em volume e complexidade.",
    tier: "core",
  },
  {
    name: "Comércio",
    description:
      "Operações de venda, estoque e relacionamento com cliente que precisam de mais integração entre canais e sistemas.",
    tier: "core",
  },
  {
    name: "Operações administrativas",
    description:
      "Times administrativos e financeiros que dependem de planilhas, tarefas manuais e processos entre departamentos.",
    tier: "core",
  },
  {
    name: "Empresas em crescimento",
    description:
      "Negócios que estão ganhando escala e sentem a estrutura interna não acompanhar mais o ritmo da operação.",
    tier: "core",
  },
  {
    name: "Agronegócio",
    description:
      "Operações com processos próprios de gestão, logística e controle que se beneficiam de soluções sob medida.",
    tier: "emerging",
  },
  {
    name: "Educação",
    description:
      "Instituições com rotinas administrativas, atendimento a alunos e famílias, e necessidade de organização de informação.",
    tier: "emerging",
  },
  {
    name: "Imobiliário",
    description:
      "Gestão de imóveis, atendimento comercial e processos que envolvem múltiplas partes e documentação.",
    tier: "emerging",
  },
  {
    name: "Distribuição",
    description:
      "Operações logísticas e comerciais que dependem de integração entre pedidos, estoque e atendimento.",
    tier: "emerging",
  },
];
