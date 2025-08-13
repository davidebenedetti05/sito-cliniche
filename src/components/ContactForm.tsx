import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    clinicName: "",
    city: "",
    message: "",
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Richiesta call gratuita - ${formData.clinicName || "Clinica senza nome"}`;
    const body = `Nome: ${formData.name}
Email: ${formData.email}
Telefono: ${formData.phone}
Nome Clinica: ${formData.clinicName}
Città: ${formData.city}
Messaggio: ${formData.message}`;

    const mailtoLink = `mailto:db@davidebenedetti.it?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);

    toast({
      title: "Richiesta inviata!",
      description:
        "Ti contatterò entro 24 ore per programmare la call conoscitiva gratuita.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      clinicName: "",
      city: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {/* Sezione prima/dopo */}
      <section className="py-20 lg:py-20 bg-background">
        <div className="w-full px-4 mx-auto">
          <div className="text-center space-y-6 lg:space-y-12 max-w-[1500px] mx-auto">
            <div className="bg-muted rounded-2xl p-6 lg:p-10 shadow-md border border-muted-foreground/10 text-left sm:text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-foreground">
                Com’è una giornata quando il messaggio funziona
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Entri in studio e trovi pazienti che sanno già{" "}
                <strong className="text-foreground font-semibold">perché</strong> ti hanno scelto.<br />
                La segretaria riceve messaggi{" "}
                <strong className="text-foreground font-semibold">chiari</strong>, senza dover chiedere “che rispondo?”.<br />
                Non perdi{" "}
                <strong className="text-foreground font-semibold">tempo</strong> con chi cerca solo un confronto sul prezzo.<br /><br />
                Ti basta leggere una riga per pensare:<br />
                <em>“Ok, ha capito chi siamo.”</em><br /><br />
                Questo <strong className="text-foreground font-semibold">cambiamento</strong> può iniziare già tra 7 giorni,
                ma più aspetti, più rischi di attirare i pazienti che ti fanno sempre le stesse domande.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione Garanzia & Scarsità (unica, corretta) */}
      <section className="py-10 lg:py-20 bg-muted/30">
        <div className="w-full px-4 mx-auto">
          <div className="text-center space-y-6 lg:space-y-12 max-w-[1400px] mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
              Garantisco risultati o rimborso solo a una clinica per città
            </h2>

            {/* 2 card: Garanzia + Esclusività */}
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-8 w-full">
              {/* Card Garanzia */}
              <Card className="border-2 border-primary/10 shadow-elegant hover:shadow-2xl transition-all duration-300 bg-card hover:bg-primary/5 transform hover:-translate-y-1">
                <CardContent className="p-6 lg:p-10 space-y-4 text-center">
                  <div className="bg-gradient-primary rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto shadow-elegant">
                    <span className="text-2xl sm:text-3xl text-primary-foreground">✔</span>
                  </div>
                  <div className="space-y-2 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold text-primary">
                      Garanzia risultati o rimborso
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Se, anche dopo le revisioni concordate, non otteniamo i risultati prefissati,
                      ti restituisco l’<strong className="text-foreground font-semibold">intero</strong> importo. In ogni caso, ti tieni tutti i materiali prodotti.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Card Esclusività */}
              <Card className="border-2 border-primary/10 shadow-elegant hover:shadow-2xl transition-all duration-300 bg-card hover:bg-primary/5 transform hover:-translate-y-1">
                <CardContent className="p-6 lg:p-10 space-y-4 text-center">
                  {/* stesso cerchio della spunta */}
                  <div className="bg-gradient-primary rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto shadow-elegant">
                    <span className="text-2xl sm:text-3xl text-primary-foreground">📅</span>
                  </div>
                  <div className="space-y-2 sm:space-y-4">
                    <h3 className="text-lg sm:text-xl font-bold text-primary">
                      1 sola clinica per città
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      Quando inizio a lavorare con uno studio, non accetto altri nella stessa zona.
                      Sarai l’<strong className="text-foreground font-semibold">unico</strong> ad avere il messaggio che scrivo, senza concorrenza diretta.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Card Urgenza separata */}
            <div className="w-full sm:w-[500px] mx-auto">
              <Card className="border-2 border-primary/10 shadow-elegant hover:shadow-2xl transition-all duration-300 bg-card hover:bg-primary/5 transform hover:-translate-y-1">
                <CardContent className="p-6 lg:p-10 text-center space-y-2">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">Blocca oggi la tua disponibilità.</strong><br />
                    <strong className="text-foreground font-semibold">Non</strong> posso garantire che domani la tua città sia ancora libera.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sezione form */}
      <section id="contact-form" className="py-20 lg:py-20 bg-primary/5">
        <div className="w-full px-4 mx-auto">
          <div className="w-full max-w-[800px] mx-auto">
            <div className="bg-card rounded-2xl shadow-2xl border-2 border-primary/20 p-6 sm:p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
              <div className="relative z-10">
                <div className="text-center space-y-6 lg:space-y-8 mb-10">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground">
                    Diventa l’unico della tua zona
                  </h2>
                  <p className="text-sm sm:text-base lg:text-xl text-muted-foreground leading-relaxed">
                    Compila il modulo qui sotto, ti rispondo entro 24 ore e se la tua città è ancora libera,
                    fissiamo la prima call gratuita.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Nome e Cognome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Il tuo nome completo"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email *
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

                  <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-medium text-foreground">
                      In quale città si trova la tua clinica? *
                    </label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="Es. Roma, Milano, Verona..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="clinicName" className="text-sm font-medium text-foreground">
                      Nome della Clinica *
                    </label>
                    <Input
                      id="clinicName"
                      name="clinicName"
                      value={formData.clinicName}
                      onChange={handleChange}
                      required
                      placeholder="Studio Dentistico..."
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Descrivi brevemente la tua situazione attuale
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Raccontami quali problemi stai avendo con la comunicazione della tua clinica..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-elegant"
                    size="lg"
                  >
                    Contattami per fissare la call
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
