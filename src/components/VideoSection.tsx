import { Button } from "@/components/ui/button";
import { ClipboardCheck } from "lucide-react";
import videoFile from "@/assets/video_sito.mp4";
import videoCover from "@/assets/copertina-sito.png";

const VideoSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative isolate pt-2 md:pt-4 lg:pt-0 pb-12 md:pb-20 bg-neutral-50">
      <div className="relative w-full max-w-6xl px-4 mx-auto">
        <div className="text-center">
          {/* VIDEO */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-xl ring-1 ring-neutral-200">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                controls
                preload="metadata"
                playsInline
                poster={videoCover}
              >
                <source src={videoFile} type="video/mp4" />
                Il tuo browser non supporta il video HTML5.
              </video>
              {/* rapporto 16:9 */}
              <div className="pt-[56.25%]" />
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 md:mt-8 flex flex-col items-center gap-4 md:gap-6">
            <Button
              onClick={scrollToForm}
              className="w-full sm:w-auto text-lg px-8 py-4 rounded-lg
                         bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold shadow-md
                         hover:from-blue-700 hover:to-blue-900 transition-transform hover:scale-102"
            >
              Prenota la tua call gratuita
            </Button>

            {/* BONUS */}
            <div className="mt-8 md:mt-12 max-w-xl mx-auto bg-amber-50 rounded-2xl p-5 md:p-6 shadow-lg ring-1 ring-amber-200 text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 ring-1 ring-amber-200">
                <ClipboardCheck className="w-4 h-4 text-amber-700" />
                <span className="text-xs font-semibold text-amber-800 tracking-wide">BONUS</span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-amber-900">
                Dopo la prenotazione ricevi la
                <span className="block text-2xl font-bold text-amber-800 mt-1">
                  "Checklist Taglia Commissioni"
                </span>
              </h3>

              <p className="text-sm sm:text-base text-neutral-800 leading-relaxed">
                Una checklist pratica con <strong className="font-semibold text-amber-900">10 punti chiave</strong> per ridurre le commissioni
                degli intermediari e aumentare le prenotazioni dirette. Include suggerimenti rapidi su prezzi, follow-up
                e ottimizzazione del sito, così nella call già fissata avremo una base concreta da cui partire.
              </p>
            </div>
          </div>

          {/* SEPARATORE + SPAZIO EXTRA */}
          <div className="mt-12 md:mt-16 mb-12 md:mb-16 w-full">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
          </div>

          {/* --- SEZIONE COMMISSIONI --- */}
          <div className="mb-8 md:mb-10 text-left bg-sky-50 rounded-2xl shadow-md ring-1 ring-sky-100 px-6 py-6 md:py-10">
            <h2 className="text-2xl md:text-3xl font-bold text-sky-900 text-center">
              Quanto incidono davvero le commissioni
            </h2>

            <div className="mt-6 md:mt-8 max-w-3xl mx-auto bg-white rounded-xl shadow-sm ring-1 ring-neutral-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm md:text-base">
                  <thead className="bg-white">
                    <tr className="text-left text-neutral-700">
                      <th className="px-3 py-2 md:px-4 md:py-3 font-semibold border-b border-neutral-200">
                        Tipo di prenotazione
                      </th>
                      <th className="px-3 py-2 md:px-4 md:py-3 font-semibold border-b border-neutral-200">
                        Prezzo camera
                      </th>
                      <th className="px-3 py-2 md:px-4 md:py-3 font-semibold border-b border-neutral-200">
                        Quanto resta al tuo hotel
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr className="hover:bg-neutral-50">
                      <td className="px-3 py-2 md:px-4 md:py-3">Con intermediari</td>
                      <td className="px-3 py-2 md:px-4 md:py-3">100&nbsp;€</td>
                      <td className="px-3 py-2 md:px-4 md:py-3">80&nbsp;€</td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="px-3 py-2 md:px-4 md:py-3">Diretta</td>
                      <td className="px-3 py-2 md:px-4 md:py-3">100&nbsp;€</td>
                      <td className="px-3 py-2 md:px-4 md:py-3">100&nbsp;€</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="px-3 py-3 md:px-4 md:py-4 bg-neutral-50 border-t border-neutral-200">
                <p className="text-neutral-700 text-sm md:text-base">
                  In un hotel da 10–30 camere, con un prezzo medio di 100€, bastano 10 prenotazioni al mese
                  passate alle OTA per bruciare circa <span className="font-semibold">24.000€</span> di commissioni in un anno,
                  cioè l’equivalente di uno stipendio annuale o di una ristrutturazione completa.
                </p>
                <p className="mt-3 md:mt-4 text-neutral-700 text-sm md:text-base">
                  Senza contare il fatto che può farti <span className="font-semibold">scendere</span> di
                  ranking da un giorno all’altro, modificando leggermente l’algoritmo.
                </p>
              </div>
            </div>
          </div>
          {/* --- FINE SEZIONE COMMISSIONI --- */}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
