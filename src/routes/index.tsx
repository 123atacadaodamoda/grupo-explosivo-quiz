import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grupo Explosivo — Lote Grupos de WhatsApp com a API Oficial" },
      {
        name: "description",
        content:
          "Método completo para lotar grupos de WhatsApp diariamente usando a API Oficial. Sem bloqueios, sem depender de plataformas caras, com estrutura profissional e escalável.",
      },
      { property: "og:title", content: "Grupo Explosivo — Lote Grupos de WhatsApp com a API Oficial" },
      {
        property: "og:description",
        content:
          "Descubra como empresários estão escalando grupos de WhatsApp com a API Oficial. Sem bloqueios, com automação e crescimento real.",
      },
    ],
  }),
  component: SalesPage,
});

const LOGO = "https://i.postimg.cc/d17gcSTM/Gemini-Generated-Image-9jwevz9jwevz9jwe.png";
const CHECKOUT_URL = "https://aprender.vaiaprender.com.br/c/zjzmcuo";
const VSL_URL =
  "https://vobmqdlofgzbxrgabbbp.supabase.co/storage/v1/object/public/videos/368658ca-473d-41ae-b6f4-bdcba2bcf0fc.mp4";

function CTA({ label = "QUERO GARANTIR MEU ACESSO", sub }: { label?: string; sub?: string }) {
  return (
    <div className="w-full flex flex-col items-center gap-2 my-2">
      <a
        href={CHECKOUT_URL}
        className="btn-primary btn-primary-hover animate-pulse-glow text-base sm:text-lg max-w-md text-center"
      >
        {label} →
      </a>
      {sub && <p className="text-xs text-muted-foreground text-center">{sub}</p>}
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tint = "default",
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
  tint?: "default" | "muted" | "dark" | "primary";
}) {
  const bg =
    tint === "muted"
      ? "bg-secondary/40"
      : tint === "dark"
      ? "bg-[oklch(0.18_0.02_160)] text-white"
      : tint === "primary"
      ? "bg-gradient-to-br from-primary/10 via-background to-primary/5"
      : "bg-background";
  return (
    <section id={id} className={`${bg} py-16 sm:py-24 px-5`}>
      <div className="max-w-6xl mx-auto">
        {eyebrow && (
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary-dark text-[11px] font-bold uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              {eyebrow}
            </span>
          </div>
        )}
        {title && (
          <h2 className="text-center text-3xl sm:text-5xl font-extrabold tracking-tight text-balance leading-[1.1] mb-4">
            {title}
          </h2>
        )}
        {subtitle && (
          <p className="text-center text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

function SalesPage() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground">
      <TopBar />
      <Hero />
      <SocialProofStrip />
      <Pains />
      <Solution />
      <Vsl />
      <Benefits />
      <HowItWorks />
      <ForWhom />
      <DifferentSection />
      <WhatsIncluded />
      <Bonuses />
      <Testimonials />
      <Offer />
      <Guarantee />
      <Objections />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={LOGO} alt="Grupo Explosivo" className="h-8 w-auto" />
          <span className="font-extrabold tracking-tight text-sm sm:text-base">Grupo Explosivo</span>
        </div>
        <a
          href={CHECKOUT_URL}
          className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition"
        >
          QUERO ACESSO →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-12 pb-20 sm:pt-20 sm:pb-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, color-mix(in oklab, var(--primary) 25%, transparent), transparent 60%)",
        }}
      />
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 text-primary-dark text-[11px] font-bold uppercase tracking-wider mb-6">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Método Oficial • API do WhatsApp
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-balance leading-[1.05] mb-6">
          Lote grupos de WhatsApp <span className="text-primary-dark">todos os dias</span> usando a{" "}
          <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            API Oficial
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
          Pare de perder números, evite bloqueios e construa uma operação profissional capaz de
          disparar <strong className="text-foreground">até 100 mil mensagens por dia</strong> — sem
          depender de plataformas caras.
        </p>
        <CTA label="QUERO COMEÇAR AGORA" sub="Acesso imediato • Atualizações incluídas" />
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs sm:text-sm text-muted-foreground">
          {[
            "✅ Sem bloqueios",
            "✅ Estrutura própria",
            "✅ Escala real",
            "✅ Bônus incluídos",
          ].map((i) => (
            <span key={i} className="font-semibold">{i}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialProofStrip() {
  const items = [
    "Shopee", "Mercado Livre", "Lojas de Roupa", "Negócios Locais",
    "Afiliados", "Infoprodutores", "Prestadores de Serviço",
  ];
  return (
    <div className="border-y border-border bg-secondary/30 py-6 overflow-hidden">
      <p className="text-center text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
        Usado por quem precisa de leads no WhatsApp
      </p>
      <div className="flex flex-wrap justify-center gap-3 px-5">
        {items.map((i) => (
          <span
            key={i}
            className="px-3 py-1.5 rounded-full bg-background border border-border text-xs font-semibold"
          >
            {i}
          </span>
        ))}
      </div>
    </div>
  );
}

function Pains() {
  const pains = [
    { t: "Seus grupos não crescem", d: "Você divulga, divulga e o crescimento continua travado." },
    { t: "WhatsApp vive bloqueando", d: "Número banido, conta caída e todo o trabalho perdido." },
    { t: "Perde grupos do nada", d: "Troca constante de números e precisa recomeçar do zero." },
    { t: "Leads desqualificados", d: "Pessoas entram, não interagem e nunca compram." },
    { t: "Convites com baixa aceitação", d: "Manda muito, entra pouco — e o esforço não compensa." },
    { t: "Dependência de plataformas caras", d: "Mensalidades altas, limitações e nenhum controle." },
  ];
  return (
    <Section
      eyebrow="Você se identifica?"
      title={<>Se você vende, atende ou capta clientes no WhatsApp, <span className="text-primary-dark">um desses problemas é seu</span></>}
      subtitle="A maioria dos empresários ainda usa métodos manuais e bloqueáveis. Resultado: muito trabalho, pouco retorno e zero previsibilidade."
      tint="muted"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pains.map((p) => (
          <div
            key={p.t}
            className="p-5 rounded-2xl bg-background border border-destructive/20 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start gap-3">
              <span className="flex-shrink-0 h-9 w-9 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center text-lg">
                ✕
              </span>
              <div>
                <h3 className="font-bold text-[15px] mb-1">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-snug">{p.d}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Solution() {
  return (
    <Section
      eyebrow="A solução"
      title={<>Conheça o <span className="text-primary-dark">Grupo Explosivo</span></>}
      subtitle="O método completo para construir uma operação profissional de captação e crescimento de grupos no WhatsApp usando a API Oficial — a mesma estrutura usada por grandes empresas."
      tint="primary"
    >
      <div className="max-w-3xl mx-auto bg-background rounded-3xl border border-primary/20 p-6 sm:p-10 shadow-xl">
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { n: "100k", t: "Mensagens por dia sem bloqueio" },
            { n: "100%", t: "Estrutura oficial e segura" },
            { n: "∞", t: "Escala sem depender de terceiros" },
          ].map((s) => (
            <div key={s.t}>
              <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent">
                {s.n}
              </div>
              <p className="text-sm text-muted-foreground mt-1">{s.t}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-base sm:text-lg leading-relaxed">
            Você vai aprender, do zero, a montar sua <strong>própria plataforma</strong> baseada na
            <strong> API Oficial do WhatsApp</strong>, atrair leads qualificados, encher grupos
            diariamente e <strong>escalar com segurança</strong>.
          </p>
          <div className="mt-6"><CTA /></div>
        </div>
      </div>
    </Section>
  );
}

function Vsl() {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const onTime = () => {
      if (v.duration) setProgress((v.currentTime / v.duration) * 100);
    };
    v.addEventListener("timeupdate", onTime);
    return () => v.removeEventListener("timeupdate", onTime);
  }, []);
  return (
    <Section
      id="vsl"
      eyebrow="Assista agora"
      title={<>Veja o método funcionando <span className="text-primary-dark">na prática</span></>}
      subtitle="Em poucos minutos você entende exatamente como tudo funciona — e por que isso é diferente de qualquer coisa que já viu."
    >
      <div className="max-w-md mx-auto">
        <div className="relative w-full rounded-3xl overflow-hidden bg-black shadow-2xl aspect-[9/16] ring-1 ring-primary/20">
          <video
            ref={ref}
            className="w-full h-full object-cover"
            src={VSL_URL}
            poster={LOGO}
            playsInline
            controls
            preload="metadata"
          />
          <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
            <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
        <div className="mt-6"><CTA label="QUERO GARANTIR AGORA" /></div>
      </div>
    </Section>
  );
}

function Benefits() {
  const benefits = [
    { i: "🚀", t: "Crescimento real e diário", d: "Grupos lotados todos os dias com pessoas interessadas de verdade." },
    { i: "🛡️", t: "Adeus bloqueios", d: "Estrutura baseada na API Oficial — segurança e estabilidade total." },
    { i: "⚙️", t: "Operação automatizada", d: "Fluxos prontos no N8N para você economizar tempo e escalar." },
    { i: "💰", t: "Custo muito menor", d: "Templates de utilidade extremamente baratos — corte gastos com plataformas." },
    { i: "📈", t: "Até 100k envios/dia", d: "Estrutura capaz de alcançar dezenas de milhares de contatos por dia." },
    { i: "👑", t: "Independência total", d: "Sua própria plataforma. Sem ficar refém de ferramentas alugadas." },
  ];
  return (
    <Section
      eyebrow="Benefícios"
      title={<>O que muda quando você aplica o método</>}
      subtitle="Mais leads qualificados, mais grupos cheios, menos dor de cabeça e uma operação que cresce com você."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((b) => (
          <div
            key={b.t}
            className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/40 hover:shadow-glow transition-all"
          >
            <div className="text-3xl mb-3">{b.i}</div>
            <h3 className="font-bold text-lg mb-1.5">{b.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-12"><CTA /></div>
    </Section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Você acessa o método", d: "Login imediato após a compra. Aulas diretas, sem enrolação." },
    { n: "02", t: "Monta sua estrutura", d: "Instala a plataforma própria e configura a API Oficial passo a passo." },
    { n: "03", t: "Captura leads qualificados", d: "Aplica as estratégias de captação que enchem grupos com gente que quer comprar." },
    { n: "04", t: "Automatiza com N8N", d: "Usa os templates prontos para automatizar envios, entradas e respostas." },
    { n: "05", t: "Escala todos os dias", d: "Sua operação cresce de forma previsível, segura e sem bloqueio." },
  ];
  return (
    <Section
      eyebrow="Como funciona"
      title={<>5 passos para sua <span className="text-primary-dark">máquina de grupos</span></>}
      tint="muted"
    >
      <div className="max-w-3xl mx-auto space-y-4">
        {steps.map((s) => (
          <div
            key={s.n}
            className="flex gap-5 p-5 rounded-2xl bg-background border border-border"
          >
            <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground flex items-center justify-center font-extrabold text-xl">
              {s.n}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ForWhom() {
  const items = [
    { i: "🛍️", t: "Shopee & Mercado Livre", d: "Direcione tráfego e venda mais com grupos ativos." },
    { i: "👕", t: "Lojas de roupas", d: "Lance coleções e promoções para uma audiência fiel." },
    { i: "📍", t: "Negócios locais", d: "Encha agenda, gere recompra e crie comunidade." },
    { i: "🔧", t: "Prestadores de serviço", d: "Capte clientes recorrentes com previsibilidade." },
    { i: "💼", t: "Afiliados", d: "Distribua links em escala com público qualificado." },
    { i: "🎓", t: "Infoprodutores", d: "Construa listas e aqueça leads para lançamentos." },
  ];
  return (
    <Section
      eyebrow="Para quem é"
      title={<>Se você precisa atrair pessoas para grupos, <span className="text-primary-dark">é para você</span></>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((x) => (
          <div key={x.t} className="p-5 rounded-2xl bg-secondary/40 border border-border">
            <div className="text-2xl mb-2">{x.i}</div>
            <h3 className="font-bold mb-1">{x.t}</h3>
            <p className="text-sm text-muted-foreground">{x.d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function DifferentSection() {
  const rows = [
    ["Estabilidade", "Bloqueios constantes", "API Oficial — operação estável"],
    ["Volume diário", "Centenas de envios", "Até 100 mil envios por dia"],
    ["Custo", "Mensalidades caras", "Templates de utilidade baratíssimos"],
    ["Controle", "Refém de plataformas", "Sua própria plataforma"],
    ["Crescimento", "Manual e lento", "Automatizado e escalável"],
    ["Risco", "Perde número e grupo", "Estrutura segura e profissional"],
  ];
  return (
    <Section
      eyebrow="Por que é diferente"
      title={<>Métodos comuns x <span className="text-primary-dark">Grupo Explosivo</span></>}
      tint="dark"
    >
      <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/10">
        <div className="grid grid-cols-3 bg-white/5 text-xs sm:text-sm font-bold uppercase tracking-wider">
          <div className="p-4">Critério</div>
          <div className="p-4 text-white/60">Métodos comuns</div>
          <div className="p-4 text-primary">Grupo Explosivo</div>
        </div>
        {rows.map(([a, b, c], i) => (
          <div
            key={a}
            className={`grid grid-cols-3 text-sm ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
          >
            <div className="p-4 font-semibold">{a}</div>
            <div className="p-4 text-white/60">✕ {b}</div>
            <div className="p-4 text-primary font-semibold">✓ {c}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function WhatsIncluded() {
  const modules = [
    "Método Grupo Explosivo (do zero ao avançado)",
    "Estrutura completa da API Oficial",
    "Captação de leads qualificados",
    "Estratégias de crescimento de grupos",
    "Instalação da sua própria plataforma",
    "Treinamento prático de N8N",
    "Templates prontos para automação",
    "Fluxos premium para escala",
    "Organização e gestão da operação",
    "Atualizações futuras incluídas",
  ];
  return (
    <Section
      eyebrow="O que você recebe"
      title={<>Tudo o que está incluído no <span className="text-primary-dark">Grupo Explosivo</span></>}
    >
      <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-3">
        {modules.map((m) => (
          <div
            key={m}
            className="flex items-center gap-3 p-4 rounded-xl bg-background border border-primary/15"
          >
            <span className="flex-shrink-0 h-7 w-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
              ✓
            </span>
            <span className="text-[15px] font-semibold">{m}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Bonuses() {
  return (
    <Section eyebrow="Bônus exclusivos" title="Você ainda leva 2 bônus poderosos" tint="primary">
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {[
          {
            tag: "BÔNUS #1",
            t: "Treinamento Completo de N8N",
            d: "Instalação, configuração e estrutura profissional para automatizar tudo na sua operação.",
            v: "R$ 497",
          },
          {
            tag: "BÔNUS #2",
            t: "Templates Prontos do N8N",
            d: "Fluxos prontos para usar — configuração rápida e economia gigante de tempo.",
            v: "R$ 397",
          },
        ].map((b) => (
          <div
            key={b.tag}
            className="relative p-6 sm:p-8 rounded-3xl bg-background border-2 border-primary/30 shadow-xl"
          >
            <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-[11px] font-bold">
              🎁 {b.tag}
            </div>
            <h3 className="text-xl font-extrabold mt-2 mb-2">{b.t}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{b.d}</p>
            <p className="text-xs">
              Valor: <span className="line-through text-muted-foreground">{b.v}</span>{" "}
              <span className="font-bold text-primary-dark">GRÁTIS hoje</span>
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  const t = [
    { n: "Lucas M.", r: "Afiliado", d: "Em duas semanas já estava com grupos lotando todos os dias. Mudou meu jogo." },
    { n: "Carla S.", r: "Loja de roupas", d: "Parei de perder número. Hoje minha operação roda sozinha e só foco em vender." },
    { n: "Rafael T.", r: "Infoprodutor", d: "A parte de N8N sozinha já vale o investimento. Automatizei tudo." },
    { n: "Patrícia A.", r: "Negócio local", d: "Nunca tive tantos clientes vindo do WhatsApp. Recomendo demais." },
  ];
  return (
    <Section eyebrow="Resultados" title="Quem já aplica está colhendo" tint="muted">
      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {t.map((x) => (
          <div key={x.n} className="p-6 rounded-2xl bg-background border border-border">
            <div className="flex gap-1 mb-3 text-primary">{"★★★★★"}</div>
            <p className="text-[15px] leading-relaxed mb-4">"{x.d}"</p>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-primary-foreground font-bold">
                {x.n[0]}
              </div>
              <div>
                <p className="font-bold text-sm">{x.n}</p>
                <p className="text-xs text-muted-foreground">{x.r}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Offer() {
  return (
    <Section id="oferta" eyebrow="Oferta exclusiva" title={<>Acesso completo ao <span className="text-primary-dark">Grupo Explosivo</span></>} tint="primary">
      <div className="max-w-2xl mx-auto bg-background rounded-3xl border-2 border-primary shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-primary-dark text-primary-foreground text-center py-3 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider">
          🔥 Oferta por tempo limitado
        </div>
        <div className="p-6 sm:p-10">
          <ul className="space-y-2.5 mb-8">
            {[
              "Método Grupo Explosivo completo",
              "API Oficial do WhatsApp do zero",
              "Sua própria plataforma instalada",
              "Treinamento de N8N + Templates prontos",
              "Estratégias de captação e crescimento",
              "Atualizações futuras incluídas",
              "Suporte e comunidade",
            ].map((i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">✓</span>
                <span className="font-semibold text-[15px]">{i}</span>
              </li>
            ))}
          </ul>
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground">De <span className="line-through">R$ 1.997</span> por apenas</p>
            <div className="my-2">
              <span className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-br from-primary to-primary-dark bg-clip-text text-transparent">
                12x R$ 29
              </span>
            </div>
            <p className="text-sm text-muted-foreground">ou R$ 97 à vista</p>
          </div>
          <CTA label="QUERO GARANTIR MEU ACESSO AGORA" sub="✅ Acesso imediato após o pagamento" />
        </div>
      </div>
    </Section>
  );
}

function Guarantee() {
  return (
    <Section>
      <div className="max-w-3xl mx-auto rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
        <div className="flex-shrink-0 h-28 w-28 rounded-full bg-gradient-to-br from-primary to-primary-dark text-primary-foreground flex flex-col items-center justify-center shadow-xl">
          <span className="text-3xl font-extrabold leading-none">7</span>
          <span className="text-[10px] font-bold uppercase">dias</span>
        </div>
        <div>
          <h3 className="text-2xl font-extrabold mb-2">Garantia incondicional de 7 dias</h3>
          <p className="text-muted-foreground leading-relaxed">
            Teste o método sem risco. Se em até 7 dias você achar que não é para você, basta enviar
            um e-mail e <strong className="text-foreground">devolvemos 100% do seu investimento</strong>.
            O risco é todo nosso.
          </p>
        </div>
      </div>
    </Section>
  );
}

function Objections() {
  const items = [
    {
      q: "Funciona para o meu nicho?",
      a: "Sim. Se o seu público está no WhatsApp — e está — o método funciona. Shopee, Mercado Livre, lojas, negócios locais, prestadores, afiliados e infoprodutores já aplicam.",
    },
    {
      q: "Preciso ter conhecimento técnico?",
      a: "Não. O passo a passo é didático, mostramos cada clique. Você não precisa saber programar.",
    },
    {
      q: "Quanto tempo leva para ver resultado?",
      a: "Com poucos dias de aplicação já é possível lotar seus primeiros grupos. Mas você ganha o método inteiro para aplicar no seu ritmo.",
    },
    {
      q: "E se eu não gostar?",
      a: "Você tem 7 dias de garantia incondicional. Se não servir para você, devolvemos 100% do valor.",
    },
    {
      q: "Por que comprar agora?",
      a: "Porque a oferta atual é por tempo limitado e inclui bônus que valem mais que o próprio curso. Cada dia parado é dinheiro deixado na mesa.",
    },
  ];
  return (
    <Section
      eyebrow="Quebra de objeções"
      title={<>Ainda em dúvida? <span className="text-primary-dark">Vamos resolver agora</span></>}
      tint="muted"
    >
      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((i) => (
          <div key={i.q} className="p-6 rounded-2xl bg-background border border-border">
            <h3 className="font-bold text-lg mb-2">{i.q}</h3>
            <p className="text-muted-foreground leading-relaxed">{i.a}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Faq() {
  const faqs = [
    { q: "O acesso é vitalício?", a: "Você tem acesso completo ao método e às atualizações futuras." },
    { q: "Como recebo o acesso?", a: "Imediatamente após a confirmação do pagamento, por e-mail." },
    { q: "Posso assistir pelo celular?", a: "Sim. A plataforma funciona em qualquer dispositivo." },
    { q: "Preciso pagar mensalidade?", a: "Não. O pagamento é único, sem mensalidades." },
    { q: "A API Oficial é paga à parte?", a: "O uso da API segue a política do WhatsApp, com templates de utilidade extremamente baratos — explicamos tudo dentro do método." },
    { q: "Tem suporte?", a: "Sim, você tem suporte e acesso à comunidade para tirar dúvidas." },
  ];
  return (
    <Section eyebrow="FAQ" title="Perguntas frequentes">
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group p-5 rounded-2xl bg-secondary/40 border border-border open:border-primary/40 transition"
          >
            <summary className="cursor-pointer list-none flex items-center justify-between font-bold text-[15px]">
              {f.q}
              <span className="ml-4 text-primary-dark transition-transform group-open:rotate-45 text-xl">+</span>
            </summary>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}

function FinalCta() {
  return (
    <Section tint="dark">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider mb-6">
          Última chamada
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold leading-[1.1] mb-5 text-balance">
          Você pode continuar perdendo grupos…<br />
          ou começar a <span className="text-primary">lotar todos os dias</span>.
        </h2>
        <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto mb-8">
          A decisão de hoje define o tamanho da sua operação amanhã. Entre agora para o Grupo
          Explosivo e construa uma máquina previsível de leads no WhatsApp.
        </p>
        <CTA label="QUERO ENTRAR PARA O GRUPO EXPLOSIVO" sub="Garantia de 7 dias • Acesso imediato" />
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-10 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <img src={LOGO} alt="Grupo Explosivo" className="h-6 w-auto" />
          <span className="font-semibold">© {new Date().getFullYear()} Grupo Explosivo</span>
        </div>
        <p className="text-center sm:text-right max-w-md">
          Este produto não é afiliado, endossado ou patrocinado pelo WhatsApp ou Meta Platforms.
        </p>
      </div>
    </footer>
  );
}
