import { Heart, Shield, GraduationCap, Sparkles, ArrowRight } from "lucide-react";

export function AppCards() {
  return (
    <section id="apps" className="py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Duas plataformas, uma família
        </h2>
        <p className="text-teal-600 text-center max-w-2xl mx-auto mb-12">
          Escolha a que faz sentido para você — ou use as duas juntas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* KidzCare */}
          <div className="rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-coral-50 to-coral-100 border border-coral-200/50 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-coral-200 flex items-center justify-center">
                <Heart className="text-coral-600" size={24} />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-coral-200 flex items-center justify-center">
                <Shield className="text-coral-600" size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-coral-800 mb-2">KidzCare</h3>
            <p className="text-lg text-coral-700 font-medium mb-3">Gestão familiar completa</p>
            <p className="text-teal-700 mb-6">
              Organize saúde, escola, atividades, finanças, viagens e custódia dos seus filhos.
              Convide babás, avós e cuidadores com permissões personalizadas.
            </p>
            <a
              href="https://care.kidzhub.com.br"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-coral-400 text-white font-semibold hover:bg-coral-500 transition-colors"
            >
              Começar agora <ArrowRight size={16} />
            </a>
          </div>

          {/* KidzEdu */}
          <div className="rounded-3xl p-8 lg:p-10 bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200/50 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-200 flex items-center justify-center">
                <GraduationCap className="text-teal-700" size={24} />
              </div>
              <div className="w-12 h-12 rounded-2xl bg-teal-200 flex items-center justify-center">
                <Sparkles className="text-teal-700" size={24} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-teal-800 mb-2">KidzEdu</h3>
            <p className="text-lg text-teal-700 font-medium mb-3">Aprendizado gamificado</p>
            <p className="text-teal-700 mb-6">
              Trilhas de aprendizado com mini-jogos educativos, conquistas e leaderboard.
              Conteúdo para escolas com painel do professor e mascote IA.
            </p>
            <a
              href="https://edu.kidzhub.com.br"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
            >
              Começar agora <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
