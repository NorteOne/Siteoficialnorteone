import {
  Stethoscope,
  Store,
  Briefcase,
  Factory,
  Truck,
  ClipboardList,
  HardHat,
  GraduationCap,
  Building2,
  Wheat,
  TrendingUp,
} from "lucide-react";
import type { Segment } from "@/types";

export const segments: Segment[] = [
  {
    name: "Saúde e clínicas",
    description:
      "Agendamentos, prontuários, comunicação com pacientes e rotinas administrativas que exigem organização e confidencialidade.",
    icon: Stethoscope,
  },
  {
    name: "Varejo e comércio",
    description:
      "Frente de caixa, gestão de loja, e-commerce e atendimento omnichannel integrados em uma única operação.",
    icon: Store,
  },
  {
    name: "Serviços",
    description:
      "Empresas prestadoras de serviço com processos comerciais, operacionais e de atendimento que crescem em volume e complexidade.",
    icon: Briefcase,
  },
  {
    name: "Indústria",
    description:
      "Planejamento e controle de produção, apontamento de chão de fábrica, custos e qualidade organizados em um só fluxo.",
    icon: Factory,
  },
  {
    name: "Distribuição e logística",
    description:
      "Estoque, força de vendas, roteirização e indicadores logísticos conectados para reduzir ruído entre setores.",
    icon: Truck,
  },
  {
    name: "Operações administrativas",
    description:
      "Times administrativos e financeiros que dependem de planilhas, tarefas manuais e processos entre departamentos.",
    icon: ClipboardList,
  },
  {
    name: "Construção e engenharia",
    description:
      "Obras, orçamentos, medições e gestão de empreendimentos com mais previsibilidade e menos planilha paralela.",
    icon: HardHat,
  },
  {
    name: "Educação",
    description:
      "Instituições com rotinas administrativas, atendimento a alunos e famílias, e necessidade de organização de informação.",
    icon: GraduationCap,
  },
  {
    name: "Imobiliário",
    description:
      "Gestão de imóveis, atendimento comercial e processos que envolvem múltiplas partes e documentação.",
    icon: Building2,
  },
  {
    name: "Agronegócio",
    description:
      "Operações com processos próprios de gestão, logística e controle que se beneficiam de soluções sob medida.",
    icon: Wheat,
  },
  {
    name: "Empresas em crescimento",
    description:
      "Negócios que estão ganhando escala e sentem a estrutura interna não acompanhar mais o ritmo da operação.",
    icon: TrendingUp,
  },
];
