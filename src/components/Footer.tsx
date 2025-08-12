import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 lg:py-12">
      <div className="w-full px-4 mx-auto">
        <div className="max-w-[1500px] mx-auto text-center space-y-4 lg:space-y-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">
            Copywriter per Cliniche Dentali
          </h3>

          <div className="space-y-4">
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.instagram.com/davide_bnd_bsns/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a
                href="mailto:davide.benedetti05@gmail.com"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>

            <div className="border-t border-primary-foreground/20 pt-4 lg:pt-6">
              <p className="text-xs sm:text-sm text-primary-foreground/60">
                © 2025 Copywriter Cliniche Dentali. Tutti i diritti riservati.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
