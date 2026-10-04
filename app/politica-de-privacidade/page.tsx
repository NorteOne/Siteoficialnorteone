import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { siteConfig, PLACEHOLDER } from "@/lib/site-config";

const pageTitle = "Política de Privacidade";
const pageDescription =
  "Como a Norte One coleta, utiliza e protege dados pessoais, em conformidade com a LGPD (Lei Geral de Proteção de Dados).";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/politica-de-privacidade" },
  openGraph: {
    type: "website",
    url: "/politica-de-privacidade",
    title: `Norte One — ${pageTitle}`,
    description: pageDescription,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Norte One — soluções para empresas funcionarem melhor" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Norte One — ${pageTitle}`,
    description: pageDescription,
    images: ["/opengraph-image"],
  },
};

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Início", url: siteConfig.url },
          {
            name: "Política de Privacidade",
            url: `${siteConfig.url}/politica-de-privacidade`,
          },
        ]}
      />

      <section className="bg-azul-profundo py-16 text-off-white sm:py-20">
        <Container narrow>
          <SectionHeading
            tone="dark"
            level="h1"
            eyebrow="Legal"
            title="Política de Privacidade"
            description="Última atualização: a definir na publicação oficial. Este documento explica como tratamos dados pessoais em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)."
          />
        </Container>
      </section>

      <section className="bg-off-white py-16 sm:py-20">
        <Container narrow className="prose-block space-y-10 text-base leading-relaxed text-grafite">
          <Block title="1. Quem somos">
            <p>
              A Norte One é o controlador dos dados pessoais tratados através
              deste site, nos termos da LGPD. Dúvidas sobre este documento ou
              sobre o tratamento de dados podem ser enviadas para{" "}
              <strong>{siteConfig.contact.email}</strong>.
            </p>
          </Block>

          <Block title="2. Quais dados coletamos">
            <p>
              Coletamos apenas os dados fornecidos voluntariamente pelo
              visitante através do formulário de contato: nome, empresa,
              e-mail, a descrição da situação relatada e, quando informado,
              WhatsApp. Não solicitamos dados sensíveis.
            </p>
          </Block>

          <Block title="3. Finalidade do tratamento">
            <p>
              Os dados enviados pelo formulário de contato são utilizados
              exclusivamente para que a equipe da Norte One possa entender a
              solicitação e retornar o contato comercial. Não utilizamos
              esses dados para outras finalidades sem consentimento
              adicional.
            </p>
          </Block>

          <Block title="4. Base legal">
            <p>
              O tratamento dos dados do formulário de contato tem como base
              legal o consentimento do titular (art. 7º, I da LGPD),
              fornecido no momento do envio do formulário, e o legítimo
              interesse em responder a solicitações comerciais iniciadas pelo
              próprio titular.
            </p>
          </Block>

          <Block title="5. Compartilhamento de dados">
            <p>
              Não vendemos nem compartilhamos dados pessoais com terceiros
              para fins de marketing. Dados podem ser processados por
              fornecedores de infraestrutura e comunicação (como serviços de
              e-mail) estritamente para viabilizar o contato comercial
              solicitado.
            </p>
          </Block>

          <Block title="6. Retenção e segurança">
            <p>
              Os dados são mantidos pelo tempo necessário para atendimento da
              solicitação comercial e cumprimento de obrigações legais,
              sendo armazenados com controles razoáveis de segurança. O
              armazenamento é mínimo e proporcional à finalidade descrita
              acima.
            </p>
          </Block>

          <Block title="7. Direitos do titular" id="direitos">
            <p>
              Nos termos da LGPD, o titular pode solicitar a qualquer momento:
              confirmação da existência de tratamento, acesso aos dados,
              correção de dados incompletos ou desatualizados, anonimização,
              bloqueio ou eliminação de dados desnecessários, e revogação do
              consentimento. As solicitações podem ser feitas para{" "}
              <strong>{siteConfig.contact.email}</strong>.
            </p>
          </Block>

          <Block title="8. Cookies" id="cookies">
            <p>
              Este site, na sua versão atual, não utiliza cookies opcionais de
              analytics ou marketing. Caso ferramentas como Google Analytics,
              Microsoft Clarity ou Meta Pixel venham a ser ativadas
              futuramente, esta política será atualizada e um mecanismo de
              consentimento de cookies será apresentado antes de qualquer
              coleta não essencial.
            </p>
          </Block>

          <Block title="9. Termos de uso" id="termos">
            <p>
              O conteúdo deste site é de propriedade da Norte One e não deve
              ser reproduzido sem autorização. O uso do site implica
              concordância com estes termos e com esta Política de
              Privacidade.
            </p>
          </Block>

          <Block title="10. Encarregado de dados (DPO)">
            <p>{PLACEHOLDER}</p>
          </Block>
        </Container>
      </section>
    </>
  );
}

function Block({
  title,
  children,
  id,
}: {
  title: string;
  children: ReactNode;
  id?: string;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <h2 className="text-xl font-semibold text-azul-profundo">{title}</h2>
      <div className="mt-3 text-cinza-pedra">{children}</div>
    </div>
  );
}
