import { Card, CardContent } from "@/components/ui/card";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Prenota la call e ricevi la checklist",
      description: "Compila il modulo e fissiamo la prima chiamata gratuita. Dopo la prenotazione ti invierò la Checklist Anti-Pazienti Fuori Target.",
    },
    {
      number: "2",
      title: "Discovery call",
      description:
        "Parliamo della tua attività, dei problemi con i testi attuali e di cosa vuoi ottenere. Serve a capire se ci sono i presupposti per lavorare insieme.",
    },
    {
      number: "3",
      title: "Strategy call",
      description:
        "Definiamo bene target, tono, obiettivi concreti e strategia. Su questa base scriverò ogni testo.",
    },
    {
      number: "4",
      title: "Sviluppo del copy",
      description:
        "Entro 5 giorni lavorativi dalla strategy call riceverai il tuo copy. Se serve, ci sentiamo nei giorni successivi per eventuali aggiustamenti e ottimizzazioni.",
    },
  ];

  return (
    <section className="py-10 lg:py-20 bg-muted/30">
      <div className="w-full px-4 mx-auto">
        <div className="text-center space-y-8 lg:space-y-16 max-w-[1500px] mx-auto">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-foreground">
              Come lavoreremo
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="border-none shadow-card hover:shadow-elegant transition-shadow relative"
              >
                <CardContent className="p-4 sm:p-5 lg:p-6 space-y-4 text-center">
                  <div className="bg-gradient-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto">
                    {step.number}
                  </div>

                  <h3 className="font-bold text-sm sm:text-base lg:text-lg text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-muted"></div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
