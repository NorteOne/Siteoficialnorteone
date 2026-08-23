import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { footerNav, siteConfig, PLACEHOLDER } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-azul-profundo text-off-white">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-xs">
            <Image
              src="/logo/full.png"
              alt="Norte One — Estratégia, Tecnologia, Crescimento"
              width={843}
              height={213}
              className="h-12 w-auto"
            />
            <p className="mt-5 text-sm leading-relaxed text-azul-nevoa/80">
              Tecnologia aplicada ao que realmente importa: o seu negócio.
              Identificamos desafios empresariais e desenvolvemos soluções
              digitais sob medida.
            </p>
          </div>

          <FooterColumn title="Empresa" links={footerNav.empresa} />
          <FooterColumn title="Soluções" links={footerNav.solucoes} />
          <FooterColumn title="Legal" links={footerNav.legal} />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 border-t border-[var(--color-border-on-dark)] pt-8 text-sm text-azul-nevoa/80 sm:grid-cols-2 lg:grid-cols-4">
          <FooterInfo label="E-mail" value={siteConfig.contact.email} />
          <FooterInfo label="WhatsApp" value={siteConfig.contact.whatsappDisplay} />
          <FooterInfo label="Localização" value={siteConfig.contact.address} />
          <FooterInfo label="CNPJ" value={siteConfig.contact.cnpj} />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--color-border-on-dark)] pt-8 text-xs text-azul-nevoa/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Norte One. Todos os direitos reservados.</p>
          {(siteConfig.social.instagram !== PLACEHOLDER ||
            siteConfig.social.linkedin !== PLACEHOLDER) ? (
            <div className="flex gap-5">
              {siteConfig.social.instagram !== PLACEHOLDER ? (
                <Link href={siteConfig.social.instagram} className="hover:text-off-white">
                  Instagram
                </Link>
              ) : null}
              {siteConfig.social.linkedin !== PLACEHOLDER ? (
                <Link href={siteConfig.social.linkedin} className="hover:text-off-white">
                  LinkedIn
                </Link>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-azul-nevoa/60">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-off-white/85 transition-colors hover:text-cobre"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterInfo({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] uppercase tracking-wide text-azul-nevoa/50">{label}</p>
      <p className="mt-1">{value}</p>
    </div>
  );
}
