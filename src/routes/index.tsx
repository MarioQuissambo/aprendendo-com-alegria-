import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  BadgeCheck,
  BookOpen,
  Brush,
  CheckCircle2,
  ChevronDown,
  Clock,
  Download,
  GraduationCap,
  Heart,
  Palette,
  Printer,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

import { BuyButton } from "@/components/BuyButton";
import { hasCheckout } from "@/lib/checkout";
import heroMockup from "@/assets/hero-mockup.jpg";
import kidLearning from "@/assets/kid-learning.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aprendendo com Alegria! | Caderno de Atividades para Crianças de 3 a 7 Anos" },
      {
        name: "description",
        content:
          "Caderno digital com atividades prontas para imprimir: alfabeto, números, cores, formas e caligrafia. Feito para pais e professores que querem menos tela e mais aprendizado.",
      },
      { property: "og:title", content: "Aprendendo com Alegria! | Atividades para Imprimir" },
      {
        property: "og:description",
        content:
          "Atividades divertidas para imprimir e aprender em casa ou na sala de aula. Download imediato, uso ilimitado.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LandingPage,
});

const conteudo = [
  {
    icon: BookOpen,
    title: "Alfabeto completo",
    text: "Traçado das letras com palavras ilustradas para fixar cada som e reconhecer as letras sozinho.",
  },
  {
    icon: GraduationCap,
    title: "Números de 1 a 10",
    text: "Contagem, escrita e associação de quantidade — a base da matemática construída brincando.",
  },
  {
    icon: Palette,
    title: "Cores e formas",
    text: "10 cores e 6 formas geométricas com atividades de pintar, ligar e reconhecer.",
  },
  {
    icon: Brush,
    title: "Caligrafia guiada",
    text: "MAMÃE, PAPAI, CASA, SOL, AMOR e o próprio nome: as primeiras palavras da vida.",
  },
  {
    icon: Sparkles,
    title: "Ligue os pontos e colorir",
    text: "Coordenação motora fina e criatividade em páginas que a criança pede para repetir.",
  },
  {
    icon: BadgeCheck,
    title: "Certificado de conclusão",
    text: "Uma página para imprimir, escrever o nome da criança e celebrar a conquista dela.",
  },
];

const dores = [
  "A criança passa horas no celular e você sente que ela está aprendendo pouco.",
  "Você procura atividades na internet e perde a noite inteira sem achar nada bom.",
  "Materiais impressos na papelaria custam caro e acabam em uma semana.",
  "Na sala de aula, faltam atividades prontas para os dias em que o tempo é curto.",
];

const paraQuem = [
  { icon: Heart, title: "Pais e mães", text: "15 a 20 minutos por dia de qualidade real com o seu filho, longe da tela." },
  { icon: Users, title: "Professores", text: "Material pronto para a turma inteira: imprima quantas vezes quiser, sem custo extra." },
  { icon: ShieldCheck, title: "Cuidadores e terapeutas", text: "Atividades progressivas e visualmente limpas, ideais para atenção e coordenação." },
];

const depoimentos = [
  {
    nome: "Ana Cláudia",
    papel: "mãe do Théo, 5 anos",
    texto:
      "Imprimi as folhas do alfabeto no domingo e ele passou a tarde inteira traçando as letras. Em duas semanas já escreve o nome dele sozinho.",
  },
  {
    nome: "Prof.ª Marisa",
    papel: "educação infantil",
    texto:
      "Uso com a minha turma toda semana. É organizado, colorido e as crianças adoram receber o certificado no final.",
  },
  {
    nome: "Rui Baptista",
    papel: "pai de gémeas de 4 anos",
    texto:
      "O melhor é poder plastificar e reutilizar. Paguei uma vez e uso todos os dias com as duas.",
  },
];

const faq = [
  {
    q: "Recebo um livro impresso em casa?",
    a: "Não. É um produto 100% digital em PDF. Assim que a compra é confirmada, você recebe o arquivo para baixar e imprimir quantas vezes quiser, em casa ou na escola.",
  },
  {
    q: "Para que idade serve?",
    a: "De 3 a 7 anos. As atividades vão do reconhecimento de cores e formas (mais simples) até a escrita de palavras, então acompanham a criança conforme ela evolui.",
  },
  {
    q: "Preciso de impressora colorida?",
    a: "Não. Todas as páginas foram pensadas para funcionar também em impressão preto e branco — em muitas atividades, pintar faz parte da diversão.",
  },
  {
    q: "Posso usar com mais de uma criança ou com a turma toda?",
    a: "Sim. Você imprime quantas cópias quiser para os seus filhos ou para os alunos da sua sala. É um pagamento único, sem mensalidade.",
  },
  {
    q: "Quanto tempo leva cada atividade?",
    a: "Entre 15 e 20 minutos, o tempo ideal de concentração nessa faixa etária. Cabe perfeitamente na rotina antes do jantar ou em uma aula.",
  },
  {
    q: "Como recebo o material depois de pagar?",
    a: "O acesso é imediato: o link de download aparece logo após a confirmação do pagamento e também chega no seu e-mail.",
  },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Hero />
      <Marquee />
      <Dores />
      <Conteudo />
      <ParaQuem />
      <Prova />
      <Oferta />
      <Faq />
      <Footer />
      <StickyBar />
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Sparkles className="size-5" />
          </span>
          <span className="font-display text-lg font-extrabold leading-none text-ink">
            Aprendendo com Alegria!
          </span>
        </div>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex">
          <a href="#conteudo" className="transition-colors hover:text-primary">
            O que inclui
          </a>
          <a href="#depoimentos" className="transition-colors hover:text-primary">
            Depoimentos
          </a>
          <a href="#faq" className="transition-colors hover:text-primary">
            Dúvidas
          </a>
        </nav>
        <BuyButton size="md" className="hidden sm:inline-flex">
          Quero o caderno
        </BuyButton>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="surface-dots pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-primary">
            <Star className="size-3.5 fill-primary" /> Para crianças de 3 a 7 anos
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Seu filho aprendendo o alfabeto, os números e as cores{" "}
            <span className="text-primary">enquanto se diverte</span> — sem telas.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            O caderno digital <strong className="text-ink">Aprendendo com Alegria!</strong> traz
            atividades prontas para imprimir que estimulam a leitura, a escrita, a contagem e a
            coordenação motora em apenas 20 minutos por dia. Baixe hoje, imprima quantas vezes
            quiser.
          </p>

          <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {[
              "Download imediato em PDF",
              "Imprima quantas vezes quiser",
              "Funciona em preto e branco",
              "Certificado para a criança",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-semibold text-ink">
                <CheckCircle2 className="size-5 shrink-0 text-primary" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <BuyButton>
              <Download className="size-5" /> Quero baixar agora
            </BuyButton>
            <a
              href="#conteudo"
              className="inline-flex items-center gap-1 px-2 py-3 text-sm font-bold text-muted-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
            >
              Ver o que vem dentro <ChevronDown className="size-4" />
            </a>
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="size-4 text-primary" /> Pagamento único · Garantia de 7 dias
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -rotate-2 rounded-[2rem] bg-primary/10" aria-hidden />
          <img
            src={heroMockup}
            alt="Caderno de atividades Aprendendo com Alegria mostrado em tablet e folhas impressas"
            width={1408}
            height={1104}
            className="relative w-full rounded-[1.75rem] border border-border bg-background object-cover shadow-card"
          />
          <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 shadow-card">
            <span className="grid size-10 place-items-center rounded-xl bg-primary/12 text-primary">
              <Printer className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-base font-extrabold text-ink">10 atividades prontas</p>
              <p className="text-xs text-muted-foreground">Alfabeto · Números · Cores · Formas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Alfabeto", "Números", "Cores", "Formas", "Caligrafia", "Ligue os pontos", "Colorir", "Certificado"];
  return (
    <div className="border-y border-ink/10 bg-ink py-3.5">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 text-sm font-extrabold uppercase tracking-widest text-ink-foreground/80">
        {items.map((i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-primary" />
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function Dores() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <img
          src={kidLearning}
          alt="Criança fazendo atividades impressas com o acompanhamento da mãe"
          width={1200}
          height={912}
          loading="lazy"
          className="w-full rounded-[1.75rem] border border-border object-cover shadow-card"
        />
        <div>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Se você se identifica com pelo menos uma dessas situações, este material é para você:
          </h2>
          <ul className="mt-7 space-y-4">
            {dores.map((d) => (
              <li
                key={d}
                className="flex gap-3 rounded-2xl border border-border bg-card p-4 text-[0.95rem] leading-relaxed text-muted-foreground"
              >
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                  <Star className="size-3.5 fill-primary" />
                </span>
                {d}
              </li>
            ))}
          </ul>
          <p className="mt-7 rounded-2xl bg-secondary p-5 font-display text-lg font-bold leading-snug text-secondary-foreground">
            A solução não é mais tempo. É ter o material certo, pronto, ao alcance de um clique —
            e é exatamente isso que este caderno entrega.
          </p>
          <div className="mt-7">
            <BuyButton size="md">Garantir o meu acesso</BuyButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Conteudo() {
  return (
    <section id="conteudo" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-extrabold uppercase tracking-widest text-primary">
            O que vem dentro
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            10 atividades pensadas por etapas do desenvolvimento
          </h2>
          <p className="mt-3 text-muted-foreground">
            Cada página trabalha uma habilidade específica — do reconhecimento visual à escrita das
            primeiras palavras — com instruções simples para o adulto conduzir.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {conteudo.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-card transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-primary/12 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-4 font-display text-xl font-extrabold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-primary/25 bg-background p-6 text-center">
          <p className="font-display text-lg font-bold text-ink">
            Tudo isso em um único PDF, pronto para imprimir hoje.
          </p>
          <BuyButton size="md">Quero o caderno completo</BuyButton>
        </div>
      </div>
    </section>
  );
}

function ParaQuem() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20">
      <h2 className="text-center font-display text-3xl font-extrabold text-ink sm:text-4xl">
        Feito para quem ensina todos os dias
      </h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {paraQuem.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl bg-ink p-7 text-ink-foreground">
            <Icon className="size-7 text-primary" />
            <h3 className="mt-4 font-display text-xl font-extrabold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Prova() {
  return (
    <section id="depoimentos" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="flex gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-primary" />
            ))}
          </div>
          <h2 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Famílias e professores já usam com as crianças
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {depoimentos.map((d) => (
            <figure key={d.nome} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <Quote className="size-7 text-primary/40" />
              <blockquote className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                “{d.texto}”
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-display text-base font-extrabold text-ink">{d.nome}</p>
                <p className="text-xs text-muted-foreground">{d.papel}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Oferta() {
  return (
    <section id="oferta" className="relative overflow-hidden bg-ink py-20 text-ink-foreground">
      <div className="surface-dots pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-3xl px-5 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-primary-foreground">
          <Clock className="size-3.5" /> Acesso imediato
        </span>
        <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-5xl">
          Comece hoje mesmo a ensinar brincando
        </h2>
        <p className="mt-4 text-ink-foreground/75">
          Um pagamento único. O material fica seu para sempre, com direito a imprimir quantas vezes
          precisar — para os seus filhos ou para a sua turma inteira.
        </p>

        <div className="mx-auto mt-10 max-w-md rounded-[1.75rem] border border-primary/40 bg-background p-8 text-left text-foreground shadow-cta">
          <p className="font-display text-lg font-extrabold text-ink">Caderno completo em PDF</p>
          <ul className="mt-5 space-y-3">
            {[
              "10 atividades prontas para imprimir",
              "Alfabeto, números, cores, formas e caligrafia",
              "Gabarito e instruções para o adulto",
              "Certificado de conclusão personalizável",
              "Impressão ilimitada, uso em casa ou na escola",
            ].map((i) => (
              <li key={i} className="flex gap-2.5 text-sm font-semibold text-ink">
                <CheckCircle2 className="size-5 shrink-0 text-primary" />
                {i}
              </li>
            ))}
          </ul>

          <div className="mt-7 border-t border-border pt-6">
            <BuyButton className="w-full">
              <Download className="size-5" /> Comprar agora
            </BuyButton>
            <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
              <ShieldCheck className="size-4 text-primary" />
              Garantia incondicional de 7 dias
            </p>
            {!hasCheckout && (
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Link de pagamento a configurar — envie a URL do checkout e todos os botões passam a
                abrir a página de compra.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
      <h2 className="text-center font-display text-3xl font-extrabold text-ink sm:text-4xl">
        Perguntas frequentes
      </h2>
      <div className="mt-10 space-y-3">
        {faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="overflow-hidden rounded-2xl border border-border bg-card">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-extrabold text-ink transition-colors hover:bg-secondary/60"
              >
                {item.q}
                <ChevronDown
                  className={`size-5 shrink-0 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-10 text-center">
        <BuyButton>
          <Download className="size-5" /> Quero começar hoje
        </BuyButton>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-cream py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center">
        <span className="font-display text-lg font-extrabold text-ink">Aprendendo com Alegria!</span>
        <p className="max-w-xl text-xs leading-relaxed text-muted-foreground">
          Produto digital para uso pessoal e educacional. Este material não substitui o
          acompanhamento pedagógico profissional.
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aprendendo com Alegria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
      <BuyButton size="md" className="w-full">
        <Download className="size-5" /> Comprar agora
      </BuyButton>
    </div>
  );
}
