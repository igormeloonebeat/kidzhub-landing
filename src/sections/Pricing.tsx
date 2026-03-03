import { Check } from "lucide-react";

const plans = [
  {
    name: "KidzCare",
    badge: "care",
    monthlyPrice: "99,90",
    annualPrice: "58,25",
    annualTotal: "699",
    color: "coral",
    href: "https://care.kidzhub.com.br/assinatura",
    features: [
      "Perfis ilimitados de filhos",
      "Módulo de Saúde completo",
      "Módulo Escolar completo",
      "Gestão de Atividades",
      "Controle Financeiro familiar",
      "Planejamento de Viagens",
      "Agenda e Custódia compartilhada",
      "Gestão de Equipe",
    ],
  },
  {
    name: "KidzEdu",
    badge: "edu",
    monthlyPrice: "99,90",
    annualPrice: "58,25",
    annualTotal: "699",
    color: "teal",
    href: "https://edu.kidzhub.com.br/assinatura",
    features: [
      "Trilhas gamificadas ilimitadas",
      "Mini-jogos educativos",
      "Sistema de conquistas e badges",
      "Leaderboard e ranking",
      "Painel do professor",
      "Conteúdo para escolas",
      "Mascote IA Tininha",
    ],
  },
];

export function Pricing() {
  return (
    <section id="precos" className="py-16 lg:py-24 bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Planos simples e acessíveis
        </h2>
        <p className="text-teal-600 text-center mb-12">
          Comece com 7 dias grátis. Cancele quando quiser.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan) => {
            const isCoral = plan.color === "coral";
            return (
              <div
                key={plan.name}
                className={`rounded-2xl bg-white border-2 ${isCoral ? "border-coral-200" : "border-teal-200"} p-8 hover:shadow-lg transition-shadow`}
              >
                <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-4 ${isCoral ? "bg-coral-100 text-coral-600" : "bg-teal-100 text-teal-700"}`}>
                  {plan.name}
                </div>

                {/* Annual price — highlighted */}
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-teal-900">R$ {plan.annualPrice}</span>
                  <span className="text-teal-500">/mês</span>
                </div>
                <p className="text-xs text-teal-500 mb-1">
                  no plano anual (R$ {plan.annualTotal}/ano)
                </p>

                <div className="flex items-center gap-2 mb-1">
                  <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${isCoral ? "bg-coral-50 text-coral-600" : "bg-teal-50 text-teal-600"}`}>
                    Economia de 42%
                  </span>
                  <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${isCoral ? "bg-coral-50 text-coral-600" : "bg-teal-50 text-teal-600"}`}>
                    7 dias grátis
                  </span>
                </div>

                <p className="text-sm text-teal-500 mb-6">
                  ou R$ {plan.monthlyPrice}/mês no mensal
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={16} className={`mt-0.5 shrink-0 ${isCoral ? "text-coral-400" : "text-teal-500"}`} />
                      <span className="text-sm text-teal-700">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.href}
                  className={`block text-center px-6 py-3 rounded-full font-semibold transition-colors ${isCoral ? "bg-coral-400 text-white hover:bg-coral-500" : "bg-teal-600 text-white hover:bg-teal-700"}`}
                >
                  Começar teste grátis
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
