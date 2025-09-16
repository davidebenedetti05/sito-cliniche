import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck, Users } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hotelName: "",
    cityArea: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Richiesta call gratuita - ${formData.hotelName || "Hotel senza nome"}`;
    const body = `Nome: ${formData.name}
Email: ${formData.email}
Hotel: ${formData.hotelName}
Città/Zona: ${formData.cityArea}
Messaggio: ${formData.message}`;

    const mailtoLink = `mailto:db@davidebenedetti.it?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);

    toast({
      title: "Richiesta inviata!",
      description: "Ti contatterò entro 24 ore per programmare la call conoscitiva gratuita.",
    });

    setFormData({
      name: "",
      email: "",
      hotelName: "",
      cityArea: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="relative">
        <div className="mx-auto max-w-6xl h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>

      {/* ===================== GARANZIA & SCARSITÀ ===================== */}
      <section className="py-16 md:py-28 bg-blue-50">
        <div className="w-full max-w-6xl mx-auto px-4 text-center space-y-8 md:space-y-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
            Tieni alta la qualità, senza correre rischi
          </h2>

          <div className="grid gap-8 sm:grid-cols-2">
            {/* Card Garanzia */}
            <Card className="rounded-2xl border border-blue-200 shadow-lg hover:shadow-blue-300/40 transition">
              <CardContent className="p-5 md:p-8 space-y-4 md:space-y-5 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white grid place-items-center shadow-md">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Risultati o rimborso</h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Se, anche dopo le revisioni concordate, non otteniamo i risultati prefissati, ti restituisco
                  l’<strong className="text-neutral-900 font-semibold">intero</strong> importo. In ogni caso, tutti i materiali restano tuoi.
                </p>
              </CardContent>
            </Card>

            {/* Card Esclusività */}
            <Card className="rounded-2xl border border-blue-200 shadow-lg hover:shadow-blue-300/40 transition">
              <CardContent className="p-5 md:p-8 space-y-4 md:space-y-5 text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-blue-600 text-white grid place-items-center shadow-md">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-neutral-900">Posti limitati</h3>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  Ogni mese seguo massimo <strong className="text-neutral-900 font-semibold">3 hotel</strong> perché voglio focalizzarmi
                  principalmente sul tuo problema, in modo che venga risolto.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== Separatore visivo tra garanzia e form ===== */}
      <div className="relative">
        <div className="mx-auto max-w-6xl h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>

      {/* ===================== SEZIONE FORM ===================== */}
      <section id="contact-form" className="py-16 md:py-28 bg-slate-50">
        <div className="w-full max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl ring-1 ring-neutral-200 p-6 md:p-8 lg:p-12">
            <div className="text-center space-y-4 md:space-y-6 mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900">
                Riempi anche i mesi di bassa stagione
              </h2>
              <p className="text-base lg:text-lg text-neutral-700 leading-relaxed">
                Compila il modulo qui sotto e ti rispondo entro{" "}
                <strong className="text-neutral-900 font-semibold">24 ore</strong>. Se ci sono ancora{" "}
                <strong className="text-neutral-900 font-semibold">posti disponibili</strong>, fissiamo la prima call gratuita. <br />
                Dopo la conferma, riceverai la checklist.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-neutral-900">
                    Nome e Cognome <span className="text-blue-600">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Es. Mario Rossi"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-neutral-900">
                    Email <span className="text-blue-600">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="la-tua-email@esempio.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                <div className="space-y-2">
                  <label htmlFor="hotelName" className="text-sm font-medium text-neutral-900">
                    Nome hotel <span className="text-blue-600">*</span>
                  </label>
                  <Input
                    id="hotelName"
                    name="hotelName"
                    value={formData.hotelName}
                    onChange={handleChange}
                    required
                    placeholder="Es. Hotel Aurora"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-900">
                  Raccontami in breve la situazione
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Esempio: molte prenotazioni arrivano da OTA, poche dirette; novembre–febbraio con occupazione bassa; voglio aumentare le prenotazioni dirette del 20%…"
                  rows={4}
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="w-full sm:w-auto text-base leading-tight px-5 py-3 md:px-6 md:py-4 rounded-lg
                           bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-md
                           hover:from-blue-700 hover:to-blue-900 transition-transform hover:scale-105
                           whitespace-normal break-words min-w-[200px] text-center"
                >
                  Prenota la call
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* =================== FINE SEZIONE FORM =================== */}
    </>
  );
};

export default ContactForm;
