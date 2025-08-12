import { Card, CardContent } from "@/components/ui/card";
import { Globe, Mail, Video, MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Pagina del sito",
      description:
        "Il copy parlerà davvero al tuo paziente ideale: capirà subito se è nel posto giusto.",
      icon: Globe,
    },
    {
      title: "Email di follow-up",
      description:
        "Ti preparo 2–3 email, con lo scopo di non perdere pazienti interessati solo perché non hanno risposto al primo messaggio.",
      icon: Mail,
    },
    {
      title: "Script per video",
      description:
        "Ti mando 2–3 script e descrizioni per video da pubblicare sui social. Se funziona, puoi usarlo anche come annuncio sponsorizzato.",
      icon: Video,
    },
    {
      title: "Messaggi per la segretaria",
      description:
        "Risposte già pronte da copiare e incollare, scritte per funzionare su qualsiasi canale: WhatsApp, email o altro. Ogni nuovo contatto riceve subito una risposta chiara, senza attese o errori.",
      icon: MessageCircle,
    },
  ];

  return (
    <>
      {/* Il mio approccio (USP) */}
      <section className="py-10 lg:py-20 bg-muted/10">
        <div className="w-full px-4 mx-auto">
          <div className="text-center space-y-6 lg:space-y-12 max-w-[1400px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Perché non lavoro come gli altri
            </h2>

            <div className="bg-card rounded-lg p-4 sm:p-6 lg:p-10 w-full shadow-elegant border-2 border-primary/10">
              <div className="space-y-4 sm:space-y-6 lg:space-y-8 text-sm sm:text-base lg:text-lg text-muted-foreground">
                <p className="leading-relaxed">
                  Ti consegno testi che attirano persone già informate e convinte del tuo approccio, così la
                  segretaria non deve più{" "}
                  <strong className="text-foreground font-semibold">inventare</strong>{" "}
                  cosa scrivere e tu smetti di ricevere messaggi vaghi alle 21:00.
                </p>
                <p className="leading-relaxed">
                  Il mio lavoro non è solo riempirti l&apos;agenda, ma è farti arrivare pazienti veri che non
                  chiedono solo il prezzo e non ti costringono a spiegare{" "}
                  <strong className="text-foreground font-semibold">tutto</strong> da zero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Servizi */}
      <section className="py-10 lg:py-20 bg-primary/5">
        <div className="w-full px-4 mx-auto">
          <div className="text-center space-y-6 lg:space-y-12 max-w-[1400px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Quali copy riceverai
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8 w-full">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={index}
                    className="border-2 border-primary/10 shadow-elegant hover:shadow-2xl transition-all duration-300 bg-card hover:bg-primary/5 transform hover:-translate-y-1"
                  >
                    <CardContent className="p-6 lg:p-10 space-y-4 text-center">
                      <div className="bg-gradient-primary rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto shadow-elegant">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-primary-foreground" />
                      </div>
                      <div className="space-y-2 sm:space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold text-primary">
                          {service.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
