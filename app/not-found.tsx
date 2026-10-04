import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-off-white py-20">
      <Container narrow className="text-center">
        <p className="text-sm font-semibold uppercase text-cobre">
          Erro 404
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-azul-profundo sm:text-4xl">
          Esta página não foi encontrada.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-cinza-pedra">
          O conteúdo que você procura pode ter mudado de endereço. Volte para
          a página inicial ou fale diretamente com a Norte One.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" variant="primary" size="lg">
            Voltar ao início
          </Button>
          <Button href="/contato" variant="secondary" size="lg">
            Falar com a Norte One
          </Button>
        </div>
      </Container>
    </section>
  );
}
