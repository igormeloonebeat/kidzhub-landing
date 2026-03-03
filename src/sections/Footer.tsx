import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/favicon.png" alt="KidzHub" className="w-8 h-8 rounded-lg" />
              <span className="font-bold text-lg">
                Kidz<span className="text-coral-300">Hub</span>
              </span>
            </div>
            <p className="text-teal-300 text-sm">
              Cuidado e educação dos seus filhos em um só lugar.
            </p>
          </div>

          {/* Produtos */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Produtos</h4>
            <ul className="space-y-2 text-sm text-teal-300">
              <li><a href="https://care.kidzhub.com.br" className="hover:text-white transition-colors">KidzCare</a></li>
              <li><a href="https://edu.kidzhub.com.br" className="hover:text-white transition-colors">KidzEdu</a></li>
              <li><a href="#precos" className="hover:text-white transition-colors">Preços</a></li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Suporte</h4>
            <ul className="space-y-2 text-sm text-teal-300">
              <li><a href="mailto:contato@kidzhub.com.br" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-teal-300">
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-teal-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-teal-400">
            &copy; 2026 KidzHub. Todos os direitos reservados.
          </p>
          <p className="text-sm text-teal-400 flex items-center gap-1">
            Feito com <Heart size={14} className="fill-coral-400 text-coral-400" /> para famílias brasileiras
          </p>
        </div>
      </div>
    </footer>
  );
}
