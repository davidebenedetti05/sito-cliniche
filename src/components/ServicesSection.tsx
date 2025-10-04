import { Card, CardContent } from "@/components/ui/card";
import { Globe, Mail, MessageCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Copywriting",
      description:
        "Testi per sito e campagne che trasformano le visite in prenotazioni.Testi per sito e campagne che trasformano le visite in prenotazioni.",
      icon: Globe,
    },
    {
      title: "Presenza social",
      description:
        "Post e stories che tengono vivo il legame con chi ti segue e rafforzano la riconoscibilità del brand.",
      icon: MessageCircle,
    },
    {
      title: "Email marketing",
      description:
        "Sequenze automatiche per recuperare preventivi, stimolare extra e far tornare gli ospiti.",
      icon: Mail,
    },
  ];

  return (
    <>
      {/* USP Section */}
      <section className="py-16 md:py-28 bg-neutral-100">
        <div className="max-w-4xl mx-auto px-4 space-y-10">
          {/* Titolo */}
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
            Non voglio che il tuo hotel dipenda da me né dagli intermediari
          </h2>

          {/* Box copy */}
          <div className="rounded-2xl border border-blue-100 bg-white p-5 md:p-6 sm:md:p-8 shadow-lg">
            <div className="space-y-6 text-base sm:text-lg leading-relaxed text-neutral-800">
              <p>
                Ti consegno un sistema pratico, basato su un’analisi
                del percorso dei clienti che parte dal{" "}
                <strong className="font-semibold text-neutral-900">primo</strong>{" "}
                contatto, fino alla{" "}
                <strong className="font-semibold text-neutral-900">prenotazione</strong>.
                Individuo dove si fermano e miglioro i punti deboli.
              </p>
              <p>
                Questo approccio ti consentirà di avere più
                prenotazioni dirette{" "}
                <strong className="font-semibold text-neutral-900">stabili</strong>,
                ospitando anche chi lavora in smart working, coppie che cercano un weekend
                breve o ospiti attratti dagli eventi locali.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="relative">
        <div className="mx-auto max-w-6xl h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>
      {/* Services Section */}
      <section className="py-16 md:py-28 bg-sky-50">
        <div className="w-full max-w-6xl px-4 mx-auto space-y-8 md:space-y-12">
          <div className="text-center space-y-6 md:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
              Percorso prenotazioni dirette
            </h2>

            <div
              className="
                grid gap-8
                justify-items-center
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const isLastOdd =
                  services.length % 2 === 1 && index === services.length - 1;

                return (
                  <Card
                    key={index}
                    className={[
                      "w-full max-w-md border border-neutral-200 bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 rounded-2xl",
                      isLastOdd ? "sm:col-span-2 lg:col-span-1" : "",
                    ].join(" ")}
                  >
                    <CardContent className="p-5 md:p-6 lg:p-8 space-y-3 md:space-y-4 text-center">
                      <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full grid place-items-center bg-blue-100">
                        <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
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
      <div className="relative">
        <div className="mx-auto max-w-6xl h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>
    </>
  );
};

export default ServicesSection;
