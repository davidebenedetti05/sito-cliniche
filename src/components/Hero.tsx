import { Button } from "@/components/ui/button";
import copywriterPhoto from "@/assets/foto-sito-1.png";
import copywriterphoto from "@/assets/foto-sito-3.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-hero pt-6 lg:pt-10 pb-12 lg:pb-16">
        <div className="w-full px-4 mx-auto">
          {/* Top Navigation */}
          <div className="flex gap-4 mb-7">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/chi-sono")}
              className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Chi sono
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16">
            {/* Text block */}
            <div className="flex-1 space-y-6">
              <h1 className="text-5xl lg:text-6xl font-black text-foreground leading-tight">
                Copywriter per cliniche dentali{" "}
                <span className="text-primary">indipendenti</span>
              </h1>

              <p className="text-2xl text-muted-foreground max-w-2xl">
                In 7 giorni  migliora la qualità delle prime visite e riduci il tempo speso in spiegazioni
              </p>

              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-elegant"
              >
                Ricevi richieste da pazienti veramente interessati
              </Button>

              {/* Immagine mobile */}
              <div className="block lg:hidden mt-10 mb-10">
                <img
                  src={copywriterPhoto}
                  alt="Copywriter per cliniche dentali"
                  className="rounded-full shadow-elegant w-60 h-60 mx-auto object-cover"
                />
              </div>
            </div>

            {/* Immagine desktop */}
            <div className="hidden lg:block flex-shrink-0 pr-20 -mt-6">
              <img
                src={copywriterPhoto}
                alt="Copywriter per cliniche dentali"
                className="rounded-full shadow-elegant w-72 h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-background pt-16 pb-16">
        <div className="w-full px-4 mx-auto space-y-12 lg:space-y-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="text-lg text-muted-foreground space-y-8 flex-1">
              <p className="text-xl leading-relaxed">
                Hai provato a fare <strong className="text-foreground font-semibold">pubblicità</strong> o a rifare il sito della tua clinica,
                ma ogni messaggio che arriva, invece di darti entusiasmo, ti lascia <strong className="text-foreground font-semibold">dubbi</strong>:
              </p>

              <div className="bg-muted/30 p-6 rounded-xl shadow-md border-l-4 border-primary space-y-3">
                <ul className="text-xl list-disc list-inside space-y-2 text-foreground font-medium">
                  <li>Chi è?</li>
                  <li>Cosa vuole?</li>
                  <li>Perché sembra che non abbia capito nulla?</li>
                </ul>
              </div>

              <p className="text-xl leading-relaxed">
                La segretaria gestisce contatti <strong className="text-foreground font-semibold">incerti</strong> e la lista delle prime visite 
                resta uguale da settimane. Ti chiedi se tutto questo marketing serva davvero a qualcosa.
              </p>

              {/* Immagine mobile */}
              <div className="block lg:hidden mt-10 mb-10">
                <img
                  src={copywriterphoto}
                  alt="Copywriter specializzato in cliniche dentali"
                  className="rounded-2xl shadow-elegant w-64 h-64 mx-auto object-cover"
                />
              </div>
            </div>

            {/* Immagine desktop */}
            <div className="hidden lg:block flex-shrink-0">
              <img
                src={copywriterphoto}
                alt="Copywriter specializzato in cliniche dentali"
                className="rounded-2xl shadow-elegant w-80 h-80 object-cover"
              />
            </div>
          </div>

          {/* CTA video finale */}
          <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 lg:p-8 text-center shadow-elegant space-y-4">
            <p className="text-2xl text-foreground font-semibold leading-relaxed">
In meno di un minuto ti mostro cosa ti impedisce di attirare pazienti davvero interessati.            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
