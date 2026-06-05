import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo, useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Grupo Explosivo — API Oficial do WhatsApp" },
      { name: "description", content: "Descubra como empresários estão lotando grupos de WhatsApp diariamente com a API Oficial." },
      { property: "og:title", content: "Grupo Explosivo — API Oficial do WhatsApp" },
      { property: "og:description", content: "Responda o quiz e descubra como crescer seus grupos com estrutura profissional." },
    ],
  }),
  component: QuizPage,
});

const LOGO = "https://i.postimg.cc/d17gcSTM/Gemini-Generated-Image-9jwevz9jwevz9jwe.png";
const CHECKOUT_URL = "#checkout";

type Step = {
  title: string;
  subtitle?: string;
  pains?: string[];
  wins?: string[];
  solution?: string;
  note?: string;
};

const steps: Step[] = [
  {
    title: "Você também enfrenta esses problemas?",
    pains: [
      "Seus grupos não crescem como deveriam?",
      "Você depende de divulgação manual?",
      "Seus concorrentes crescem mais rápido?",
    ],
    solution: "Descubra como empresários estão utilizando a API Oficial para lotar grupos diariamente.",
  },
  {
    title: "Seu WhatsApp vive levando bloqueios?",
    pains: ["Número bloqueado", "Conta banida", "Perda de todo trabalho realizado"],
    solution: "Aprenda a utilizar uma estrutura profissional baseada na API Oficial para trabalhar com muito mais estabilidade e escala.",
  },
  {
    title: "Está cansado de perder números e grupos?",
    pains: ["Troca constante de números", "Perda de grupos construídos", "Recomeçar do zero"],
    solution: "Conheça o método utilizado para estruturar uma operação muito mais segura e profissional.",
  },
  {
    title: "Tem dificuldade para encontrar pessoas realmente interessadas?",
    pains: ["Leads desqualificados", "Baixo engajamento", "Poucas vendas"],
    solution: "Aprenda a encontrar pessoas muito mais propensas a entrar e participar dos seus grupos.",
  },
  {
    title: "Seus convites têm baixa aceitação?",
    pains: ["Muitas mensagens enviadas", "Poucas entradas", "Baixo crescimento"],
    solution: "Descubra estratégias para aumentar significativamente a entrada de novos participantes.",
  },
  {
    title: "Escalar seus grupos parece impossível?",
    pains: ["Crescimento lento", "Muito trabalho manual", "Falta de automação"],
    solution: "Conheça processos que permitem crescimento muito mais rápido e organizado.",
  },
  {
    title: "Dificuldade para aprovar templates?",
    pains: ["Reprovações constantes", "Tempo perdido", "Campanhas atrasadas"],
    solution: "Aprenda técnicas que aumentam suas chances de aprovação.",
  },
  {
    title: "Seu custo de aquisição está alto?",
    pains: ["Campanhas caras", "Pouco retorno", "Baixa margem"],
    solution: "Aprenda estratégias para otimizar seus resultados.",
  },
  {
    title: "Seu grupo fica parado?",
    pains: ["Pouca interação", "Pouco movimento", "Poucas oportunidades"],
    solution: "Aprenda como manter grupos ativos e engajados.",
  },
  {
    title: "Quem pode aplicar esse método?",
    wins: ["Shopee", "Mercado Livre", "Lojas de roupas", "Negócios locais", "Prestadores de serviços", "Afiliados", "Infoprodutores"],
    note: "Se você precisa atrair pessoas para grupos, este método pode ajudar.",
  },
  {
    title: "O que você vai aprender?",
    wins: ["Estrutura da API Oficial", "Captação de leads", "Crescimento de grupos", "Templates", "Automações", "Escala operacional", "Organização da operação"],
  },
  {
    title: "Cansado de pagar plataformas caras?",
    pains: ["Mensalidades altas", "Limitações", "Dependência de terceiros"],
    solution: "Aprenda a construir sua própria estrutura.",
  },
  {
    title: "Tenha sua própria plataforma",
    wins: ["Controle total", "Mais liberdade", "Estrutura própria", "Possibilidade de prestar serviços"],
    note: "Você não ficará dependente de ferramentas alugadas.",
  },
  {
    title: "🎁 BÔNUS #1",
    subtitle: "Treinamento Completo de N8N",
    wins: ["Instalação", "Configuração", "Automações", "Estrutura profissional"],
  },
  {
    title: "🎁 BÔNUS #2",
    subtitle: "Templates Prontos do N8N",
    wins: ["Fluxos prontos", "Configuração rápida", "Economia de tempo"],
  },
  {
    title: "🎁 BÔNUS #3",
    subtitle: "Fluxos Premium",
    note: "Receba modelos avançados que aceleram a implementação da sua estrutura.",
  },
  {
    title: "Resumo do que você recebe",
    wins: [
      "Método Grupo Explosivo",
      "API Oficial",
      "Captação de Leads",
      "Crescimento de Grupos",
      "Instalação da Plataforma",
      "N8N",
      "Templates",
      "Fluxos Premium",
      "Atualizações futuras",
    ],
  },
];

const TOTAL = steps.length + 1; // +1 for VSL/final

function QuizPage() {
  // index 0 = intro, 1..18 = steps (17 quiz + 1 final VSL)
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);

  const isIntro = index === 0;
  const isFinal = index === TOTAL + 1; // final offer screen
  const stepIndex = index - 1; // for steps array
  const currentStepNumber = Math.min(index, TOTAL);

  const progress = useMemo(() => {
    if (isIntro) return 0;
    return Math.min(100, (currentStepNumber / TOTAL) * 100);
  }, [isIntro, currentStepNumber]);

  const next = () => {
    setLoading(true);
    setTimeout(() => {
      setIndex((i) => i + 1);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, 380);
  };

  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col">
      {/* Top bar */}
      {!isIntro && (
        <header className="sticky top-0 z-30 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="max-w-md mx-auto px-4 pt-3 pb-2">
            <div className="flex items-center justify-between mb-2">
              <img src={LOGO} alt="Grupo Explosivo" className="h-8 w-auto" />
              <span className="text-xs font-semibold text-muted-foreground tabular-nums">
                Etapa {currentStepNumber} de {TOTAL}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, var(--primary) 0%, var(--primary-dark) 100%)",
                }}
              />
            </div>
          </div>
        </header>
      )}

      {/* Body */}
      <main className="flex-1 flex flex-col">
        {loading ? (
          <Loader />
        ) : isIntro ? (
          <Intro onStart={next} />
        ) : index <= steps.length ? (
          <StepView key={index} step={steps[stepIndex]} onNext={next} />
        ) : index === steps.length + 1 ? (
          <VslStep onNext={next} />
        ) : (
          <FinalOffer />
        )}
      </main>
    </div>
  );
}

function Loader() {
  return (
    <div className="flex-1 flex items-center justify-center px-6">
      <div className="flex flex-col items-center gap-4 animate-fade-up">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-full border-4 border-secondary" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
        </div>
        <p className="text-sm text-muted-foreground font-medium">Carregando...</p>
      </div>
    </div>
  );
}

function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex-1 flex flex-col px-6 pt-10 pb-28 max-w-md mx-auto w-full">
      <div className="flex-1 flex flex-col items-center justify-center text-center animate-fade-up">
        <img src={LOGO} alt="Grupo Explosivo" className="h-28 w-auto mb-8 drop-shadow-xl" />
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-5">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          QUIZ EXCLUSIVO
        </div>
        <h1 className="text-[26px] leading-[1.15] font-extrabold tracking-tight mb-4 text-balance">
          Descubra por que milhares de pessoas <span className="text-primary-dark">não conseguem crescer</span> seus grupos de WhatsApp
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          Responda rapidamente e descubra como a <strong className="text-foreground">API Oficial</strong> está mudando o jogo.
        </p>
      </div>
      <FixedCta label="Começar Agora →" onClick={onStart} />
    </div>
  );
}

function StepView({ step, onNext }: { step: Step; onNext: () => void }) {
  return (
    <div className="flex-1 flex flex-col px-5 pt-6 pb-28 max-w-md mx-auto w-full">
      <div className="flex-1 flex flex-col animate-fade-up">
        <h2 className="text-[22px] leading-tight font-extrabold tracking-tight text-balance mb-2">
          {step.title}
        </h2>
        {step.subtitle && (
          <p className="text-lg font-semibold text-primary-dark mb-4">{step.subtitle}</p>
        )}

        {step.pains && (
          <ul className="space-y-3 mt-4">
            {step.pains.map((p) => (
              <li key={p} className="flex items-start gap-3 p-3.5 rounded-xl bg-destructive/5 border border-destructive/15">
                <span className="text-lg leading-none mt-0.5">❌</span>
                <span className="text-[15px] font-medium leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        )}

        {step.wins && (
          <ul className="space-y-2.5 mt-4">
            {step.wins.map((w) => (
              <li key={w} className="flex items-center gap-3 p-3.5 rounded-xl bg-accent border border-primary/15">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">✓</span>
                <span className="text-[15px] font-semibold leading-snug">{w}</span>
              </li>
            ))}
          </ul>
        )}

        {step.solution && (
          <div className="mt-5 p-4 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
            <p className="text-[15px] font-semibold leading-snug">
              <span className="text-primary-dark">✅</span> {step.solution}
            </p>
          </div>
        )}

        {step.note && !step.solution && (
          <p className="mt-5 text-[15px] text-muted-foreground italic leading-snug">
            "{step.note}"
          </p>
        )}
      </div>
      <FixedCta label="Continuar →" onClick={onNext} />
    </div>
  );
}

function VslStep({ onNext }: { onNext: () => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState({ c: 0, d: 0 });
  const [showCta, setShowCta] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => {
      setTime({ c: v.currentTime, d: v.duration || 0 });
      if (v.duration) setProgress((v.currentTime / v.duration) * 100);
      // reveal CTA at 50% of video (or after 2 min)
      if (v.duration && v.currentTime / v.duration > 0.5) setShowCta(true);
      else if (v.currentTime > 120) setShowCta(true);
    };
    v.addEventListener("timeupdate", onTime);
    v.play().catch(() => {});
    return () => v.removeEventListener("timeupdate", onTime);
  }, []);

  const fmt = (s: number) => {
    if (!s || !isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const r = Math.floor(s % 60);
    return `${m}:${r.toString().padStart(2, "0")}`;
  };

  const unmute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.play().catch(() => {});
    setMuted(false);
  };

  return (
    <div className="flex-1 flex flex-col px-4 pt-4 pb-28 max-w-md mx-auto w-full">
      <div className="animate-fade-up">
        <h2 className="text-[22px] leading-tight font-extrabold tracking-tight text-center mb-2">
          Veja como o método funciona na prática
        </h2>
        <p className="text-sm text-muted-foreground text-center mb-4">
          Assista o vídeo até o final para liberar sua oferta exclusiva
        </p>

        <div className="relative w-full rounded-2xl overflow-hidden bg-black shadow-2xl aspect-[9/16]">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="https://cdn.coverr.co/videos/coverr-typing-on-a-laptop-2584/1080p.mp4"
            playsInline
            autoPlay
            muted={muted}
            preload="auto"
          />
          {muted && (
            <button
              onClick={unmute}
              className="absolute inset-0 m-auto w-32 h-32 rounded-full bg-destructive text-destructive-foreground border-4 border-destructive/40 shadow-2xl flex flex-col items-center justify-center font-extrabold text-[11px] uppercase tracking-wide animate-pulse-glow"
            >
              <span className="text-2xl mb-1">🔊</span>
              CLIQUE PARA<br />ATIVAR O SOM
            </button>
          )}
          <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
            <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${progress}%` }} />
            </div>
            <div className="flex items-center justify-between text-white text-[11px] tabular-nums">
              <span>{fmt(time.c)} / {fmt(time.d)}</span>
              <span className="opacity-70">Reprodução protegida</span>
            </div>
          </div>
        </div>

        <div className="mt-5 min-h-[64px]">
          {showCta ? (
            <button
              onClick={onNext}
              className="btn-primary btn-primary-hover animate-pulse-glow text-base"
            >
              QUERO GARANTIR AGORA →
            </button>
          ) : (
            <p className="text-center text-xs text-muted-foreground">
              ⏳ Aguarde — botão liberado durante o vídeo
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function FinalOffer() {
  return (
    <div className="flex-1 flex flex-col px-5 pt-6 pb-28 max-w-md mx-auto w-full">
      <div className="flex-1 flex flex-col animate-fade-up">
        <div className="inline-flex self-center items-center gap-2 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold mb-4">
          🔥 OFERTA EXCLUSIVA LIBERADA
        </div>
        <h2 className="text-[26px] leading-[1.15] font-extrabold tracking-tight text-balance text-center mb-5">
          Você está pronto para transformar seus grupos em uma <span className="text-primary-dark">máquina de crescimento?</span>
        </h2>

        <ul className="space-y-2.5 mb-6">
          {["Estrutura profissional", "Automação", "Crescimento acelerado", "Menos dependência de terceiros"].map((w) => (
            <li key={w} className="flex items-center gap-3 p-3.5 rounded-xl bg-accent border border-primary/15">
              <span className="flex-shrink-0 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">✓</span>
              <span className="text-[15px] font-semibold">{w}</span>
            </li>
          ))}
        </ul>

        <div className="p-4 rounded-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 text-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-1">Acesso vitalício</p>
          <p className="text-sm text-muted-foreground">🛡️ Garantia incondicional de 7 dias</p>
        </div>
      </div>

      <div className="fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-md border-t border-border">
        <div className="max-w-md mx-auto px-4 py-3" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
          <a
            href={CHECKOUT_URL}
            className="btn-primary btn-primary-hover animate-pulse-glow block text-center text-[15px] leading-tight"
          >
            QUERO ENTRAR PARA O<br />GRUPO EXPLOSIVO →
          </a>
        </div>
      </div>
    </div>
  );
}

function FixedCta({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-md border-t border-border">
      <div className="max-w-md mx-auto px-4 py-3" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        <button onClick={onClick} className="btn-primary btn-primary-hover">
          {label}
        </button>
      </div>
    </div>
  );
}
