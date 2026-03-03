import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "O que é o KidzHub?",
    a: "KidzHub é a plataforma que une o KidzCare (gestão familiar) e o KidzEdu (educação gamificada). Você pode usar um ou ambos os apps conforme sua necessidade.",
  },
  {
    q: "Preciso assinar os dois apps?",
    a: "Não. Cada app tem sua própria assinatura independente. Você pode usar apenas o KidzCare, apenas o KidzEdu, ou os dois juntos.",
  },
  {
    q: "Como funciona o período de teste?",
    a: "Ambos os apps oferecem 7 dias grátis. Você só será cobrado após o período de teste. Cancele a qualquer momento sem compromisso.",
  },
  {
    q: "Posso compartilhar com outros cuidadores?",
    a: "Sim! No KidzCare você pode convidar babás, avós e outros cuidadores com permissões personalizadas para cada módulo.",
  },
  {
    q: "O KidzEdu é indicado para qual faixa etária?",
    a: "O KidzEdu foi desenvolvido para crianças em idade escolar, com conteúdo adaptado e gamificado. Professores podem criar trilhas personalizadas para suas turmas.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Aceitamos cartão de crédito via Stripe. A cobrança é mensal e você pode cancelar a qualquer momento pelo painel da sua conta.",
  },
  {
    q: "Meus dados estão seguros?",
    a: "Sim. Usamos criptografia, autenticação JWT e armazenamento seguro na nuvem. Seus dados nunca são compartilhados com terceiros.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Perguntas frequentes
        </h2>

        <div className="divide-y divide-teal-100">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full py-5 text-left"
              >
                <span className="font-semibold text-teal-900 pr-4">{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-teal-400 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === i && (
                <p className="pb-5 text-teal-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
