import { Button } from "@/components/ui/button";
import copywriterPhoto from "@/assets/foto-sito-2.png";
import { useNavigate } from "react-router-dom";

const ChiSono = () => {
  const navigate = useNavigate();

  const scrollToForm = () => {
    navigate('/');
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation back */}
      <div className="mt-6 lg:mt-8 px-4">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="text-muted-foreground hover:text-foreground"
        >
          ← Torna alla homepage
        </Button>
      </div>

      {/* Main content */}
      <section className="py-10 lg:py-16">
        <div className="w-full px-4 mx-auto">
          <div className="w-full">
            {/* Titolo */}
            <div className="text-center mb-12 lg:mb-16 px-2">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-6 break-words">
                Come lavoro (e perché lo faccio così)
              </h1>
              <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            </div>

            {/* Contenuto */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
              {/* Testo */}
              <div className="flex-1 space-y-6 text-sm sm:text-base lg:text-lg text-muted-foreground break-words text-wrap w-full">
                <p className="leading-relaxed">
                  Ogni giorno lavoro per essere la persona giusta per la tua clinica: 
                  uno che ti <strong className="text-foreground font-semibold">ascolta</strong>, 
                  scrive testi strategici e fa arrivare pazienti già convinti di essere nel posto giusto.
                </p>

                <p className="leading-relaxed">
                  Ho scelto di specializzarmi nel copywriting per cliniche dentali con un’idea molto chiara: 
                  scrivere testi che migliorino la <strong className="text-foreground font-semibold">selezione</strong> dei pazienti 
                  e rendano il lavoro più <strong className="text-foreground font-semibold">semplice</strong> per te e per il tuo team.
                </p>

                <p className="font-medium text-foreground bg-primary/5 p-4 lg:p-6 rounded-lg border-l-4 border-primary leading-relaxed">
                  Se scrivo per la tua clinica, voglio portarti pazienti che sanno già <strong className="font-bold">perché</strong> ti hanno scelto.
                </p>

                <div className="pt-4 lg:pt-6">
                  <Button
                    onClick={scrollToForm}
                    size="lg"
                    className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-elegant w-full sm:w-auto"
                  >
                    Scrivimi prima che lo faccia un tuo competitor
                  </Button>
                </div>
              </div>

              {/* Immagine */}
              <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto -mt-6 lg:-mt-12">
                <img
                  src={copywriterPhoto}
                  alt="Copywriter"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover border-4 border-primary/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChiSono;
