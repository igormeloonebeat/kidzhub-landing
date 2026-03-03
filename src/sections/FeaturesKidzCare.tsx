import { Baby, Stethoscope, GraduationCap, Trophy, Wallet, Plane, Calendar, Users } from "lucide-react";

const features = [
  { icon: Baby, title: "Perfis de Crianças", desc: "Saúde, escola e atividades em um perfil completo" },
  { icon: Stethoscope, title: "Gestão de Saúde", desc: "Vacinas, consultas, medicamentos e alergias" },
  { icon: GraduationCap, title: "Escola", desc: "Notas, frequência, professores e comunicados" },
  { icon: Trophy, title: "Atividades", desc: "Extracurriculares, matrículas e horários" },
  { icon: Wallet, title: "Finanças Familiares", desc: "Gastos por filho e orçamento familiar" },
  { icon: Plane, title: "Viagens e Documentos", desc: "Roteiros, documentos e checklists" },
  { icon: Calendar, title: "Agenda e Custódia", desc: "Calendário compartilhado de guarda" },
  { icon: Users, title: "Equipe", desc: "Babás, avós e cuidadores com permissões" },
];

export function FeaturesKidzCare() {
  return (
    <section id="recursos" className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className="lg:w-2/5 lg:sticky lg:top-24">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-coral-100 text-coral-600 text-xs font-semibold uppercase tracking-wide mb-4">
              KidzCare
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tudo sobre seus filhos em um só lugar
            </h2>
            <p className="text-teal-600 text-lg">
              De consultas médicas a notas escolares, de atividades extracurriculares a finanças —
              o KidzCare centraliza todas as informações da sua família.
            </p>
          </div>

          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-coral-100 text-coral-500 flex items-center justify-center shrink-0">
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
