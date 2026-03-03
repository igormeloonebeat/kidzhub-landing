import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Decorative blobs */}
      <div className="absolute top-10 -left-32 w-96 h-96 bg-coral-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-coral-100 text-coral-600 text-sm font-medium mb-8">
          Plataforma completa para famílias
        </span>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
          <span className="text-gradient">Cuidado e Educação</span>
          <br />
          dos seus filhos em um só lugar
        </h1>

        <p className="text-lg sm:text-xl text-teal-600 max-w-2xl mx-auto mt-6">
          O KidzHub reúne gestão familiar e aprendizado gamificado em uma plataforma
          feita para pais, cuidadores e educadores.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="https://care.kidzhub.com.br"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-coral-400 text-white font-semibold hover:bg-coral-500 transition-colors"
          >
            Conhecer KidzCare <ArrowRight size={18} />
          </a>
          <a
            href="https://edu.kidzhub.com.br"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-teal-600 text-teal-700 font-semibold hover:bg-teal-50 transition-colors"
          >
            Conhecer KidzEdu <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
