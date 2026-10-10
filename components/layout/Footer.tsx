import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { footerNav, getWhatsAppLink, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-on-dark)] bg-azul-noturno text-off-white">
      <Container className="pb-20 pt-14 sm:pb-16 sm:pt-16 lg:pb-12 lg:pt-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-7">
            <Image
              src="/logo/lockup.png"
              alt="Norte One"
              width={691}
              height={213}
              sizes="(min-width: 640px) 117px, 104px"
              className="h-8 w-auto sm:h-9"
            />
            <p className="mt-7 max-w-[43rem] font-display text-[1.5rem] font-semibold leading-[1.3] text-off-white sm:text-[1.85rem] lg:text-[2rem]">
              Entendemos a operação para desenvolver soluções que fazem sentido.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:col-span-5 lg:self-end">
            <FooterColumn title="Norte One" links={footerNav.empresa} />
            <FooterColumn title="Atuação" links={footerNav.atuacao} />
            <FooterColumn title="Legal" links={footerNav.legal} />
          </div>
        </div>

        <address className="mt-12 grid grid-cols-1 gap-7 border-y border-[var(--color-border-on-dark)] py-7 text-sm not-italic text-azul-nevoa/75 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          <FooterLink
            label="E-mail"
            value={siteConfig.contact.email}
            href={`mailto:${siteConfig.contact.email}`}
          />
          <FooterLink
            label="WhatsApp"
            value="Iniciar conversa"
            href={getWhatsAppLink()}
            external
          />
          <FooterInfo label="Localização" value={siteConfig.contact.address} />
          <FooterInfo label="CNPJ" value={siteConfig.contact.cnpj} />
        </address>

        <div className="mt-8 flex flex-col gap-3 text-xs text-azul-nevoa/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Norte One. Todos os direitos reservados.</p>
          <p>Sinop, Mato Grosso</p>
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
  const headingId = `footer-${title.toLowerCase().replace(" ", "-")}`;

  return (
    <nav aria-labelledby={headingId}>
      <h2 id={headingId} className="text-xs font-semibold uppercase text-cobre">
        {title}
      </h2>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-off-white/80 underline-offset-4 transition-colors hover:text-off-white hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FooterInfo({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase text-azul-nevoa/60">{label}</p>
      <p className="mt-1">{value}</p>
    </div>
  );
}

function FooterLink({
  label,
  value,
  href,
  external = false,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <div>
      <p className="text-xs uppercase text-azul-nevoa/60">{label}</p>
      <a
        href={href}
        className="mt-1 inline-block text-off-white/85 underline-offset-4 transition-colors hover:text-off-white hover:underline"
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {value}
      </a>
    </div>
  );
}
