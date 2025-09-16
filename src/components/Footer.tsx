import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 lg:py-16 bg-white">
      <div className="w-full px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          {/* Titolo */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900">
            Davide Benedetti
          </h3>
          <div className="w-24 h-1 mx-auto rounded-full bg-blue-600" />

          {/* Social icons */}
          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/davide_bnd_bsns/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="mailto:db@davidebenedetti.it"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Legal */}
          <div className="border-t border-neutral-300 pt-4">
            <p className="text-xs sm:text-sm text-neutral-600">
              © 2025 Davide Benedetti – Tutti i diritti riservati
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
