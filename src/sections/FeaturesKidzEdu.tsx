import { Route, Gamepad2, Award, BarChart3, School, BookOpen, Bot } from "lucide-react";

const features = [
  { icon: Route, title: "Trilhas de Aprendizado", desc: "Percursos gamificados por tema e idade" },
  { icon: Gamepad2, title: "Mini-jogos Educativos", desc: "Memória, quiz, arrastar e puzzle" },
  { icon: Award, title: "Conquistas e Badges", desc: "Sistema de recompensas motivacional" },
  { icon: BarChart3, title: "Leaderboard", desc: "Ranking entre amigos e turma" },
  { icon: School, title: "Painel do Professor", desc: "Acompanhamento de turmas e progresso" },
  { icon: BookOpen, title: "Conteúdo Escolar", desc: "Material alinhado ao currículo" },
  { icon: Bot, title: "Tininha (Mascote IA)", desc: "Assistente inteligente para crianças" },
];

export function FeaturesKidzEdu() {
  return (
    <section className="py-16 lg:py-24 bg-cream-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-start gap-12 lg:gap-16">
          <div className="lg:w-2/5 lg:sticky lg:top-24">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wide mb-4">
              KidzEdu
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Aprendizado que as crianças amam
            </h2>
            <p className="text-teal-600 text-lg">
              Trilhas interativas com jogos educativos que transformam o estudo em diversão.
              Perfeito para escolas e famílias.
            </p>
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                  <f.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-teal-900 mb-1">{f.title}</h3>
                  <p className="text-sm text-teal-600">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
