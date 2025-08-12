import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "La mia segretaria non sa fare marketing…",
      answer: "Non importa. Riceve messaggi già pronti: deve solo copiarli e inviarli.",
    },
    {
      question: "Se ho già avuto brutte esperienze con agenzie?",
      answer:
        "Lo capisco. Qui scrivo tutto io e se non raggiungiamo gli obiettivi prefissati, ci sentiamo per analizzare insieme cosa non ha funzionato.",
    },
    {
      question: "Non ho tempo per seguire un altro fornitore.",
      answer:
        "Bastano due call. Alla parte operativa penso io. Riceverai i testi pronti entro 5 giorni lavorativi, con tutto il necessario.",
    },
    {
      question: "Se ho già testi buoni, perché dovrei rifarli?",
      answer:
        "Anche testi scritti bene possono non attirare i pazienti giusti. Non rifaccio tutto: ottimizzo ciò che già funziona, così i tuoi messaggi parlano solo a chi condivide il tuo approccio.",
    },
    {
      question: "E se il testo non mi rappresenta davvero?",
      answer:
        "Lavoriamo insieme su tono, esempi e obiettivi. Prima di scrivere, capisco come parli con i tuoi pazienti.",
    },
  ];

  return (
    <section className="py-10 lg:py-16 bg-muted/30">
      <div className="w-full px-4 mx-auto">
        <div className="max-w-[1500px] mx-auto space-y-6 lg:space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              FAQ
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <Accordion type="single" collapsible className="space-y-4 lg:space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-primary/10 rounded-xl px-4 sm:px-6 lg:px-8 py-3 lg:py-4 shadow-elegant hover:shadow-2xl transition-all duration-300 hover:border-primary/20"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base lg:text-lg font-bold text-foreground hover:no-underline py-4 lg:py-6 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 pb-6 text-sm sm:text-base leading-relaxed">
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
