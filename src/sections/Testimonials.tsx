import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana C.",
    role: "Mãe de 2 filhos",
    initials: "AC",
    text: "Finalmente consigo organizar consultas, vacinas e notas escolares dos meus dois filhos sem perder nada. O KidzCare mudou minha rotina.",
  },
  {
    name: "Marcos R.",
    role: "Pai de 3 filhos",
    initials: "MR",
    text: "A agenda de custódia compartilhada salvou minha vida. Agora eu e a mãe das crianças temos tudo sincronizado, sem confusão.",
  },
  {
    name: "Prof. Juliana S.",
    role: "Professora",
    initials: "JS",
    text: "Meus alunos adoram as trilhas gamificadas do KidzEdu. A Tininha virou a mascote favorita da turma! Nunca vi tanto engajamento.",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          O que os pais estão dizendo
        </h2>
        <p className="text-teal-600 text-center mb-12">
          Famílias que já transformaram sua rotina
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-cream-50 rounded-2xl p-6 border border-teal-100/50">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-coral-400 text-coral-400" />
                ))}
              </div>
              <p className="text-teal-700 mb-6 text-sm leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-coral-100 text-coral-600 flex items-center justify-center font-semibold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-teal-900">{t.name}</p>
                  <p className="text-xs text-teal-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
