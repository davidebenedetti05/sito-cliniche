import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

<div className="relative">
        <div className="mx-auto max-w-6xl h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>

const FAQSection = () => {
  const faqs = [
    {
      question: "Quanto mi costa?",
      answer:
        "Il costo non è fisso per tutti: dipende dalla tua struttura e da cosa ti serve davvero. Non è un pacchetto standard, è proporzionato alla realtà del tuo hotel.",
    },
    {
      question:
        "Ho già un’agenzia che si occupa di marketing, perché dovrei lavorare con te?",
      answer:
        "Non vengo a sostituirli, ma mi occupo della parte che di solito viene trascurata, cioè trasformare richieste e contatti in prenotazioni dirette.",
    },
    {
      question: "Serve tanto tempo allo staff?",
      answer:
        "No. Gli strumenti sono pronti e semplici. Bastano pochi minuti in più per ogni richiesta, senza stravolgere la giornata.",
    },
    {
      question: "E se la mia reception non segue le istruzioni?",
      answer:
        "Gli script sono brevi, bastano poche frasi e 2 minuti in più per ogni richiesta.",
    },
    {
      question: "E se i risultati non arrivano?",
      answer:
        "Se non aumentano le prenotazioni dirette, faremo delle revisioni, se nemmeno dopo le revisioni raggiungeremo l’obiettivo, ti rimborso completamente.",
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-sky-50">
      <div className="w-full px-4 mx-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
              Domande frequenti
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition"
              >
                <AccordionTrigger className="px-6 py-4 text-left text-base lg:text-lg font-semibold text-neutral-900 hover:no-underline hover:text-blue-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-neutral-600 text-sm sm:text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
