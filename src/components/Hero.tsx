import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative isolate bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-22 lg:py-25">
        {/* Contenuto */}
        <div className="mx-auto max-w-4xl text-center space-y-6 md:space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.08] text-neutral-900">
            Hai davvero il {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-800">
              controllo
            </span>{" "}
            del tuo hotel?
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-semibold text-neutral-500 leading-relaxed max-w-3xl mx-auto">
            Aumenta fino al 20% le prenotazioni dirette entro 3 mesi
          </p>
          {/* CTA area (vuota) */}
        </div>
      </div>

      {/* Vignetta morbida ai bordi */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
    </section>
  );
};

export default Hero;
