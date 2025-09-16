import { Card, CardContent } from "@/components/ui/card";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Prenota la call gratuita",
      description:
        "Dopo la conferma, riceverai la Checklist Taglia Commissioni.",
    },
    {
      number: "2",
      title: "Discovery call",
      description:
        "Parliamo della tua attività, dei problemi attuali e di cosa vuoi ottenere. Serve a capire se ci sono i presupposti per lavorare insieme.",
    },
    {
      number: "3",
      title: "Strategy call",
      description:
        "Definiamo bene target, tono, obiettivi concreti e strategia. Su questa baserò il lavoro.",
    },
    {
      number: "4",
      title: "Consegna del lavoro",
      description:
        "Entro 5 giorni lavorativi dalla strategy call riceverai i materiali. Se necessario, ci sentiamo nei giorni successivi per ulteriori ottimizzazioni.",
    },
  ];

  return (
    <section className="relative isolate py-28 bg-neutral-50">
      <div className="relative w-full px-4 mx-auto max-w-6xl">
        <div className="text-center space-y-12 lg:space-y-16">
          {/* Titolo */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
              Cosa succede dopo che prenoti
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          {/* Step */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="relative bg-white text-neutral-900 border border-neutral-200
                           shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-300
                           transition-all duration-300 rounded-2xl"
              >
                <CardContent className="p-8 space-y-5 text-center">
                  {/* Cerchio step */}
                  <div className="mx-auto w-12 h-12 rounded-full grid place-items-center
                                  bg-blue-600 text-white font-semibold text-base shadow-sm">
                    {step.number}
                  </div>

                  {/* Titolo */}
                  <h3 className="font-semibold text-base lg:text-lg">
                    {step.title}
                  </h3>

                  {/* Testo */}
                  <p className="text-sm lg:text-base text-neutral-600 leading-relaxed max-w-prose mx-auto">
                    {step.description}
                  </p>
                </CardContent>

                {/* Linea collegamento tra step (solo desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-blue-300/70" />
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
